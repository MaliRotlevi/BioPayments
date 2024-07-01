import * as ActionTypes from '../ActionTypes';
import axios from 'axios';
import swal from 'sweetalert';
import { getTravelsToUser } from './travelsToUser'
import { getProfileName } from './profile';
import { getConstracts } from './constracts';
import { getConstractToUser } from './constractToUser';

export const postUser = (user) => {

    return (dispatch) => {
        axios.post(`https://localhost:44321/api/user/addUser`, user)
            .then(response => {
                console.log(response.data);
                dispatch(addUser(response.data));

                swal("BARUCH HASHEM!", "Your details have been saved in the system", "success");


            }
            )
            .catch(error => {
                console.log("inside the cath of the register");
                console.log(error);
            })
    }
}
export const logUser = (user) => {
    return (dispatch) => {
        axios.get(`https://localhost:44321/api/user/getUser?username=${user.userName}&password=${user.userPassword}`)
            .then(response => {
                console.log(response);
                if (response.data == null || response.data == undefined) {

                    swal("Ho no...", "The user name or the password are wrong", "error");
                }
                else {
                    console.log(response.data);
                    dispatch(saveUser(response.data))
                    dispatch(getTravelsToUser(response.data.id))
                    dispatch(getProfileName(response.data.profileCode))
                    dispatch(getConstractToUser(response.data.id))
                    dispatch(getConstracts());
                    swal("Good job!", "you logged in!", "success");

                }
            })
            .catch(error => {
                console.log("inside the catch");
                console.log(error);
            })
    }
}




export const updetaUser = (user) => {
    debugger
    return (dispatch) => {
        console.log(user);
        axios.put('https://localhost:44321/api/user/updateUser', user).
            then(response => {
                debugger
                console.log(response);
                dispatch(update(response.data))
                swal("it's updated")
            })
            .catch(err => {
                console.log(err);
                swal("oops... there is problem with the update!!")

            })
    }
}
export const saveUser = (user) => {
    return {
        type: ActionTypes.SAVE_USER,
        payload: user
    }
}
export const update = (user) => {
    return {
        type: ActionTypes.USER_UPDATE,
        payload: user
    }
}
export const addUser = (user) => {

    return {
        type: ActionTypes.ADD_USER,
        payload: user
    }
}
export const logOutUser = (user) => {
    return {
        type: ActionTypes.SAVE_USER,
        payload: user
    }
}