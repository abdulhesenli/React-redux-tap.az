import { actionType } from "../type/actionType";

const DetaildataRedc =( state = '', {type,payload})=>{

    switch(type){
        case actionType.DataDetail:
            return payload
            default:
                return state
    }

}


export default DetaildataRedc;