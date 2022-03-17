import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!props.edit) {
      props.addTodo(input)
      setInput("")
    } else {
      props.onSubmitUpdate({
        text: input
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      {props.edit ? (
        <>
          <div className='todo-row-edit'>
            <div>
              <input
                placeholder='Update your item'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                name='text'
                className='todo-input'
              />
            </div>
            <div>
              <button onClick={handleSubmit} className='todo-edit-button'>
                save
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='todo-row'>
            <input
              placeholder='Add your todo ...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              name='text'
              className='todo-input'
              aria-label="name-input"
            />
          </div>
        </>
      )}
    </form>
  )
}

export default TodoForm
