import React, { Component } from 'react';
import './MainApp.css';
import Dialog from '../Components/Dialog/Dialog';
import Start from '../Components/Start/Start'

export const title = {
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
            openWindows: [],
            activeWindow: ""
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
                this.setState({showWorkHistory: !this.state.showWorkHistory, openWindows: temp, activeWindow: ""});
                break;
            case "aboutMe":
                this.setState({showAboutMe: !this.state.showAboutMe, openWindows: temp, activeWindow: ""});
                break;
            case "documents":
                this.setState({showDocuments: !this.state.showDocuments, openWindows: temp, activeWindow: ""});
                break;
            case "networking":
                this.setState({showNetworking: !this.state.showNetworking, openWindows: temp, activeWindow: ""});
                break;
            default: break;
        }
    }

    minimize = (id) => {
        switch (id) {
            case "workHistory":
                this.setState({showWorkHistory: !this.state.showWorkHistory, activeWindow: ""});
                break;
            case "aboutMe":
                this.setState({showAboutMe: !this.state.showAboutMe, activeWindow: ""});
                break;
            case "documents":
                this.setState({showDocuments: !this.state.showDocuments, activeWindow: ""});
                break;
            case "networking":
                this.setState({showNetworking: !this.state.showNetworking, activeWindow: ""});
                break;
            default: break;
        }
    }


    updateDialog = (update) => {
        let temp = this.state.openWindows
        let check = temp.find(value => value === title[update])
        if (check === undefined) {
            temp.push(title[update])
        }
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

    updateActive = (dialog) => {
        if (dialog !== "") {
            this.setState({activeWindow: dialog})
        }
        if (dialog === "" && this.state.activeWindow !== "") {
            this.setState({activeWindow: ""})
        }
        console.log(dialog)
    }
	
	render() {
        
		return (
			<div className='MainApp'>
                <Dialog 
                onClose={(id) => this._showDialog(id)} 
                show={this.state.showWorkHistory}
                title={"📖 Work History"}
                activeWindow={this.state.activeWindow}
                id= {"workHistory"}
                updateActive={(dialog) => this.updateActive(dialog)}
                minimize = {(id) => this.minimize(id)}
                />
                 <Dialog 
                onClose={(id) => this._showDialog(id)} 
                show={this.state.showAboutMe}
                title={"🧍🏽‍♂️ About Me"}
                activeWindow={this.state.activeWindow}
                id={"aboutMe"}
                updateActive={(dialog) => this.updateActive(dialog)}
                minimize = {(id) => this.minimize(id)}
                />
                 <Dialog 
                onClose={(id) => this._showDialog(id)} 
                show={this.state.showDocuments}
                title={"📄 Documents"}
                activeWindow={this.state.activeWindow}
                id={"documents"}
                updateActive={(dialog) => this.updateActive(dialog)}
                minimize = {(id) => this.minimize(id)}
                />
                 <Dialog 
                onClose={(id) => this._showDialog(id)} 
                show={this.state.showNetworking}
                activeWindow={this.state.activeWindow}
                title={"🖧 Networking"}
                id={"networking"}
                updateActive={(dialog) => this.updateActive(dialog)}
                minimize = {(id) => this.minimize(id)}
                />
                <Start
                updateDialog = {(update) => this.updateDialog(update)}
                windows = {this.state.openWindows}
                activeWindow = {this.state.activeWindow}
                updateActive={(dialog) => this.updateActive(dialog)}
                minimize = {(id) => this.minimize(id)}
                />
			</div>

		);
	}
} 
