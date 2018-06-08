import { fetchStudents } from "../api/index";

export const FETCH_STUDENTS_PENDING = 'FETCH_STUDENT_PENDING'
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENT_SUCCESS'
export const FETCH_STUDENTS_ERROR = 'FETCH_STUDENT_ERROR'


export function fetchStudentsAction(){
    return dispatch => {
         dispatch({ type: FETCH_STUDENTS_PENDING })
        return fetchStudents()
            .then(res => res.json())
            .then(resJson => {
                dispatch({ type: FETCH_STUDENTS_SUCCESS, resJson })
            })
            .catch(err => dispatch({ type: FETCH_STUDENTS_ERROR }))
    }
}
