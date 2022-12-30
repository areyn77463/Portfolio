import React, { Component } from 'react';
import './Dialog.css'
import {createRef} from 'react';

const styles = {
    titleButtonInactiveX: {
        width: '15px',
        height: '15px',
        backgroundColor: 'rgb(214, 211, 206)',
        border: '2px outset rgb(214, 211, 206)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'default',
        marginTop: '2px',
        marginRight: '2px',
        marginLeft: '2px',
    },
    titleButtonActiveX: {
        width: '15px',
        height: '15px',
        backgroundColor: 'rgb(214, 211, 206)',
        border: '2px inset rgb(214, 211, 206)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'default',
        marginTop: '2px',
        marginRight: '2px',
        marginLeft: '2px',
    },
    titleButtonInactive_: {
        width: '15px',
        height: '15px',
        backgroundColor: 'rgb(214, 211, 206)',
        border: '2px outset rgb(214, 211, 206)',
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'center',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'default',
        marginTop: '2px',
        lineHeight: '16px'
    },
    titleButtonActive_: {
        width: '15px',
        height: '15px',
        backgroundColor: 'rgb(214, 211, 206)',
        border: '2px inset rgb(214, 211, 206)',
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'center',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'default',
        marginTop: '2px',
        lineHeight: '16px'
    },
    titleButtonInactive: {
        width: '15px',
        height: '15px',
        backgroundColor: 'rgb(214, 211, 206)',
        border: '2px outset rgb(214, 211, 206)',
        color: '#5c5c5c',
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'center',
        fontSize: '.8rem',
        fontWeight: 'bold',
        cursor: 'default',
        marginTop: '2px',
        lineHeight: '10px'
    }
}

export default class Dialog extends Component {
    constructor(props) {
        super(props);

        this.dialogRef = createRef()

        this.state = {
            diffX: 0,
            diffY: 0,
            drragging: false,
            styles:{},
            xActive: false,
            _Active: false,
            isActive: false
        }
    }

    componentDidMount = () => {
        document.addEventListener("click", this.handleClickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener("click", this.handleClickOutside)
    }

    handleClickOutside = (event) => {
        if (this.dialogRef.current &&  !this.dialogRef.current.contains(event.target)) {
            this.setState({isActive: false})
        }
    }

    _dragStart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({isActive: true})
        if (e.target.id === "DialogTitle") {
            this.setState({
                diffX: e.clientX - e.currentTarget.getBoundingClientRect().left,
                diffY: e.clientY - e.currentTarget.getBoundingClientRect().top,
                dragging: true
            });
        }
    }

    _dragging = (e) => {

        if (this.state.dragging) {
            let left = e.clientX - this.state.diffX;
            let top = e.clientY - this.state.diffY;

            this.setState({
                styles: {
                    left: left,
                    top: top
                }
            });
        }
    }

    _dragEnd = () => {
        this.setState({
            dragging: false
        })
    }

    handleClose = async () => {
        this.setState({xActive: true})
    }

    render() {
        let classes = this.props.show ? 'Dialog' : 'Dialog hidden'
        classes = this.state.isActive ? 'DialogActive' : classes

        return (
            <div className ={classes} 
            ref={this.dialogRef}
            style={this.state.styles}
            onMouseDown={this._dragStart} 
            onMouseMove={this._dragging} 
            onMouseUp={this._dragEnd}
            onMouseLeave={this._dragEnd}
            >
                <div 
                className={this.state.isActive ? "DialogTitleActive" : "DialogTitle"} 
                id={"DialogTitle"}
                onMouseDown={() => this.setState({isActive: true})}
                >
                    {this.props.title}
                    <div style={{display: 'flex', flexDirection:'row'}}>
                        <button
                        onMouseDown={() => {this.setState({_Active: true})}}
                        onMouseUp={() => this.setState({_Active: false})}
                        onMouseLeave={() => this.setState({_Active: false})}
                        style={this.state._Active ? styles.titleButtonActive_ : styles.titleButtonInactive_}>
                            &minus;
                        </button>
                        <button style={styles.titleButtonInactive}>
                            &#10064;
                        </button>
                        <button  
                        onClick={() => {
                            this.setState({isActive: false})
                            this.props.onClose(this.props.id)
                        }} 
                        onMouseDown={() => {this.setState({xActive: true})}}
                        onMouseUp={() => this.setState({xActive: false})}
                        onMouseLeave={() => this.setState({xActive: false})}
                        style={this.state.xActive ? styles.titleButtonActiveX : styles.titleButtonInactiveX}>
                            &times;
                        </button>
                    </div>
                </div>
                <div  className="Contents">
                    Contents of the Dialog:
                     - one
                     - two
                     - three
                </div>
            </div>
        );
    }
}