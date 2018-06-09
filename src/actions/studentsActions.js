import { fetchStudents, addStudent } from "../api/index";
import { showNotification } from '../actions/notificationsActions'

export const FETCH_STUDENTS_PENDING = 'FETCH_STUDENT_PENDING'
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENT_SUCCESS'
export const FETCH_STUDENTS_ERROR = 'FETCH_STUDENT_ERROR'

export const ADD_STUDENT_PENDING = 'ADD_STUDENT_PENDING'
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS'
export const ADD_STUDENT_ERROR = 'ADD_STUDENT_ERROR'



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
            .then(res => console.log(res))
    }
}