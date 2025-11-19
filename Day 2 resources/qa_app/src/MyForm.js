import React, { useState } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

function MyForm() {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [age, setAge] = useState(0);
    const [message, setMessage] = useState("");
    const history = useNavigate();

    function submitHandler(event) {
        event.preventDefault(); 
        const data = JSON.stringify({ "title": title, "author": name, "body": message });
        fetch('http://localhost:4000/blogs', {
            method: 'POST',
            body: data,
            headers: { 'Content-Type': 'application/json' }
        }).then(() => {
            history('/')
        });
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <h3>Enter details</h3>
                <label>Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
                <label>Message</label>
                <input type="text" onChange={(e) => setMessage(e.target.value)} />
                <button>Add blog</button>
            </form>
        </Card>);
}

export default MyForm;
