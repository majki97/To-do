import todosReducer from './reducers'
import {createStore} from 'redux'

const store = createStore(todosReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;