import React from 'react'

const Todo = ({task, toogleCompleted, editTodo, deleteTodo}) => {
  return (
    <div className="flex flex-row pt-5 justify-between">
        <p onClick={() => toogleCompleted(task.id)} className={`first-letter:uppercase ${task.completed ? 'line-through':''}`}>{task.task}</p>
        <div className="flex gap-3">
            <span onClick={() => editTodo(task.id)}>Edit</span>
            <span onClick={() => deleteTodo(task.id)}>Delete</span>
        </div>
    </div>
  )
}

export default Todo