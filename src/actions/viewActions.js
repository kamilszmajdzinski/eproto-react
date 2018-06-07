export const STUDENTS_VIEW = 'STUDENTS_VIEW'
export const COURSES_VIEW = 'COURSES_VIEW'

export function changeView(view){
    return dispatch => {
        if (view === 'students') {
            dispatch({ type: STUDENTS_VIEW })
        }else if (view === 'courses') {
            dispatch({ type: COURSES_VIEW })
        }
    }
}