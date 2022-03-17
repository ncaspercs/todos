import { load } from './todoTypes'
import { v4 as uuid } from 'uuid'
import { flushSync } from 'react-dom'

export const initialState = {
  title: '',
  todos: []
}

function todoReducer(state = initialState, action) {

  switch (action.type) {

    case load.LOADING:
      return {
        ...state
      }

    case load.LOADING_SUCCESS:
      const newtodo = []
      for (let i = 0; i < action.payload.length; i++) {
        newtodo.push({
          id: action.payload[i].id,
          title: action.payload[i].title,
          completed: action.payload[i].completed,
          edit: false
        })
      }
      return {
        ...{ todos: newtodo }
      }

    case load.ADD_TODO:
      const unique_id = uuid()
      let todo = { id: unique_id, title: action.payload.title, completed: false }
      state.todos.push(todo)
      return {
        ...state,
        ...{ todos: state.todos }
      }

    case load.SETEDIT_TODO:
      let editTodo = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.edit = true;
        }
        return todo;
      })

      return {
        ...{ todos: editTodo }
      }

    case load.UPDATE_TODO:
      let todoupdate = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.edit = false;
          todo.title = action.payload.title;
        }
        return todo;
      })
      return {
        ...{ todos: todoupdate }
      }

    case load.REMOVE_TODO:
      const removed = state.todos.filter(todo => todo.id !== action.payload.id)
      return {
        ...{ todos: removed }
      }

    case load.MARK_TODO:
      let markTodo = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })

      return {
        ...{ todos: markTodo }
      }

    default:
      return state
  }
}

export default todoReducer;