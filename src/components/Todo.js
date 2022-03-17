import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import { useDispatch } from 'react-redux'
import { setEditTodos } from '../redux/loading/todoActions'



function Todo(props) {
    const { todos, updateTodo, removeTodo, markDoneTodo } = props
    const dispatch = useDispatch()
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    }

    useEffect(() => {
        dispatch(setEditTodos({ id: edit.id }))
    }, [edit])

    return (
        todos.map((todo, index) => (
            <div key={index} className={todo.completed ? 'todo-row complete' : 'todo-row'}>
                {todo.edit ? (
                    <TodoForm edit={edit} onSubmitUpdate={submitUpdate} />
                ) : (
                    <div key={index}>
                        <input type="checkbox" checked={todo.completed} onClick={() => markDoneTodo(todo.id)} />
                        {todo.title}
                    </div>
                )}
                {!todo.edit ? (                 
                    <div className="dropdown">
                        <button className="dropbtn">...</button>
                        <div className="dropdown-content">
                            <p className='edit-text' onClick={() => setEdit({ id: todo.id, value: todo.title })}>Edit</p>
                            <p className='delete-text' onClick={() => removeTodo(todo.id)}>Delete</p>
                        </div>
                    </div>

                ) : ('')}
            </div>

        ))
    )
}

export default Todo
