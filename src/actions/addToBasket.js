import store from './../store';

export const AddToBasket = (prod, quantity,type) =>{
    let cartItems = store.getState().addToBasket;
    let exist = false,
        addObj = [];
    
    //console.log(cartItems);
    if(cartItems.length>0){
        cartItems.forEach( (item)=> {
            if(item.id === prod.id){
                if(type === 'p'){
                    exist = true;
                    item.quantity = parseInt(item.quantity,10) + quantity;
                }else if(type ==='m' && item.quantity>=quantity){
                    item.quantity = parseInt(item.quantity,10) - quantity;         
                }else{
                    item.quantity = 0;
                }
            }           
        });
        if(!exist && type ==='p'){
            prod.quantity += 1;
            cartItems.push(prod);
        }
        addObj = cartItems;
    }else{
        prod.quantity += 1;
        addObj.push(prod);
    }
      
    
    return dispatch => dispatch({ type: 'ADD_CART', payload: addObj });
}

