import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header.component';
import Breadcrumb from './components/breadcrumb/breadcrumb.component';
import Filter from './components/filter/filter.component';
import SortPanel from './components/sort-panel/sort-panel.component';
import Catalog from './components/catalog/catalog.component';
import Footer from './components/footer/footer.component';

class App extends Component {
  
  render() {

    return (
        <div className='App'>
          <div className="page">
            <Header />
            <main>
              <div className="work-area">
                <Breadcrumb />
                <div className="container">
                  <div className="container__left">
                    <Filter />
                  </div>
                  <div className="container__right">
                    <div className="page-title">
                      <h1>Вафли</h1>
                    </div>
                    <div className="products">
                      <SortPanel />
                      <div className="page__filter_mobile">
                          <p>Фильтр</p>
                      </div>
                      <Catalog />
                      <SortPanel cls='sort-panel_margin_top'/>
                    </div>                  
                  </div>
                </div>              
              </div>
              <div className="clearfix"></div>
            </main>
          </div>
          <Footer />
        </div>
    );
  }
}

export default App;
