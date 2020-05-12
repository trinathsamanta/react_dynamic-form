import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { allergenreducer } from "./allergenreducer";
import { nutrientreducer } from "./nutrientreducer";
import { companyreducer } from "./companyreducer";



export const rootReducer = combineReducers({
    reducer:reducer,
    allergenreducer:allergenreducer,
    nutrientreducer:nutrientreducer,
    companyreducer:companyreducer,
})