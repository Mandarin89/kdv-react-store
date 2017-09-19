import React from 'react';
import './cart.component.css';
import { connect } from 'react-redux';

class Cart extends React.Component {
    render() {
      return (
            <div className="cart">
                <div className="cart__head">
                    <div className="cart__text">
                        <div className="cart__ico"></div>
                        <p>Моя корзина</p>
                    </div>
                    <div className="cart__more-details"></div>
                </div>
                { this.props.cart.length>0 &&
                    <div className="cart__body">
                        <div className="cart__count">{this.props.cart.length} тов</div>
                        <div className="cart__price"><span>{ this.props.cart.reduce( (sum,item)=> { return sum = sum+parseFloat(item.price) },0 )  }</span> <span className='rub'>&#8381;</span></div>
                    </div>
                }
            </div>
      )
    }
  }


  export default connect(
    state => ({
      cart : state.addToBasket
    }),
    dispatch => ({ })
  
  )(Cart);   