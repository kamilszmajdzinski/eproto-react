import { fetchResources, addResource, removeResource } from "../api/index";
import { showNotification } from "../actions/notificationsActions";

export const FETCH_COURSES_PENDING = 'FETCH_COURSES_PENDING'
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS'
export const FETCH_COURSES_ERROR = 'FETCH_COURSES_ERROR'


export const courses = 'courses'

export function fetchCoursesAction() {
    return dispatch => {
        dispatch({ type: FETCH_COURSES_PENDING })
        return fetchResources(courses)
            .then(res => res.json())
            .then(resJson => {
                dispatch({ type: FETCH_COURSES_SUCCESS, resJson })
            })
            .catch(err => {
                dispatch({ type: FETCH_COURSES_ERROR })
                showNotification(err.toString())(dispatch)
            })
    }
}