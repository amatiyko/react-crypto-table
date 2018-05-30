import {
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS,
    SHOW_MORE,
    FETCHING_DATA_ERROR
} from './../utils/actionTypes';
import { displayStep } from './../utils/consts'

const initialState = {
    isFetching: false,
    price: {},
    displayCount: 20,
    data: {},
    error: false,
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
        case FETCHING_DATA_ERROR: {
            return Object.assign({}, state, {
                isFetching: false,
                error: true
            })
        }
        case SHOW_MORE:
            return Object.assign({}, state, {
                displayCount: state.displayCount + displayStep
            })
        default: 
            return state;
    }
}