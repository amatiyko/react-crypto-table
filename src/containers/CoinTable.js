import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    FetchingData,
    ShowMore
} from './../Actions'

import { 
    TableRow, 
    Button 
} from './../components';

class CoinTable extends Component{
    componentDidMount() {
        this.props.FetchingData();   
    }
    render() {
        let { store } = this.props;
        if (store.isFetching || store.price.length === 0) {
            return (
                <div>Loading...</div>
            );
        }
        let coins2show = Object.keys( store.data ).map( x=>store.data[x] ).slice( 0, store.displayCount );
        return(
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '50px', paddingBottom: '50px', backgroundColor: '#ECECEB'}}>
                <div style={{width: '90%', maxWidth:'930px', backgroundColor: 'white', boxShadow: '0px 0px 20px -1px rgba(0,0,0,0.75)'}}>
                    <div style={{display: 'flex', height:  '50px', borderBottom: '1px solid rgba(128, 128, 128,.3)', margin: '0 5px'}}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px'}}>
                            <span style={{color: '#202020',fontWeight: 700,fontSize: '13px'}}>
                                #
                            </span>
                        </div> 
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '170px'}}>
                            Logo
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '170px'}}>
                            <span style={{color: '#42385C',fontWeight: 700,fontSize: '13px'}}>
                                Coin
                            </span>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '170px'}}>
                            <span style={{color: '#42385C',fontWeight: 700,fontSize: '13px'}}>
                                Price (BTC)
                            </span>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '170px'}}>
                            <span style={{color: '#42385C',fontWeight: 700,fontSize: '13px'}}>
                                Price (USD)
                            </span>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '170px'}}>
                            <span style={{color: '#42385C',fontWeight: 700,fontSize: '13px'}}>
                                Price (EUR)
                            </span>
                        </div>
                    </div> 
                    { coins2show.map( (data, index) => <TableRow data={data} key={index} index={index} fetch={this.props.FetchingData} /> )}
                </div> 
                <Button text='Show more' action={this.props.ShowMore} />
            </div>            
        )
    }
}

function mapStateToProps(state) {
    return {
        store: state
    }
}

export default connect(mapStateToProps, { FetchingData, ShowMore })(CoinTable)