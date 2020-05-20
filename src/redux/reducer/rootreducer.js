import { combineReducers } from "redux";
import { reducer } from "./reducer";
import { allergenreducer } from "./allergenreducer";
import { nutrientreducer } from "./nutrientreducer";
import { companyreducer } from "./companyreducer";
import { holidayreducer } from "./holidayreducer";



export const rootReducer = combineReducers({
    reducer:reducer,
    allergenreducer:allergenreducer,
    nutrientreducer:nutrientreducer,
    companyreducer:companyreducer,
    holidayreducer:holidayreducer
})