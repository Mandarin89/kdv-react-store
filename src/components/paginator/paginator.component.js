import React from 'react';
import './paginator.component.css';

class Paginator extends React.Component{
    render(){
        return(
            <div className="paginator">
                <div className="paginator__wrapper">
                <div className="paginator__prev"></div>
                <div className="paginator-items">
                    <div className="paginator-items__item">1</div>
                    <div className="paginator-items__item">2</div>
                    <div className="paginator-items__item paginator-items__item_active">3</div>
                    <div className="paginator-items__item">4</div>
                </div>
                <div className="paginator__next"></div>
                </div>

            </div>            
        )
    }
};


export default Paginator;