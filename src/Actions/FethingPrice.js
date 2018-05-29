import {
    FETHING_PRICE, 
    FETCHING_PRICE_SUCCESS
} from './../utils/actionTypes';
import {
    USD, urlPriceMulti
} from './../utils/consts'
import axios from 'axios';

export default function FetchPrice(fromSymbols) {
    return dispatch => {
        dispatch({type: FETHING_PRICE});

        return axios.get(`${urlPriceMulti}?fsyms=${fromSymbols}&tsyms=${USD}`)
            .then( res => {
                dispatch({ type: FETCHING_PRICE_SUCCESS, payload: res})
            })
    }
}