import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchingData } from './../Actions'


class CoinTable extends Component{
    componentDidMount() {
        this.props.FetchingData();
    }
    render() {
        console.log(';coin table', this.props);
        return(
            <div>Coin table</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        store: state
    }
}

export default connect(mapStateToProps, { FetchingData })(CoinTable)