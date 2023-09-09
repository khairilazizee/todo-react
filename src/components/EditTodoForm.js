import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(value)
        editTodo(value, task.id)

        setValue("")
    }

  return (
    <form className="flex flex-row pt-3" onSubmit={handleSubmit}>
        <input name="todo" type="text" className="text-black p-3" placeholder="Update Task?" onChange={(e) => setValue(e.target.value)} value={value} />
        <button type="submit" className="bg-purple-600 py-2 px-4">Update Task</button>
    </form>
  )
}

export default EditTodoForm