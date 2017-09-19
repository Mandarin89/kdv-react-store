import React from 'react';
import './search.component.css';
import { connect } from 'react-redux';
import { findProducts } from './../../actions/findProduct';

class Search extends React.Component {
    find(){
        console.log(this.serarchInput.value);
        this.props.onFind(this.serarchInput.value);
    }
  render() {
    return (
        <div className="search">
            <input type="text" name='search' className="search__field" placeholder="Введите название товара" ref={ input => {this.serarchInput = input } } />
            <select name="category_select" className="search__select">
                <option value="1">Категории</option>
            </select>
            <div className="search__button" onClick ={ this.find.bind(this)  }>
                Поиск
            </div>
        </div>
    );
  }
}

export default connect(
    state => ({ }),
    dispatch => ({
        onFind:(name) =>{
            dispatch(findProducts(name))
        }
    })
  
  )(Search);
