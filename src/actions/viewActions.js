export const STUDENTS_VIEW = 'STUDENTS_VIEW'
export const COURSES_VIEW = 'COURSES_VIEW'
export const GRADES_OF_STUDENT_VIEW = 'GRADES_OF_STUDENT_VIEW'

export function changeView(view, index){
    return dispatch => {
        if (view === 'students') {
            dispatch({ type: STUDENTS_VIEW })
        }else if (view === 'courses') {
            dispatch({ type: COURSES_VIEW })
        }else if (view === 'grades') {
            dispatch({ type: GRADES_OF_STUDENT_VIEW, index })
        }
    }
}

