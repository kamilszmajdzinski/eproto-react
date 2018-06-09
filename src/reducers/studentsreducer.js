import { FETCH_STUDENTS_PENDING, FETCH_STUDENTS_SUCCESS, FETCH_STUDENTS_ERROR, ADD_STUDENT_PENDING } from "../actions/studentsActions";

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
        default:
            return state;
    }
}

export default studentsReducer