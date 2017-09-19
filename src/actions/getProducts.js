import axios from 'axios';

export const getProducts = () =>{
    return dispatch => {
        axios.get('https://cors-anywhere.herokuapp.com/http://www.mocky.io/v2/59bf4f422600007f04526227')
        .then(function (response) {
            dispatch({ type: 'GET_PRODUCTS', payload: response.data.products});

        })
        .catch(function (error) {
            console.log("Can't get PRODUCTS");
        });
    }
}