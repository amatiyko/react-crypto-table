import {
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS
} from './../utils/actionTypes';

const initialState = {
    isFetching: false, 
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
        default: 
            return state;
    }
}