import { fetchStudents, addStudent, removeStudent } from "../api/index";
import { showNotification } from '../actions/notificationsActions'

export const FETCH_STUDENTS_PENDING = 'FETCH_STUDENT_PENDING'
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENT_SUCCESS'
export const FETCH_STUDENTS_ERROR = 'FETCH_STUDENT_ERROR'

export const ADD_STUDENT_PENDING = 'ADD_STUDENT_PENDING'
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS'
export const ADD_STUDENT_ERROR = 'ADD_STUDENT_ERROR'

export const DEL_STUDENT_PENDING = 'DEL_STUDENT_PENDING'
export const DEL_STUDENT_SUCCESS = 'DEL_STUDENT_SUCCESS'
export const DEL_STUDENT_ERROR = 'DEL_STUDENT_ERROR'




export function fetchStudentsAction(){
    return dispatch => {
         dispatch({ type: FETCH_STUDENTS_PENDING })
        return fetchStudents()
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

export function addStudentAction(body) {
    return dispatch => {
        dispatch({ type: ADD_STUDENT_PENDING })
        return addStudent(body)
            .then(res => {
                if (res.status === 201) {
                    dispatch({ type: ADD_STUDENT_SUCCESS })
                    showNotification('The student was correctly added')(dispatch)
                    fetchStudentsAction()(dispatch)
                }
            })
            .catch(err => {
                dispatch({ type: ADD_STUDENT_ERROR})
                showNotification(err.toString())
            })
    }
}

export const removeStudentAction = (index) => {
    return dispatch => {
        dispatch({ type: DEL_STUDENT_PENDING })
        return removeStudent(index)
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