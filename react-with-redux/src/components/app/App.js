import React, { Component } from 'react';
import { combineReducers, createStore }  from 'redux'
import { Provider } from 'react-redux'
import counterReducer from '../counter/counterReducers'
import Counter from '../counter/counter'

import './App.css';

const reducers = combineReducers({
  counter: counterReducer
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={ createStore(reducers) }>
          <Counter />
        </Provider>
      </div>
    );
  }
}

export default App;
