import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddTask() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [cont, setCont] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3000/create', { name, title, cont, date })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
                <div className="w-50 bg-white rounded p-3">
                    <form onSubmit={handleSubmit}>
                        <Link to={"/"} className="btn btn-success">Home</Link>
                        <div className="mb-2">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Enter Name" className="form-control" onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Title</label>
                            <input type="text" placeholder="Enter Title" className="form-control" onChange={e => setTitle(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Description</label>
                            <input type="text" placeholder="Enter Description" className="form-control" onChange={e => setCont(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Date</label>
                            <input type="date" placeholder="Enter date" className="form-control" onChange={e => setDate(e.target.value)} />
                        </div>
                        <button className="btn btn-success">Add</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddTask;
