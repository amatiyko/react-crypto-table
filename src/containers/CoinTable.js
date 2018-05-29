import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    FetchingData,
    FetchingPrice,
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
        if (store.isFetching) {
            return (
                <div>Loading...</div>
            );
        }
        let coins2show = Object.keys( store.data ).map( x=>store.data[x] ).slice( 0, store.displayCount );
        let coinsSymbols = coins2show.map( x => x.Symbol).join();
        return(
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '50px', paddingBottom: '50px', backgroundColor: '#ECECEB'}}>
                <div style={{width: '90%', backgroundColor: 'white', boxShadow: '0px 0px 20px -1px rgba(0,0,0,0.75)'}}> 
                    { coins2show.map( (data, index) => <TableRow data={data} key={index} index={index} /> )}
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

export default connect(mapStateToProps, { FetchingData, FetchingPrice, ShowMore })(CoinTable)