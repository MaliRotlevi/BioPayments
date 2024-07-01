import * as ActionTypes from '../ActionTypes';


const initialState = {
    currentUser: {
        id: "",
        firstName: "",
        lastName: "",
        birthDate: "",
        userName: "",
        userPassword: "",
        fingerPrint: "",
        profileCode: 0,
        isDriver: false,
        email: ""
    }
}



export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SAVE_USER:
            {
                
                return { ...state, currentUser: action.payload }

            }
        case ActionTypes.ADD_USER:
            {

                console.log("inside the reduser of add user");
                return {
                    ...state, currentUser: action.payload
                }
            }
        case ActionTypes.USER_UPDATE:
            {
                return {
                    ...state,
                    currentUser:action.payload
                }
            }
    }
    return state;
}