import React, {Component} from 'react';

export default class Button extends Component {
    render() {
        return (
            <div style={{marginTop: '20px'}}>
                <button 
                    onClick={this.props.action}
                    style={{backgroundColor: '#42385C', color: 'white', height: '48px', paddingLeft: '20px', paddingRight: '20px', borderRadius: '5px', outline: 'none', cursor: 'pointer', fontSize: '14px'}}
                    >
                    {this.props.text}
                </button>
            </div>
        )
    }
}