export default function addToBasket(state = [], action){
        if(action.type === 'ADD_CART'){
                return addToBasket = action.payload
        }; 
        
        return state;
}