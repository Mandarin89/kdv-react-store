import React from 'react';
import './catalog.component.css'
import { connect } from 'react-redux';
import { getProducts } from './../../actions/getProducts';
import Product from './product.component';


class Catalog extends React.Component{
    render(){
        this.props.onInit();
        return(
            <div className="products__row">
            {this.props.products.map(prod =>
                    <Product key={prod.id} data = {prod}/>
                )
            }
                
            </div>            
        )
    }
};


export default connect(
    state => ({
      products : state.getProducts.products
    }),
    dispatch => ({
        onInit:()=>{
            dispatch(getProducts());
        }
    })
  
  )(Catalog);       