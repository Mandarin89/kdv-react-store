export default function addToBasket(state, action){
        if(action.type === 'ADD_CART'){
                return {
                    ...state,
                    cart: action.payload
                }; 
    
        }
        return state;
    }