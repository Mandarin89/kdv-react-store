export const findProducts = (name) =>{
    return dispatch => {
       dispatch({type:'FIND_PRODUCT', payload: name})
    }
}