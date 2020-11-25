import React, {Component} from 'react';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos />
        </div>
      </div>
    ); 
    }
}



export default App;
