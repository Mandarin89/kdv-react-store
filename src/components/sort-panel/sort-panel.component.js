import React from 'react';
import './sort-panel.component.css';

import Paginator from './../paginator/paginator.component';
import Direction from './../direction/direction.component';

class SortPanel extends React.Component{
    list(){
        console.log(123);
        const hover = 1;
        return hover;
    }
    render(){
        

        return (
            <div className={"sort-panel "+ this.props.cls}>
                <div className="sort-panel__left">
                    <Direction />
                <div className="count-products">
                    <div className="direction-select">
                        <span className="direction-select__title">Кол-во</span>
                        <div className="direction-select-wrapper">
                            <div className="direction-select__body">
                                <p>12</p>
                                <div className="direction-select__arrow"></div>
                            </div>
                            <div className="direction-select__list"></div>
                        </div>
                        </div>                         
                </div>
                </div>
                <div className="sort-panel__right">
                    <Paginator />
                <div className="page-view">
                    <div className="page-view__block page-view__block_hover" onClick={ ()=> this.list() }></div>
                    <div className={"page-view__list " + this.hover}></div>
                </div>
                </div>
            </div>

        )
    }
};


export default SortPanel;