import store from './../store';

export const AddToBasket = (prod, quantity) =>{
    let cartItems = store.getState().getProducts.cart;
    let num = null,
        addObj = null;
    
    if(Object.keys(cartItems).length>0){
        addObj = cartItems.each( (item, index) =>{
            if(item.id == prod.id)
                num = index;
        })
    }else{
        addObj = prod;
    }
    console.log(addObj);
    return dispatch => {

       dispatch({ type: 'ADD_CART', payload: addObj });
    }
}

