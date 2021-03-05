import React, { useState } from 'react';

export const Fetch = () => {
    const [todo, setTodo] = useState('')

    const handleClick = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setTodo(json.title))
    }

    return (
        <div>
            <button onClick={handleClick}>Click Here</button>
            <h1>
            {todo}
            </h1>
        </div>
    )
}