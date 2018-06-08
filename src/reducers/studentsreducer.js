import { FETCH_STUDENTS_PENDING, FETCH_STUDENTS_SUCCESS } from "../actions/studentsAction";

const initialState = {
    isFetching: false,
    students: []
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
        default:
            return state;
    }
}

export default studentsReducer