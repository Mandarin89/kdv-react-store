import React from 'react';
import './catalog.component.css'
import { connect } from 'react-redux';
import { getProducts } from './../../actions/getProducts';
import Product from './product.component';


class Catalog extends React.Component{
    componentDidMount(){
        this.props.onInit();
    }
    render(){
        let count = 0;
        let num = 0;
        let group = this.props.products.reduce( (obj,item)=>{
            if(count == 3){
                count = 0;
                num += 1;
            }
            count += 1;
            obj[num] = obj[num] || [];
            obj[num].push(item);
            return obj;
        },[]);
        return(
            <div className="product__layuot">
            {
                group.map( (groupItem,index) => {
                    return (
                    <div className="products__row" key={index}>
                        
                        { groupItem.map(productData => <Product key={productData.id} data={ productData }/>) }
                    </div>
                );
                })
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