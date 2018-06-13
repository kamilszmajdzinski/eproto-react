import { STUDENTS_VIEW, COURSES_VIEW, GRADES_OF_STUDENT_VIEW } from "../actions/viewActions";

const initialState = {
    view: "none"
}

const viewReducer = (state = initialState, action) => {
    switch (action.type) {
        case STUDENTS_VIEW:
            return{
                ...state,
                view: "students"
            }
        case COURSES_VIEW:
            return{
                ...state,
                view: "courses"
            }
        case GRADES_OF_STUDENT_VIEW:
            return {
                ...state,
                view: "grades",
                index: action.index
            }
        default:
            return state;
    }
}

export default viewReducer