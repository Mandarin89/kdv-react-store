import React from 'react';
import './cart.component.css';

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
                <div className="cart__body">
                    <div className="cart__count">10 тов</div>
                    <div className="cart__price"><span>2230,30</span> <span className='rub'>&#8381;</span></div>
                </div>
            </div>
      )
    }
  }


  export default Cart;