import React from 'react';
import './breadcrumb.component.css';

class Breadcrumb extends React.Component{
    render(){
        return(
            <div className="breadcrumb">
                <a href="/" className="breadcrumb__item">Главная</a>
                <span className="breadcrumb__arrow"></span>
                <span className="breadcrumb__item">Вафли</span>
            </div>


        )
    }
};


export default Breadcrumb;