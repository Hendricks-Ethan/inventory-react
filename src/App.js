import React, { Component } from 'react';
import { CategoryList } from './Components/CategoryList.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

/* Used my Inventory CRUD app for this project. */
/* Using the App class for this project*/

class App extends Component {
  render() {
    return (
      <div>
        <CategoryList />
      </div>
    )
  }
}

export default App;