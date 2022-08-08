import { actionType } from "../type/actionType";


const initialState = {
    category : []
}

const categoryReducer = (state= initialState, {type , payload}) => {
    switch(type){
        case actionType.Get_Category : 
        return {...state, category : payload};
        default : 
        return state ;
    };
}


export default categoryReducer;