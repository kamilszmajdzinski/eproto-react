import { fetchResources, addResource, removeResource, putResource } from "../api/index";
import { showNotification } from '../actions/notificationsActions'
import { fetchCoursesAction } from "./coursesActions";

export const FETCH_STUDENTS_PENDING = 'FETCH_STUDENT_PENDING'
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENT_SUCCESS'
export const FETCH_STUDENTS_ERROR = 'FETCH_STUDENT_ERROR'

export const FETCH_STUDENTS_ID_PENDING = 'FETCH_STUDENT_ID_PENDING'
export const FETCH_STUDENTS_ID_SUCCESS = 'FETCH_STUDENT_ID_SUCCESS'
export const FETCH_STUDENTS_ID_ERROR = 'FETCH_STUDENT_ID_ERROR'

export const ADD_STUDENT_PENDING = 'ADD_STUDENT_PENDING'
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS'
export const ADD_STUDENT_ERROR = 'ADD_STUDENT_ERROR'

export const DEL_STUDENT_PENDING = 'DEL_STUDENT_PENDING'
export const DEL_STUDENT_SUCCESS = 'DEL_STUDENT_SUCCESS'
export const DEL_STUDENT_ERROR = 'DEL_STUDENT_ERROR'

export const PUT_STUDENT_PENDING = 'PUT_STUDENT_PENDING'
export const PUT_STUDENT_SUCCESS = 'PUT_STUDENT_SUCCESS'
export const PUT_STUDENT_ERROR = 'PUT_STUDENT_ERROR'

export const students = 'students'


export function fetchStudentsAction(){
    return dispatch => {
         dispatch({ type: FETCH_STUDENTS_PENDING })
        return fetchResources(students)
            .then(res => res.json())
            .then(resJson => {
                dispatch({ type: FETCH_STUDENTS_SUCCESS, resJson })
            })
            .catch(err => {
                dispatch({ type: FETCH_STUDENTS_ERROR })
                showNotification(err.toString())(dispatch)
            })
    }
}

export function fetchStudentByIdAction(index){
    return dispatch => {
        dispatch({ type: FETCH_STUDENTS_ID_PENDING })
        return fetchResources(students + '/' + `${index}`)
            .then(res => res.json())
            .then(student => {
                dispatch({ type: FETCH_STUDENTS_ID_SUCCESS, student })
            })
            .catch(err => {
                dispatch({ type: FETCH_STUDENTS_ID_ERROR })
                showNotification(err.toString())(dispatch)
            })
    }
}

export function addStudentAction(body) {
    return dispatch => {
        dispatch({ type: ADD_STUDENT_PENDING })
        return addResource(students, body)
            .then(res => {
                if (res.status === 201) {
                    dispatch({ type: ADD_STUDENT_SUCCESS })
                    showNotification('The student was correctly added')(dispatch)
                    fetchStudentsAction()(dispatch)
                }
            })
            .catch(err => {
                dispatch({ type: ADD_STUDENT_ERROR})
                showNotification(err.toString())(dispatch)
            })
    }
}

export const removeStudentAction = (index) => {
    return dispatch => {
        dispatch({ type: DEL_STUDENT_PENDING })
        return removeResource(students, index)
            .then(res => {
                if (res.status === 200) {
                    dispatch({ type: DEL_STUDENT_SUCCESS })
                    showNotification('The student was removed correctly')(dispatch)
                }
            })
            .catch(err => {
                dispatch({ type: DEL_STUDENT_ERROR })
                showNotification(err.toString())
            })
    }
}

export const putStudentAction = (index, body) => {
    return dispatch => {
        dispatch({ type: PUT_STUDENT_PENDING })
        return putResource(students, index, body)
            .then(res => {
                if (res.status === 200) {
                    dispatch({ type: PUT_STUDENT_SUCCESS })
                    showNotification('Student has been saved correctly')(dispatch)
                }
            })
            .catch(err => {
                dispatch({ type: PUT_STUDENT_ERROR })
                showNotification(err.toString())(dispatch)
            })
    }
}