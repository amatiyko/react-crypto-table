import React, { Component } from 'react';
import { mainUrl } from './../utils/consts';

export default class TableRow extends Component{
    render() {
        let { data, index } = this.props;
        return (
            <div style={{display: 'flex', height:  '50px'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px'}}>
                    <span style={{color: '#202020',fontWeight: 700,fontSize: '13px'}}>{ index+1 }</span>
                </div> 
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '170px'}}>
                    <img style={{ width: '30px', height: '30px' }} src={`${mainUrl}${data.ImageUrl}`} alt={data.Symbol}/>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '170px'}}>
                    <span style={{color: '#42385C',fontWeight: 700,fontSize: '13px'}}>{data.CoinName}</span>
                </div>
            </div>
        )
    }
}