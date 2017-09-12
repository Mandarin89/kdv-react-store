import React from 'react';
import './header-mobile.component.css';


class HeaderMobile extends React.Component {
    render() {
      return (
        <div className="header-mobile">
            <div className="header-mobile__left">
                <div className="menu-button"></div>
                <div className="header-mobile__logo"><a href="/"></a></div>
            </div>
            <div className="header-mobile__middle">
            </div>
            <div className="header-mobile__right">
                <div className="header-mobile__search"></div>
                <div className="header-mobile__category"></div>
                <div className="header-mobile__cart"></div>
            </div>
        </div>

      )
    }
}


export default HeaderMobile;