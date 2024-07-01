import axios from "axios"
import * as ActionTypes from '../ActionTypes';
import swal from 'sweetalert';


export const getConstracts = () => {
    return (dispatch) => {
        debugger
        axios.get(`https://localhost:44321/api/constracts/getAllConstracts`).
            then(response => {
                console.log(response.data);
                console.log("insisde then constractss")
                dispatch(saveConstracts(response.data))
            })
            .catch(err => {
                console.log(err);
                console.log("insisde catch constractss")
            })
    }
}


export const saveConstracts = (c) => {
    return {
        type: ActionTypes.CONSTRACTS_SAVED,
        payload: c
    }
}