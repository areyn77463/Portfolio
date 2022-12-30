import React, { Component } from 'react';
import './Dialog.css'

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
        marginLeft: '2px'
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
        lineHeight: '15px'
    },
    titleButtonInactive: {
        width: '15px',
        height: '15px',
        backgroundColor: 'rgb(214, 211, 206)',
        border: '2px outset rgb(214, 211, 206)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '.8rem',
        fontWeight: 'bold',
        cursor: 'default',
        marginTop: '2px',
    }
}

export default class Dialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            diffX: 0,
            diffY: 0,
            drragging: false,
            styles:{}
        }
    }

    _dragStart = (e) => {
        this.setState({
            diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
            diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
            dragging: true
        });
    }

    _dragging = (e) => {

        if (this.state.dragging) {
            let left = e.screenX - this.state.diffX;
            let top = e.screenY - this.state.diffY;

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

    render() {
        let classes = this.props.show ? 'Dialog' : 'Dialog hidden'

        return (
            <div className ={classes} 
            style={this.state.styles}
            onMouseDown={this._dragStart} 
            onMouseMove={this._dragging} 
            onMouseUp={this._dragEnd}>
                <div className="DialogTitle">
                    {this.props.title}
                    <div style={{display: 'flex', flexDirection:'row'}}>
                        <button style={styles.titleButtonInactive_}>
                            &minus;
                        </button>
                        <button style={styles.titleButtonInactive}>
                            &#10064;
                        </button>
                        <button  onClick={() => this.props.onClose(this.props.id)} style={styles.titleButtonInactiveX}>
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