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
    PUT_STUDENT_ERROR,
    FETCH_STUDENTS_ID_SUCCESS} 
from "../actions/studentsActions";

const initialState = {
    isFetching: false,
    students: [],
    addUserPending: false,
    addUserSuccess: false,
    deletePending: false,
    deleteSuccess: false,
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
        case FETCH_STUDENTS_ID_SUCCESS:
            return {
                ...state,
                student: action.student
            }
        case ADD_STUDENT_PENDING:
            return {
                ...state,
                addUserPending: true,
                addUserSuccess: false
            }
        case ADD_STUDENT_SUCCESS:
            return{
                ...state,
                addUserPending: false,
                addUserSuccess: true
            }
        case ADD_STUDENT_ERROR: 
            return{
                ...state,
                addUserPending: false,
                addUserSuccess: false
            }
        case DEL_STUDENT_PENDING:
            return{
                ...state,
                deletePending: true,
                deleteSuccess: false
            }
        case DEL_STUDENT_SUCCESS:
            return {
                ...state,
                deletePending: false,
                deleteSuccess: true
            }
        case DEL_STUDENT_ERROR:
            return {
                ...state,
                deletePending: false,
                deleteSuccess: false
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