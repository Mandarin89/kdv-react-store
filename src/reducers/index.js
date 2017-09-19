import { combineReducers } from 'redux';

import getProducts from './getProducts';
import addToBasket from './addToBasket';
import findProduct from './findProduct';

export default combineReducers ({
    getProducts,
    addToBasket,
    findProduct
});