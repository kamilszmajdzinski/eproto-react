import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "../actions/notificationsActions";

const initialState = {
    show: false,
    text: ''
}

export default function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return {
                ...state,
                show: true,
                text: action.notificationText
            }
        case HIDE_NOTIFICATION:
            return{
                ...state,
                show: false
            }
        default:
            return state;
    }
}