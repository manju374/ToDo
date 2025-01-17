import React, {Fragment, useEffect, useState} from 'react';
import EditTodo from './EditTodo';

const ListTodo = () => {

    const [todo, setTodo] = useState([]);

    //delete function

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todo/${id}`, {
                    method: "DELETE"
                }
            );

            setTodo(todo.filter(todos => todos.todo_id !== id));
            } catch (err) {
                console.error(err.message);
        }
    }


    const getTodo = async () => {
        try {
            const response = await fetch("http://localhost:5000/todo");
            const jsonData = await response.json();

            setTodo(jsonData);
        } catch (err) {
            console.error(err.message);
        }

    }

    useEffect(() => {
        getTodo();
    },[]);

    

    return <Fragment>
    <table class="table mt-5 text-center">
    <thead>
    <tr>
    <th>Description</th>
    <th>Edit</th>
    <th>Delete</th>
    </tr>
    </thead>
    <tbody>
        {/* */}
        {todo.map(todos => (
            <tr key={todos.todo_id}>
            <td>{todos.description}</td>
            <td>
                <EditTodo todos={todos}/>
            </td>
            <td>
                <button 
                    className="btn btn-danger" 
                    onClick={() => deleteTodo(todos.todo_id)}>
                        Delete
                    </button>
            </td>
            </tr>
        ))}
    
    </tbody>
    </table>
    </Fragment>
};

export default ListTodo;