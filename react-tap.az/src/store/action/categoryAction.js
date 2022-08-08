import { actionType } from "../type/actionType";
import axios from "axios";


const GetCategory = (data) => {
    return {
        type: actionType.Get_Category,
        payload: data
    }
}


export const getData = () => {
    return dispatch => {
        axios.get('https://reactproject2-f3a27-default-rtdb.firebaseio.com/Category.json')
            .then(({ data }) => {
                let catArr = [];
                for (let key in data) {
                    data[key].id = key;
                    catArr.push(data[key])
                }
                dispatch(GetCategory(catArr));
            })
    }
}



