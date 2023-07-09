import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { v4 as uuidv4 } from 'uuid';

const CreateTask = () => {
    const [task, setTask] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
        setError('');
    };

    const handleCreateTask = async () => {
        if (task.trim() === '') {
            setError('Task name is required in order to create task.');
            return
        }

        const newTask = {
            id: uuidv4(),
            taskName: task,
            completed: false
        };

        try {
            const docRef = await addDoc(collection(db, 'todo'), newTask);
            console.log('New task added with ID: ', docRef.id);

            setTask('');
            navigate('/');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div className="createTask-body">
            <div className="form-body">
                <h1 className='form-head'>Create Task</h1>
                <div className='form'>
                <input
                    type="text"
                    className='form-input'
                    placeholder='Enter Task......'
                    value={task}
                    onChange={handleChange}
                />
                <button onClick={handleCreateTask}>Submit</button>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <br />
                <button className='home-btn' onClick={() => navigate("/")}>Home Page</button>
            </div>
        </div>
    );
};

export default CreateTask;
