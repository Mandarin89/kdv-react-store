import React from 'react';
import { connect } from 'react-redux';
import { AddToBasket } from './../../actions/addToBasket';

import PlusIcon from './../../assets/plus.png';
import CartEmpty from './../../assets/cart_empty.png';

class Product extends React.Component{
    constructor(){
        super();
        this.active = false;
        this.inputValue = 0;
    }
    addCart(obj,quantity,type){
       this.props.add(obj,quantity,type);
       this.active = true;
       this.forceUpdate();
    }
    productQuantity(){
        for(let i = 0; i < this.props.cart.length; i++) {
            if (this.props.cart[i].id == this.props.data['id']) {
                return this.props.data['quantity'];
            }
        }
    }    
    render(){
        const data = this.props.data;
        return (
                <div className="products__item">
                    <div className="products__image">
                        <a href="/">
                            <img src={data.thumb} alt="" />
                        </a>
                    </div>
                    <div className="products__name">
                        {data.name} 300 г 
                    </div>
                    <div className="products__box">
                        <div className="products__price">
                            <span>{data.price}</span>
                            <span className='rub'>&#8381;</span>
                            { data.oldPrice && 
                                <div className="price_strike">
                                    <span>{data.oldPrice}<span className='rub'>&#8381;</span> </span>                          
                                </div>
                            }
                        </div>
                        
                        <div className="products__addToBasket">
                        <div className={!this.active ? 'products__addToBasket_default': 'products__addToBasket_default hide' } onClick ={ () => this.addCart(data,1,'p') }>

                            <img src={PlusIcon} alt="" />
                            <img src={CartEmpty} alt="" />
                        </div>
                        <div className={this.active ? "controls show": 'controls'} >
                            <div className="controls__minus" onClick ={ () => this.addCart(data,1,'m') }></div>
                            <input type="text" className="controls__count" value={ this.productQuantity() } />
                            <div className="controls__plus" onClick ={ () => this.addCart(data,1,'p') }></div>
                            
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default connect(
    state => ({
        cart : state.addToBasket
    }),
    dispatch => ({
        add: (obj,quantity,type)=>{
            dispatch(AddToBasket(obj,quantity,type));
        }
    })
  
  )(Product);   