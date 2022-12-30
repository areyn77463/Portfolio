import React, { Component } from 'react';
import './MainApp.css';
import Dialog from '../Components/Dialog/Dialog';
import Start from '../Components/Start/Start'


export default class MainApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showWorkHistory: false,
            showAboutMe: false,
            showDocuments: false,
            showNetworking: false,
        }
    }

    _showDialog(id) {
        switch (id) {
            case 0:
                this.setState({showWorkHistory: !this.state.showWorkHistory});
                break;
            case 1:
                this.setState({showAboutMe: !this.state.showAboutMe});
                break;
            case 2:
                this.setState({showDocuments: !this.state.showDocuments});
                break;
            case 3:
                this.setState({showNetworking: !this.state.showNetworking});
                break;
            default: break;
        }
    }

    updateDialog = (update) => {
        switch (update) {
            case "workHistory":
                this.setState({showWorkHistory: true});
                break;
            case "aboutMe":
                this.setState({showAboutMe: true});
                break;
            case "documents":
                this.setState({showDocuments: true});
                break;
            case "networking":
                this.setState({showNetworking: true});
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
                id= {0}
                />
                 <Dialog 
                onClose={(id) => this._showDialog(id)} 
                show={this.state.showAboutMe}
                title={"🧍🏽‍♂️ About Me"}
                id={1}
                />
                 <Dialog 
                onClose={(id) => this._showDialog(id)} 
                show={this.state.showDocuments}
                title={"📄 Documents"}
                id={2}
                />
                 <Dialog 
                onClose={(id) => this._showDialog(id)} 
                show={this.state.showNetworking}
                title={"🖧 Networking"}
                id={3}
                />
                <Start
                updateDialog = {(update) => this.updateDialog(update)}
                />
			</div>

		);
	}
} 
