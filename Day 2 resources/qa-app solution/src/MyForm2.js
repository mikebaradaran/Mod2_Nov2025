import React, { useState } from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import "./MyForm2.css"

function MyForm2() {
    const [state, setState] = useState({ name: '', title: '', message: '' });
    const history = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    function submitHandler(event) {
        event.preventDefault();
        fetch('http://localhost:4001/blogs', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: { 'Content-Type': 'application/json' }
        }).then(() => {
            history('/')
        });
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Name</label><input type="text" name='name' onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Title</label><input type="text" name='title' onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Message</label><input type="text" name='body' onChange={handleChange} />
                </div>

                <button>Add blog</button>
            </form>
        </Card>);
}

export default MyForm2;
