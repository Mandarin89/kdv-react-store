import axios from 'axios';

export const getProducts = () =>{
    return dispatch => {
        axios.get('https://cors-anywhere.herokuapp.com/http://www.mocky.io/v2/59b8cbd13a00005400f7f761')
        .then(function (response) {
            dispatch({ type: 'GET_PRODUCTS', payload: response.data.products});

        })
        .catch(function (error) {
            console.log("Can't get PRODUCTS");
        });

       
    }
}