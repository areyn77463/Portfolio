import React, { Component } from 'react';
import StartImage from "../../Assets/Images/clipart426533.png"
import "./Start.css"
import { createRef } from 'react';  
import {title as fullTitles} from '../../Main/MainApp'

const styles = {
    startItem: {
        float: "left",
        marginTop: "3px",
        marginLeft: "20px",
        display: "block",
        border: "none",
        textAlign: "left",
        padding: "10px 16px",
        textDecoration: "none",
    },
    selectedStartItem: {
        float: "left",
        marginTop: "3px",
        marginLeft: "20px",
        display: "block",
        border: "none",
        textAlign: "left",
        padding: "10px 16px",
        textDecoration: "none",
        backgroundColor: 'darkBlue',
        color: 'white'
    },
    selectedCaret: {
        borderLeft: 'white'
    },
    innerStartItem: {
        float: "left",
        display: "block",
        border: "none",
        textAlign: "left",
        margin: '0',
        padding: "1px 16px",
        textDecoration: "none",
    },
    bottomItem: {
        float: "left",
        marginTop: "0px",
        marginLeft: "20px",
        display: "block",
        border: "none",
        textAlign: "left",
        padding: "10px 16px",
        textDecoration: "none",
        borderTop: " 2px outset"
    },
    aboveBottomItem: {
        float: "left",
        marginTop: "3px",
        marginLeft: "20px",
        display: "block",
        border: "none",
        textAlign: "left",
        padding: "10px 16px",
        textDecoration: "none",
        borderBottom: "2px outset"
    },
}

export default class Dialog extends Component {
    constructor(props) {
        super(props);

        this.menuRef = createRef();
        this.listItemRef = createRef();
        this.startRightRef = createRef();

        this.state = {
            time:  new  Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"}),
            isMenuVisible: false, 
            startRightStyle: "start_right",
            originalRight: 0,
            isDocumentsVisible: false
        }
    }

    componentDidMount = () => {
        this.interval = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})
            });
        }, 1000)

        document.addEventListener("click", this.handleClickOutside);
        this.setState({originalRight: this.startRightRef.current.offsetLeft})

    }

    componentDidUpdate = () => {
        if (this.listItemRef.current) {
            const itemLeft = this.listItemRef.current.offsetLeft;
            if (itemLeft+200 > (window.innerWidth-Number(116)) && this.state.startRightStyle !== "start_right_sized") {
                this.setState({startRightStyle: "start_right_sized"})
            }
            if (itemLeft+200 < (window.innerWidth-Number(116)) && this.state.startRightStyle !== "start_right") {
                this.setState({startRightStyle: "start_right"})
            }
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
        document.removeEventListener("click", this.handleClickOutside)
    }

    handleClickOutside = (event) => {
        if (this.menuRef.current && !this.menuRef.current.contains(event.target)) {
            this.setState({isMenuVisible: false, isDocumentsVisible: false})
        }
    }

    toggleMenu = () => {
        this.setState(state => ({
            isMenuVisible: !state.isMenuVisible
        }))
        
    }

    handleItemClick = (name) => {
        this.toggleMenu()
        this.handleOffHover()
        this.props.updateDialog(name)
        this.props.updateActive(fullTitles[name])
    }

    handleOnHover = () => {
        this.setState({isDocumentsVisible: true})
    }

    handleOffHover = () => {
        this.setState({isDocumentsVisible: false})

    }

    render() {
        
        return (<>
        <ul ref={this.menuRef}>
            <div className={this.state.isMenuVisible ? "start_left_onClick" :  "start_left"}>
                <li onClick={this.toggleMenu}>
                    <img 
                        src={StartImage} 
                        alt="Windows logo" 
                        style={{
                            width: '20px',
                            height: '20px',
                            verticalAlign: 'bottom',
                            padding: '0 3px 0 0',
                            transform: 'rotate(-20deg)',
                    }}/>
                    <span style={{ fontFamily: 'MS Sans Serif', fontWeight: 'bold' }}>Start</span>
                </li>
            </div>
            {/* <div className={"item_container"}> */}
                {this.props.windows.map((title) => {
                    return (
                        <li 
                            ref={this.listItemRef} 
                            className={this.props.activeWindow === title ? "list_item_active" : "list_item"} 
                            key={Math.random()}
                            onClick={() => {this.props.updateActive(title); this.props.updateDialog(Object.keys(fullTitles).find(key => fullTitles[key] === title))}} 
                        >
                            {title}
                        </li>
                    )
                })}
            {/* </div> */}
            {this.state.isMenuVisible && (
                <div style={{ 
                    position: "fixed", 
                    zIndex: 2, 
                    display: "flex", 
                    flexDirection: "column",
                    bottom: "32.5px",
                    left: "3px",
                    backgroundColor: "rgb(214, 211, 206)",
                    border: "outset",
                    width: "200px"
                    }}>
                    <div style={{
                        writingMode: "vertical-rl",
                        transform: 'rotate(180deg)',
                        zIndex: 2,
                        position: "absolute",
                        backgroundColor: "#5c5c5c",
                        color: "rgb(214, 211, 206)",
                        height: "100%",
                        fontFamily: 'MS Sans Serif', 
                        fontWeight: 'bold',
                        fontSize: "1.4rem"
                    }}> &nbsp; Aaron Reynolds</div>
                    <li 
                    className="start_item" style={styles.startItem} >
                    🖥️ &nbsp; Projects
                        <div className="caret"></div>
                    </li>
                    <li 
                    className="start_item" 
                    style={this.state.isDocumentsVisible ? styles.selectedStartItem : styles.startItem}
                    onMouseEnter={this.handleOnHover}
                    >📄 &nbsp; Documents
                        <div className={this.state.isDocumentsVisible ? "selectedCaret" : "caret"}></div>
                    </li>
                    <li 
                    className="start_item" 
                    style={styles.startItem}
                    onMouseEnter={this.handleOffHover}
                    onClick={() => this.handleItemClick("networking")}
                    >🖧 &nbsp;&nbsp; Networking</li>
                    <li 
                    className="start_item" 
                    style={styles.startItem}
                    onMouseEnter={this.handleOffHover}
                    onClick={() => this.handleItemClick("workHistory")}
                    >📖 &nbsp; Work History</li>
                    <li 
                    className="start_item" 
                    style={styles.aboveBottomItem}
                    onMouseEnter={this.handleOffHover}
                    onClick={() => this.handleItemClick("aboutMe")}
                    >🧍🏽‍♂️ &nbsp; About Me</li>
                    <li 
                    className="start_item" 
                    style={styles.bottomItem}
                    onMouseEnter={this.handleOffHover}
                    onClick={() => window.history.back()}
                    >🔙 &nbsp; Go Back ...
                    </li>
                </div>
            )}

            {this.state.isDocumentsVisible && (
                <div style={{ 
                    position: "fixed", 
                    zIndex: 4, 
                    display: "flex", 
                    flexDirection: "column",
                    bottom: "228px",
                    left: "198px",
                    backgroundColor: "rgb(214, 211, 206)",
                    border: "outset",
                    width: "200px"
                    }}
                    >
                    <li 
                    className="start_item" style={styles.innerStartItem}
                    onClick={() => this.handleItemClick("resume")}
                    >
                    📜 &nbsp; Resume
                    </li>
                </div>
            )}

                    
            <div className={this.state.startRightStyle}>
                <li ref={this.startRightRef}>{this.state.time}</li>
            </div>
        </ul>
        </>)
    }
}