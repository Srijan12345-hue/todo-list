
import React, { useState } from 'react';

export default function AddTodo ({ addTodo })  {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container add-todo-container">
            <h3 className="add-todo-title">✨ Add a New Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">📝 Todo Title</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="form-control" 
                        id="title" 
                        placeholder="Enter your todo title..."
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">📄 Todo Description</label>
                    <input 
                        type="text" 
                        value={desc} 
                        onChange={(e) => setDesc(e.target.value)} 
                        className="form-control" 
                        id="desc" 
                        placeholder="Describe your todo..."
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-add-todo">🚀 Add Todo</button>
                </div>
            </form>
        </div>
    )
}
