export const updateProgress = (value) => {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_PROGRESS', payload: value })
}}