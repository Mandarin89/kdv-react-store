import axios from 'axios';

export default function getProducts(state =[], action){

    if(action.type === 'GET_PRODUCTS'){

        axios.get('https://cors-anywhere.herokuapp.com/http://www.mocky.io/v2/59b821db1100002b04563ab2')
        .then(function (response) {
            console.log(response);
            return [
                ...state,
                action.payload
            ]; 

        })
        .catch(function (error) {
            console.log("Can't get PRODUCTS");
        });


    }
    return state;
}