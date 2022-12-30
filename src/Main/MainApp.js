import React, { Component } from 'react';
import './MainApp.css';
import Dialog from '../Components/Dialog/Dialog';
import Start from '../Components/Start/Start'

const title = {
    "workHistory": "📖 Work History",
    "aboutMe": "🧍🏽‍♂️ About Me",
    "documents": "📄 Documents",
    "networking": "🖧 Networking"
}


export default class MainApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showWorkHistory: false,
            showAboutMe: false,
            showDocuments: false,
            showNetworking: false,
            openWindows: []
        }
    }

    _showDialog(id) {
        let temp = this.state.openWindows
        let check = temp.find(value => value === title[id])
        if (check === undefined) {
            return
        }
        temp.splice(temp.indexOf(title[id]), 1)
        switch (id) {
            case "workHistory":
                this.setState({showWorkHistory: !this.state.showWorkHistory, openWindows: temp});
                break;
            case "aboutMe":
                this.setState({showAboutMe: !this.state.showAboutMe, openWindows: temp});
                break;
            case "documents":
                this.setState({showDocuments: !this.state.showDocuments, openWindows: temp});
                break;
            case "networking":
                this.setState({showNetworking: !this.state.showNetworking, openWindows: temp});
                break;
            default: break;
        }
    }

    updateDialog = (update) => {
        let temp = this.state.openWindows
        let check = temp.find(value => value === title[update])
        if (check !== undefined) {
            return
        }
        temp.push(title[update])
        switch (update) {
            case "workHistory":
                this.setState({showWorkHistory: true, openWindows: temp});
                break;
            case "aboutMe":
                this.setState({showAboutMe: true, openWindows: temp});
                break;
            case "documents":
                this.setState({showDocuments: true, openWindows: temp});
                break;
            case "networking":
                this.setState({showNetworking: true, openWindows: temp});
                break;
            default:
                break;
        }
        
    }
	
	render() {
        
		return (
			<div className='MainApp'>
                <Dialog 
                onClose={(id) => this._showDialog(id)} 
                show={this.state.showWorkHistory}
                title={"📖 Work History"}
                id= {"workHistory"}
                />
                 <Dialog 
                onClose={(id) => this._showDialog(id)} 
                show={this.state.showAboutMe}
                title={"🧍🏽‍♂️ About Me"}
                id={"aboutMe"}
                />
                 <Dialog 
                onClose={(id) => this._showDialog(id)} 
                show={this.state.showDocuments}
                title={"📄 Documents"}
                id={"documents"}
                />
                 <Dialog 
                onClose={(id) => this._showDialog(id)} 
                show={this.state.showNetworking}
                title={"🖧 Networking"}
                id={"networking"}
                />
                <Start
                updateDialog = {(update) => this.updateDialog(update)}
                windows = {this.state.openWindows}
                />
			</div>

		);
	}
} 
