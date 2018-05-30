import {
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_ERROR,
} from './../utils/actionTypes';
import { urlCryptoList } from './../utils/consts';
import axios from 'axios';

export default function FetchData() {
    return dispatch => {
        dispatch({type: FETCHING_DATA});

        return axios.get(urlCryptoList)
            .then( res => {
                console.log('fetch result', res)
                dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data.Data})
            })
            .catch( err => {
                dispatch({ type: FETCHING_DATA_ERROR })
            })
    }
}