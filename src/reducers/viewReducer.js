import { STUDENTS_VIEW, COURSES_VIEW } from "../actions/viewActions";

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
    
        default:
            return state;
    }
}

export default viewReducer