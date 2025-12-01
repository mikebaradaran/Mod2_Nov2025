import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBlog() {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const history = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        const data = JSON.stringify({ "title": title, "author": name, "body": message });
        fetch('http://localhost:4000/data', {
            method: 'POST',
            body: data,
            headers: { 'Content-Type': 'application/json' }
        }).then(() => {
            history('/')
        });
    }

    return (
        <form onSubmit={submitHandler}>
            Name:  <input type="text" onChange={(e) => setName(e.target.value)} /><br />
            Title: <input type="text" onChange={(e) => setTitle(e.target.value)} /><br />
            Message:<input type="text" onChange={(e) => setMessage(e.target.value)} /><br />
            <button>Add blog</button>
        </form>)
}

export default NewBlog;
