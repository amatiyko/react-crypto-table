import {
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS
} from './../utils/actionTypes';
import { urlCryptoList } from './../utils/consts';
import axios from 'axios';

export default function FetchData() {
    return dispatch => {
        dispatch({type: FETCHING_DATA});

        return axios.get(urlCryptoList)
            .then( res => {
                dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.Data})
            })
    }
}