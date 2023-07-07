import React, { ChangeEvent } from 'react';
import { ITask } from '../../interfaces';

interface Props {
    task:any;
    addTask():void;
    setTask:(task:string) => void;
}

const CreateTask = ({task,addTask,setTask}:Props) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };

    return (
        <div className='app-name'>
            <h1>Todo List</h1>
            <div className='form'>
                <input type='text' value={task} onChange={handleChange} required={true} />
                <button onClick={addTask} >Submit</button>
            </div>
        </div>
    );
};

export default CreateTask;