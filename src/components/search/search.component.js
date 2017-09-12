import React, { Component } from 'react';
import './search.component.css';

class Search extends React.Component {
  render() {
    return (
        <div className="search">
            <input type="text" name='search' className="search__field" placeholder="Введите название товара" />
            <select name="category_select" className="search__select">
                <option value="1">Категории</option>
            </select>
            <div className="search__button">
                Поиск
            </div>
        </div>
    );
  }
}

export default Search;
