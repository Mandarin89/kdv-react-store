import React from 'react';
import HeaderMobile from './../header-mobile/header-mobile.component';
import Personal from './../personal/personal.component';
import Search from './../search/search.component';
import Cart from './../cart/cart.component';

import BigLogo from './../../assets/logo_big.png';
import SmallLogo from './../../assets/logo.svg';

class Header extends React.Component {
    render() {
      return (
        <div className='header'>
            <div className='work-area'>
                <div className="header-desktop">
                    <div className="preheader">
                        <div className="preheader__title"></div>
                        <Personal />
                    </div>
                    <div className="header-bottom">
                        <div className="header-bottom__left">
                            <div className="header-bottom__logo">
                                <div className="header-bottom__logo_big">
                                    <a href="/">
                                        <img src={BigLogo} alt="" />
                                    </a>
                                </div>
                                <div className="header-bottom__logo_small">
                                    <a href="/">
                                        <img src={SmallLogo} alt="" />
                                    </a>
                                </div>                                                          
                            </div>
                            <div className="category-select">
                                <div className="select-wrapper">
                                    <div className="category-select__body">
                                    <div className="category-select__ico"></div>
                                    <p>Каталог</p>
                                    <div className="category-select__arrow"></div>
                                    </div>
                                    <div className="category-select__list"></div>
                                </div>
                            </div>
                        </div>
                        <div className="header-bottom__middle">
                            <div className="event-info">
                                <div className="event-info__newest">
                                    Новинки
                                </div>
                                <div className="event-info__hitest">
                                    Хит продаж
                                </div>      
                                <div className="event-info__support">
                                    <span>Служба поддержки</span>
                                    <p>8 800 250 5555</p>
                                </div>                                       
                            </div>
                            <Search />
                        </div>
                        <div className="header-bottom__right_color">
                            <Cart />
                        </div>                                                                                                
                    </div>                                        
                </div>
                <HeaderMobile />
            </div>
        </div>
        



      )
    }
  }


  export default Header;