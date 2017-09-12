import React from 'react';
import './direction.component.css';

class Direction extends React.Component{
    render(){
        return(
            <div className="direction">
                <div className="direction-select">
                <span className="direction-select__title">Порядок</span>
                <div className="direction-select-wrapper">
                    <div className="direction-select__body">
                        <p>Позиция</p>
                        <div className="direction-select__arrow"></div>
                    </div>
                    <div className="direction-select__list"></div>
                </div>
                </div>
                <div className="direction__arrow"></div>
            </div>            
        )
    }
};


export default Direction;