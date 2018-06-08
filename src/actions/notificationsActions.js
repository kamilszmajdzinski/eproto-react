export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const HIDE_NOTIFICATION = "HIDE_NOTOFACTION"


export function showNotification(notificationText){
    return dispatch => {
        dispatch({
            type: SHOW_NOTIFICATION,
            notificationText
        })

        setTimeout(() => {
            dispatch({ type: HIDE_NOTIFICATION })
        }, 7000);

    }
}