import { fetchResources, addResource, removeResource } from "../api/index";
import { showNotification } from "../actions/notificationsActions";

export const FETCH_COURSES_PENDING = 'FETCH_COURSES_PENDING'
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS'
export const FETCH_COURSES_ERROR = 'FETCH_COURSES_ERROR'

export const ADD_COURSE_PENDING = 'ADD_COURSE_PENDING'
export const ADD_COURSE_SUCCESS = 'ADD_COURSE_SUCCESS'
export const ADD_COURSE_ERROR = 'ADD_COURSE_ERROR'

export const DEL_COURSE_PENDING = 'DEL_COURSE_PENDING'
export const DEL_COURSE_SUCCESS = 'DEL_COURSE_SUCCESS'
export const DEL_COURSE_ERROR = 'DEL_COURSE_ERROR'


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

export function addCourseAction(body){
    return dispatch => {
        dispatch({ type: ADD_COURSE_PENDING})
        return addResource(courses, body)
            .then(res => {
                if (res.status === 201) {
                    dispatch({ type: ADD_COURSE_SUCCESS })
                    showNotification('The course has been added correctly ')
                    fetchCoursesAction()(dispatch)
                }
            })
            .catch(err => {
                dispatch({ type: ADD_COURSE_ERROR})
                showNotification(err.toString())(dispatch)
            })
    }
}

export const removeCourseAction = (id) => {
    return dispatch => {
        dispatch({ type: DEL_COURSE_PENDING})
        return removeResource(courses, id)
            .then(res => {
                if (res.status === 200) {
                    dispatch({ type: DEL_COURSE_SUCCESS })
                    showNotification('Course has been removed correctly')(dispatch)
                }
            })
            .catch(err => {
                dispatch({ type: DEL_COURSE_ERROR })
                showNotification(err.toString)(dispatch)
            })
    }
}