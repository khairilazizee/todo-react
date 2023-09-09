import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(value)
        addTodo(value)

        setValue("")
    }

  return (
    <form className="flex flex-row" onSubmit={handleSubmit}>
        <input name="todo" type="text" className="text-black p-3" placeholder="What is the task today?" onChange={(e) => setValue(e.target.value)} value={value} autoComplete='off' />
        <button type="submit" className="bg-purple-600 py-2 px-4">Add Task</button>
    </form>
  )
}

export default TodoForm