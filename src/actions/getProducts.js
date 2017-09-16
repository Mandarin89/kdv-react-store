import axios from 'axios';

export const getProducts = () =>{
    return dispatch => {
        axios.get('https://cors-anywhere.herokuapp.com/http://www.mocky.io/v2/59b918f23a00001301f7f8e3')
        .then(function (response) {
            dispatch({ type: 'GET_PRODUCTS', payload: response.data.products});

        })
        .catch(function (error) {
            console.log("Can't get PRODUCTS");
        });
    }
}