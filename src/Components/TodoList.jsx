import React from 'react'
import './todolist.css';

const TodoList = (props) => {
  return (
    <div className='task-list'>
       {props.items}
       <span className='icons'><i class="fa-solid fa-trash-can" onClick={e => {
        props.deleteItem(props.index)
       }}></i></span>
    </div>
  )
}

export default TodoList