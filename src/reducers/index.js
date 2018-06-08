import { combineReducers } from "redux";

import viewReducer from "./viewReducer";
import studentsReducer from './studentsreducer'
import notificationsReducer from './notificationReducer'

export default combineReducers({
    viewReducer,
    studentsReducer,
    notifications: notificationsReducer
})