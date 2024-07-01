import * as ActionTypes from '../ActionTypes';
import axios from 'axios';
import swal from 'sweetalert';

export const ifThereIsSensor = () => {
    return (dispatch) => {
        axios.get(`https://localhost:44321/api/fingerPrint/ifThereIsSensor`)
            .then(response => {
                if (response.data == true)
                    swal("Yayyy", "there is sensor", "success");
                else
                    swal("oops", "there isn't sensor", "error")
            }
            )
            .catch(error => {
                console.log("inside the catch");
                console.log(error);
            })
    }
}

