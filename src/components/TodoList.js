import React, { useState, useEffect, Fragment } from 'react'
import { loading, addTodos, updateTodos, removeTodos, markDoneTodos, filterTodos } from '../redux/loading/todoActions'
import { useDispatch, useSelector } from 'react-redux'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const dispatch = useDispatch()
    const [todos, setTodos] = useState([])
    const { todos: todoData } = useSelector(state => state.isTodos)
    const [countComplete, setcountComplete] = useState(0)
    const [progress, setprogress] = useState(0)
    const [filter, setfilter] = useState('all')


    const addTodo = (title) => {
        dispatch(addTodos({ title }))
    }

    const updateTodo = (todoId, newValue) => {
        dispatch(updateTodos({ id: todoId, title: newValue.text }))
    }

    const removeTodo = (id) => {
        dispatch(removeTodos({ id }))
    }

    const markDoneTodo = (id) => {
        dispatch(markDoneTodos({ id }))
    }

    /*     useEffect(() => {
            setprogress((countComplete*100)/todoData.length)
        }, [])
     */
    const handleChange = (e) => {
        setfilter(e.target.value)
    }

    useEffect(() => {
        if (filter === 'all') {
            setTodos(todoData)
        } else if (filter === 'done') {
            const filterdone = todoData.filter(todo => todo.completed === true)
            setTodos(filterdone)
        } else if (filter === 'undone') {
            const filterUndone = todoData.filter(todo => todo.completed === false)
            setTodos(filterUndone)
            console.log(filterUndone)
        }
    }, [filter])

    useEffect(() => {
        setTodos(todoData)
        let sum = 0
        for (let i = 0; i < todoData.length; i++) {
            if (todoData[i].completed === true)
                sum = sum + 1
        }
        setcountComplete(sum)
    }, [todoData])

    useEffect(() => {
        dispatch(loading())
    }, [])

    return (
        <Fragment>
            <div className='todo-progress'>
                <span className='span-text'>
                    Progress
                </span>
                <div className="progress-container">
                    <progress value={todoData.length > 0 ? (countComplete * 100) / todoData.length : 0} max="100"></progress>
                </div>
                <span className='span-text-complete'>
                    {countComplete} completed
                </span>
            </div>
            <div className='todo-content'>
                <span className='span-text-content'>
                    Tasks
                </span>
                <div className=''>
                    <select className='dropdown-select' onChange={handleChange} >
                        <option value="all">All</option>
                        <option value="done">Done</option>
                        <option value="undone">Undone</option>
                    </select>
                </div>
            </div>
            <Todo todos={todos} updateTodo={updateTodo} removeTodo={removeTodo} markDoneTodo={markDoneTodo} />
            <TodoForm addTodo={addTodo} />
        </Fragment>
    )
}

export default TodoList;
