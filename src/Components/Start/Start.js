import React, { Component } from 'react';
import StartImage from "../../Assets/Images/clipart426533.png"
import "./Start.css"
import { createRef } from 'react';  

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
            isMenuvisible: false, 
            startRightStyle: "start_right",
            originalRight: 0
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
                console.log("sized")
                this.setState({startRightStyle: "start_right_sized"})
            }
            if (itemLeft+200 < (window.innerWidth-Number(116)) && this.state.startRightStyle !== "start_right") {
                console.log("standard")
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
            this.setState({isMenuVisible: false})
        }
    }

    toggleMenu = () => {
        this.setState(state => ({
            isMenuVisible: !state.isMenuVisible
        }))
        
    }

    handleItemClick = (name) => {
        this.toggleMenu()
        this.props.updateDialog(name)
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
                        <li ref={this.listItemRef} className={"list_item"} key={Math.random()} >{title}</li>
                    )
                })}
            {/* </div> */}
            {this.state.isMenuVisible && (
                <div style={{ 
                    position: "fixed", 
                    zIndex: 2, 
                    display: "flex", 
                    flexDirection: "column",
                    bottom: "30px",
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
                        <div class="caret"></div>
                    </li>
                    <li 
                    className="start_item" 
                    style={styles.startItem}
                    onClick={() => this.handleItemClick("workHistory")}
                    >📖 &nbsp; Work History</li>
                    <li 
                    className="start_item" 
                    style={styles.startItem}
                    onClick={() => this.handleItemClick("aboutMe")}
                    >🧍🏽‍♂️ &nbsp; About Me</li>
                    <li 
                    className="start_item" 
                    style={styles.startItem}
                    onClick={() => this.handleItemClick("documents")}
                    >📄 &nbsp; Documents</li>
                    <li 
                    className="start_item" 
                    style={styles.aboveBottomItem}
                    onClick={() => this.handleItemClick("networking")}
                    >🖧 &nbsp;&nbsp; Networking</li>
                    <li 
                    className="start_item" 
                    style={styles.bottomItem}
                    onClick={() => window.history.back()}
                    >🔙 &nbsp; Go Back ...
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