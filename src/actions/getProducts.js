export const getProducts = () =>{
    return dispatch => {
        console.log('123');
        dispatch({ type: 'GET_PRODUCTS', payload: [] });
    }
}