import { combineReducers } from "redux";

import viewReducer from "./viewReducer";
import studentsReducer from './studentsreducer'
import notificationsReducer from './notificationReducer'
import coursesReducer from './coursesReducer'

export default combineReducers({
    viewReducer,
    studentsReducer,
    notifications: notificationsReducer,
    coursesReducer
})