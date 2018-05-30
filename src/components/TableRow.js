import React, { Component } from 'react';
import { mainUrl } from './../utils/consts';
import { 
    urlPrice, 
    BTC,
    USD,
    EUR
} from './../utils/consts'
import axios from 'axios';

export default class TableRow extends Component{
    constructor(props) {
        super(props);
        this.state={
            price: null
        }
    }
    componentDidMount(){
        axios.get(`${urlPrice}?fsym=${this.props.data.Symbol}&tsyms=BTC,USD,EUR`)
            .then((res)=> {
                if (res.Response && res.Response==='Error'){
                    this.setState({price: 'no data'})
                } else {
                    this.setState({price: res.data})
                }
            })
    }
    render() {
        let { data, index } = this.props;
        let { price } = this.state;
        
        return (
            <div style={{display: 'flex', height:  '50px', borderBottom: '1px solid rgba(128, 128, 128,.3)', margin: '0 5px'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px'}}>
                    <span style={{color: '#202020',fontWeight: 700,fontSize: '13px'}}>
                        { index+1 }
                    </span>
                </div> 
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '170px'}}>
                    <img style={{ width: '30px', height: '30px' }} src={`${mainUrl}${data.ImageUrl}`} alt={data.Symbol}/>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '170px'}}>
                    <span style={{color: '#42385C',fontWeight: 700,fontSize: '13px'}}>
                        {data.CoinName}
                    </span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '170px'}}>
                    <span style={{color: '#42385C',fontWeight: 700,fontSize: '13px'}}>
                        { price && price.BTC || 'no info' }
                    </span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '170px'}}>
                    <span style={{color: '#42385C',fontWeight: 700,fontSize: '13px'}}>
                        {price && price.USD || 'no info'}
                    </span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '170px'}}>
                    <span style={{color: '#42385C',fontWeight: 700,fontSize: '13px'}}>
                        {price && price.EUR || 'no info'}
                    </span>
                </div>
            </div>
        )
    }
}