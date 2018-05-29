import {
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS
} from './../utils/actionTypes';

const initialState = {
    isFetching: true, 
    data: {}
}

export default function(state = initialState, action) {
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