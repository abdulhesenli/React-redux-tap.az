import { actionType } from "../type/actionType";
import axios from "axios";

const GetProduct =(data)=>{
    return{
        type:actionType.Get_Product,
        payload:data
    }
};

export const ProductData = () => {

    return dispatch=>{
        axios.get('https://reactproject2-f3a27-default-rtdb.firebaseio.com/Newproduct.json')
        .then(({data})=>{
            let pdata = [];
            for(let key in data){
                data[key].id = key;
                pdata.push(data[key]);
            }
            dispatch(GetProduct(pdata))
        })
    }

}