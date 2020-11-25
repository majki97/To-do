import React, {Component} from 'react';
import TodoItem from '../TodoItem';
import './style.css'
import {connect} from 'react-redux'
class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id}  todo={todo}/>
    ))
    }
}


const mapStateToProps = (state) => {
  return { todos: state.todos };
}

export default connect(mapStateToProps)(Todos);
