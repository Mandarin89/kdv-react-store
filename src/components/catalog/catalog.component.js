import React from 'react';
import './catalog.component.css'
import { connect } from 'react-redux';
import { getProducts } from './../../actions/getProducts';


import PlusIcon from './../../assets/plus.png';
import CartEmpty from './../../assets/cart_empty.png';

class Catalog extends React.Component{
    render(){
        console.log(this.props.testStore);
        return(
            <div className="products__row">
                
                <button onClick={this.props.onInit}>Click Clack</button>

                <div className="products__item">
                <div className="products__image">
                    <a href="/">
                    <img src="./../assets/prod1.png" alt="" />
                    </a>
                </div>
                <div className="products__name">
                    Вафли «Яшкино»<br/>«Сливочные»  300 г 
                </div>
                <div className="products__box">
                    <div className="products__price">
                        <span>319,50</span>
                        <span className='rub'>&#8381;</span>
                        <div className="price_strike">
                            <span>340,60<span className='rub'>&#8381;</span> </span>                          
                        </div>
                    </div>
                    <div className="products__addToBasket">
                    <div className="products__addToBasket_default">
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
            </div>            
        )
    }
};


export default connect(
    state => ({
      testStore : state
    }),
    dispatch => ({
        onInit:()=>{
            dispatch(getProducts());
        }
    })
  
  )(Catalog);       