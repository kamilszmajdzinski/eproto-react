import { 
    FETCH_COURSES_PENDING, 
    FETCH_COURSES_SUCCESS, 
    FETCH_COURSES_ERROR,
    ADD_COURSE_PENDING,
    ADD_COURSE_SUCCESS,
    ADD_COURSE_ERROR,
    DEL_COURSE_PENDING,
    DEL_COURSE_SUCCESS,
    DEL_COURSE_ERROR} from "../actions/coursesActions";


const initialState = {
    courses: [],
    isFetching: false,
    addCoursePending: false,
    addCourseSuccess: false,
    deletePending: false,
    hasBeenDeletedSuccessfully: false
}

export default function coursesReducer(state = initialState, action){
    switch (action.type) {
        case FETCH_COURSES_PENDING:
            return{
                ...state,
                isFetching: true
            }
        case FETCH_COURSES_SUCCESS:
            return{
                ...state,
                isFetching: false,
                courses: action.resJson
            }
        case FETCH_COURSES_ERROR:
            return{
                ...state,
                isFetching: false
            }
         case ADD_COURSE_PENDING:
            return{
                ...state,
                addCoursePending: true,
                addCourseSuccess: false
            }
        case ADD_COURSE_SUCCESS:
            return{
                ...state,
                addCoursePending: false,
                addCourseSuccess: true
            }
        case ADD_COURSE_ERROR:
            return{
                ...state,
                addCoursePending: false,
                addCourseSuccess: false
            }
        case DEL_COURSE_PENDING: 
            return{
                ...state,
                deletePending: true,
                hasBeenDeletedSuccessfully: false
            }
        case DEL_COURSE_SUCCESS:
            return{
                ...state,
                deletePending: false,
                hasBeenDeletedSuccessfully: true
            }
        case DEL_COURSE_ERROR:
            return{
                ...state,
                deletePending: false
            }
    
        default:
            return state;
    }
}