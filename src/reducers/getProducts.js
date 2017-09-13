const InitialState = {
    products: [],
    cart: [],
    isFetching: true
}

export default function getProducts(state = InitialState, action){

    if(action.type === 'GET_PRODUCTS'){
            return {
                ...state,
                products: action.payload
            }; 

    }
    return state;
}