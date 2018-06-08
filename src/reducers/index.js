import { combineReducers } from "redux";

import viewReducer from "./viewReducer";
import studentReducer from './studentsreducer'

export default combineReducers({
    viewReducer,
    studentReducer
})