import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: [
        {
          id: uuidv4(),
          title: 'Learn react',
          completed: false
        },
        {
          id: uuidv4(),
          title: 'Dinner with Ania',
          completed: false
        },{
          id: uuidv4(),
          title: 'Read book with Eric',
          completed: false
        }
      ]}
  
  const todosReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case 'newTodo':
            console.log('action', action)
            return {todos: [...state.todos, action.payload]}
        case 'delTodo':
            return {todos: [...state.todos.filter(todo => todo.id !== action.payload)]}
        case 'toogleTodo':
            const newState = {...state, todos: [...state.todos]}
            const index = state.todos.findIndex(todo => todo.id === action.payload)
            if (index > -1){
                newState.todos[index].completed = !newState.todos[index].completed
            }
            console.log('state', newState)
            return newState
        default:
            return state
    }
 }
  export default todosReducer