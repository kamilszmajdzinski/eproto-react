import { 
    FETCH_COURSES_PENDING, 
    FETCH_COURSES_SUCCESS, 
    FETCH_COURSES_ERROR} from "../actions/coursesActions";


const initialState = {
    courses: [],
    isFetching: false
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
    
        default:
            return state;
    }
}