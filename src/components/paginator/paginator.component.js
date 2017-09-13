import React from 'react';
import './paginator.component.css';
import { connect } from 'react-redux';

class Paginator extends React.Component{
    render(){
        let products = this.props.products;
        return(
            <div className="paginator">
                <div className="paginator__wrapper">
                <div className="paginator__prev"></div>
                <div className="paginator-items">
                    {
                        (()=>{
                            if(products.length>12)
                                return products.map( (num,index) => <div key={index} className="paginator-items__item paginator-items__item_active">{index+1}</div>)
                            else
                                return <div className="paginator-items__item paginator-items__item_active">1</div>
                        })()                    
                    }
                </div>
                <div className="paginator__next"></div>
                </div>

            </div>            
        )
    }
};


export default connect(
    state => ({
      products : state.getProducts.products
    }),
    dispatch => ({})
  
  )(Paginator);   