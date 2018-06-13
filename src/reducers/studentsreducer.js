import { 
    FETCH_STUDENTS_PENDING, 
    FETCH_STUDENTS_SUCCESS, 
    FETCH_STUDENTS_ERROR, 
    ADD_STUDENT_PENDING, 
    ADD_STUDENT_SUCCESS, 
    ADD_STUDENT_ERROR, 
    DEL_STUDENT_PENDING,
    DEL_STUDENT_SUCCESS,
    DEL_STUDENT_ERROR,
    PUT_STUDENT_PENDING,
    PUT_STUDENT_SUCCESS,
    PUT_STUDENT_ERROR} 
from "../actions/studentsActions";

const initialState = {
    isFetching: false,
    students: [],
    addUserPending: false,
    deletePending: false,
    putSuccess: false
}

const studentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STUDENTS_PENDING:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_STUDENTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                students: action.resJson
            }
        case FETCH_STUDENTS_ERROR:
            return {
                ...state,
                isFetching: false,
            }
        case ADD_STUDENT_PENDING:
            return {
                ...state,
                addUserPending: true
            }
        case ADD_STUDENT_SUCCESS:
            return{
                ...state,
                addUserPending: false
            }
        case ADD_STUDENT_ERROR: 
            return{
                ...state,
                addUserPending: false
            }
        case DEL_STUDENT_PENDING:
            return{
                ...state,
                deletePending: true
            }
        case DEL_STUDENT_SUCCESS:
            return {
                ...state,
                deletePending: false
            }
        case DEL_STUDENT_ERROR:
            return {
                ...state,
                deletePending: false
            }
        case PUT_STUDENT_PENDING:
            return{
                ...state,
                putSuccess: false
            }
        case PUT_STUDENT_SUCCESS:
            return{
                ...state,
                putSuccess: true
            }
        case PUT_STUDENT_ERROR:
            return{
                ...state,
                putSuccess: false
            }
        default:
            return state;
    }
}

export default studentsReducer