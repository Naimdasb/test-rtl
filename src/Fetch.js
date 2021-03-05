import React, { useEffect, useState } from 'react';

export const Fetch = () => {
    const [todo, setTodo] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setTimeout(() => {
            setTodo(json.title)
        }, 1000))
    }, [])

    return (
        <div>
            {todo}
        </div>
    )
}