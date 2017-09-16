import React from 'react';
import { connect } from 'react-redux';
import { AddToBasket } from './../../actions/addToBasket';

import PlusIcon from './../../assets/plus.png';
import CartEmpty from './../../assets/cart_empty.png';

class Product extends React.Component{
    addCart(obj,quantity){
       AddToBasket(obj, quantity);
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
                        <div className="products__addToBasket_default" onClick ={ () => this.addCart(data,1) }>

                            <img src={PlusIcon} alt="" />
                            <img src={CartEmpty} alt="" />
                        </div>
                        <div className="controls">
                            <div className="controls__add"></div>
                            <input type="text" className="controls__count" />
                            <div className="controls__minus"></div>
                            
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default connect(
    state => ({
      
    }),
    dispatch => ({
        add:()=>{
            dispatch(this.addCart());
        }
    })
  
  )(Product);   