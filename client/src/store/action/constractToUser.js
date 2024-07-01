import axios from "axios"
import * as ActionTypes from '../ActionTypes';
import swal from 'sweetalert';


export const updateAccumulatedValue = (c, moneyToAdd) => {
    return (dispatch) => {
        axios.put(`https://localhost:44321/api/constractToUser/updateConstractToUser?c=${c}&moneyToAdd=${moneyToAdd}`)
            .
            then(response => {
                console.log(response);
                dispatch(update(response.data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const addConsractToUser = (c, moneyToAdd = 0) => {
    debugger
    if (c.constractCode == 1) {
        return (dispatch) => {
            axios.get(`https://localhost:44321/api/constractToUser/ifExistStoredValue?userId=${c.userId}`).then(
                response => {
                    debugger
                    if (response.data == true) {
                        return (dispatch) => {
                            axios.put(`https://localhost:44321/api/constractToUser/updateConstractToUser?c=${c}&moneyToAdd=${moneyToAdd}`)
                                .then(response => {
                                    debugger
                                    swal("added money to stored value");
                                })
                        }
                    }
                    else {
                        return (dispatch) => {
                            axios.post(`https://localhost:44321/api/constractToUser/addConstractToUser?c=${c}`)
                                .then(
                                    response => {
                                        debugger
                                        swal("added new stored value");
                                    }
                                )
                        }

                    }
                }
            )
        }
    }
    else {
        return (dispatch) => {
            axios.get(`https://localhost:44321/api/constractToUser/ifExistAnyConstract?userId=${c.userId}`).then(
                response => {
                    if (response.data = true) {
                        swal("it's not possible to create multiple constract to user")
                    }
                    else {
                        return (dispatch) => {
                            axios.post(`https://localhost:44321/api/constractToUser/addConstractToUser?c=${c}`)
                                .then(response => {
                                    swal("constract added successfully");
                                })
                        }

                    }
                }
            )

        }
    }
}

export const getConstractToUser = (userId) => {
    return (dispatch) => {
        axios.get(`https://localhost:44321/api/constractToUser/getConstractsToUser?userId=${userId}`).
            then(response => {
                console.log(response.data);
                dispatch(saveConstractToUser(response.data))
            })
            .catch(err => {
                console.log(err);

            })
    }
}


export const addConstractToUser = (c) => {

    return (dispatch) => {
        axios.post(`https://localhost:44321/api/constractToUser/`, c)
            .then(response => {
                console.log(response.data);
                dispatch(addConstract(response.data));
                swal("BARUCH HASHEM!", "your constract have added successfully", "success");


            }
            )
            .catch(error => {
                console.log(error);
            })
    }
}

export const update = (c) => {
    return {
        type: "CONSTRACT_UPDATE",
        payload: c
    }
}
export const addConstract = (c) => {
    return {
        type: "CONSTRACT_ADDED",
        payload: c
    }
}
export const saveConstractToUser = (c) => {
    return {
        type: ActionTypes.CONSTRACT_TO_USER_SAVED,
        payload: c
    }
}

