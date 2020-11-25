import React, { Component } from 'react'
import './style.css'
import {connect} from 'react-redux'


export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markComplete = (e, id) =>{
         this.props.dispatch({
            type: 'toogleTodo',
            payload: id
        })
      }

    delTodo = (e, id) => {
        this.props.dispatch({
            type: 'delTodo',
            payload: id
        })
      }


    render() {
        console.log('todo', this.props.todo)
        const {id, title} = this.props.todo
        return (
            <div className='newTodo' style={this.getStyle()}>
               <p>
                    <input type='checkbox' onChange={(e) => this.markComplete(e, this.props.todo.id )}/> {' '}
                   {title}
                   <button onClick={(e) => this.delTodo(e, this.props.todo.id)} >x</button>
              </p> 
            </div>
        )
    }
}

export default connect()(TodoItem);
