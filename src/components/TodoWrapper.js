import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import { v4 as uuidv4} from 'uuid';
uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const toogleCompleted = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
    }

  return (
    <div className="bg-gray-600 p-10">
        <TodoForm addTodo={addTodo} />
        {todos.map((item, index)=> (
            item.isEditing ? (<EditTodoForm editTodo={editTask} task={item} key={index}/>) : (<Todo key={index} task={item} toogleCompleted={toogleCompleted} deleteTodo={deleteTodo} editTodo={editTodo} />)
            
        ))}
        
    </div>
  )
}

export default TodoWrapper