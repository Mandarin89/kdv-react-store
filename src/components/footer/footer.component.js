import React from 'react';
import './footer.component.css';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="work-area">
                <div className="bottom-menu">

                    <div className="bottom-menu__column">
                    <ul className="menu">
                        <li className="menu__item">
                        <a href="/">О магазине</a>
                        </li>
                        <li className="menu__item">
                            <a href="/">О магазине</a>
                        </li>
                        <li className="menu__item">
                            <a href="/">О магазине</a>
                            </li>                              
                    </ul>
                    </div>

                    <div className="bottom-menu__column">
                        <ul className="menu">
                        <li className="menu__item">
                            <a href="/">О магазине</a>
                        </li>
                        <li className="menu__item">
                            <a href="/">О магазине</a>
                            </li>
                            <li className="menu__item">
                                <a href="/">О магазине</a>
                            </li>                              
                        </ul>
                    </div>

                    <div className="bottom-menu__column">
                        <ul className="menu">
                        <li className="menu__item">
                            <a href="/">О магазине</a>
                        </li>
                        <li className="menu__item">
                            <a href="/">О магазине</a>
                            </li>
                            <li className="menu__item">
                                <a href="/">О магазине</a>
                            </li>                              
                        </ul>
                    </div>

                    <div className="bottom-menu__column">
                    <div className="copyright">
                        <p className="copyright_bold">Свяжитесь с нами</p>
                        <p className="copyright__text">
                            Россия, г. Томск, пр. Мира 20<br/>
                            info@magonline.ru<br/>
                            8 800 250 5555<br/>
        
                        </p>
                    </div>
                    </div>
                           
                </div>
                </div>
            </div>            
        )
    }
};

export default Footer;