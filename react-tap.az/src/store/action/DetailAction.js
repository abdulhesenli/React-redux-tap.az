import { actionType } from "../type/actionType";
import axios from "axios";


const productDetailAction =(data)=>{
    return{
        type:actionType.DataDetail,
        payload:data,
    };

};

export const DetailDataID =(id)=>{
    return async dispatch=>{
        const {data}=await axios.get(`https://reactproject2-f3a27-default-rtdb.firebaseio.com/Newproduct/${id}.json`)

        dispatch(productDetailAction(data))
    };
};