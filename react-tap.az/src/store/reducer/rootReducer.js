import { combineReducers } from "redux";

import categoryReducer from "./categoryReducer";
import ProductReducer from "./ProductReducer";
import DetaildataRedc from "./DetailDataReducer";


const rootReducer = combineReducers({
    allCategory : categoryReducer,
    allProducts : ProductReducer,
    allDetail :DetaildataRedc,
    
})

export default rootReducer;