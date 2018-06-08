import { combineReducers } from "redux";

import viewReducer from "./viewReducer";
import studentsReducer from './studentsreducer'

export default combineReducers({
    viewReducer,
    studentsReducer
})