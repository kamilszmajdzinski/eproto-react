import { FETCH_STUDENTS_PENDING, FETCH_STUDENTS_SUCCESS, FETCH_STUDENTS_ERROR, ADD_STUDENT_PENDING, ADD_STUDENT_SUCCESS, ADD_STUDENT_ERROR } from "../actions/studentsActions";

const initialState = {
    isFetching: false,
    students: [],
    addUserPending: false
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
        default:
            return state;
    }
}

export default studentsReducer