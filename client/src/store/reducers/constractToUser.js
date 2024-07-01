import * as ActionTypes from '../ActionTypes';


const initialState = {
    constractsToUser: [{}],
    

}

export const constractToUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CONSTRACT_TO_USER_SAVED:
            return { ...state, constractsToUser: action.payload }
        case ActionTypes.CONSTRACT_ADDED:
            return {
                ...state,
                 constractsToUser: [...state.constractsToUser, action.payload]
            }
        case ActionTypes.CONSTRACT_UPDATE:
            let arr2 = state.constractsToUser.filter((item) => item.id !== action.payload.id);
            arr2.push(action.payload)
            console.log(arr2)
            return {
                ...state,
                constractsToUser: arr2
            }
    }
    return state;
}