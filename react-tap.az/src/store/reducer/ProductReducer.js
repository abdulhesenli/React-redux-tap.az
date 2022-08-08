import { actionType } from "../type/actionType";

const initialState={
    Products :[]
}

const ProductReducer = (state = initialState, {type, payload} )=>{


    switch(type){
        case actionType.Get_Product:
            return{...state,Products:payload };
            default:
                return state;
    }

}


export default ProductReducer