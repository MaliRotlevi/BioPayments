import * as ActionTypes from '../ActionTypes';


const initialState = {
    travelConstracts: [{}]

}


export const constractsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CONSTRACTS_SAVED:
            return { ...state, travelConstracts: action.payload } 
    }
    return state;
}