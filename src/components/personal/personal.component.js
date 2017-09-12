import React from 'react';
import './personal.component.css';


class Header extends React.Component {
    render() {
      return (
        <div className="personal">
            <div className="personal__location">
            Томск
            </div>
            <div className="personal__info">
            Антон Санников
            </div>
            <div className="personal__logout">
            Выход                  
            </div>
        </div>            


        )
    }
}


export default Header;