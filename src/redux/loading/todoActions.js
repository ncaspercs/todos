import { load } from './todoTypes'

export function loading() {
  return {
    type: load.LOADING,
  }
}

export function loadingSuccess(todos) {
  return {
    type: load.LOADING_SUCCESS,
    payload: todos
  }
}

export function addTodos(title) {
  return {
    type: load.ADD_TODO,
    payload: title
  }
}

export function setEditTodos(id) {
  return {
    type: load.SETEDIT_TODO,
    payload: id
  }
}

export function updateTodos(todoData) {
  return {
    type: load.UPDATE_TODO,
    payload: todoData
  }
}

export function removeTodos(id) {
  return {
    type: load.REMOVE_TODO,
    payload: id
  }
}

export function markDoneTodos(id) {
  return {
    type: load.MARK_TODO,
    payload: id
  }
}

export function loadingError(error){
  return { 
    type: load.loadingError ,
    action: error
  }
}
