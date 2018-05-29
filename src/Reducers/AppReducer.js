import {
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS,
    FETHING_PRICE,
    FETCHING_PRICE_SUCCESS,
    SHOW_MORE
} from './../utils/actionTypes';
import { displayStep } from './../utils/consts'

const initialState = {
    isFetching: false,
    price: {},
    displayCount: 20,
    data: {}
}

export default function AppReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_DATA: 
            return Object.assign({}, state, {
                isFetching: true
            })
        case FETCHING_DATA_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload
            })
        }
        case FETHING_PRICE: 
            return Object.assign({}, state, {
                isFetching: true
            })
        case FETCHING_PRICE_SUCCESS: 
            return Object.assign({}, state, {
                isFetching: false,
                price: action.payload
            })
        case SHOW_MORE:
            return Object.assign({}, state, {
                displayCount: state.displayCount + displayStep
            })
        default: 
            return state;
    }
}