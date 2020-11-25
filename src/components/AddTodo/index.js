import React, { Component } from 'react'
import './style.css'
import {connect} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';


export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault(); 
        this.props.dispatch({
            type: 'newTodo',
            payload: {
                id: uuidv4(),
                title: this.state.title,
                completed: false
            }
        })
        this.setState({title: ''});
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});


    render() {
        return (
            <form onSubmit={this.onSubmit}  className='inputForm'>
                <input type='text' name='title' placeholder='Add Todo ...' className='inputOne' value={this.state.title} onChange={this.onChange}/>
                <input type='submit' value='Submit' className='btn'/>
            </form>
        )
    }
}

export default connect()(AddTodo);
