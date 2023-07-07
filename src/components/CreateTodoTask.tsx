import React, { ChangeEvent, useState } from 'react'
import { ITask } from '../interfaces'

interface Props {
  task: ITask;
  todoList: ITask[];
  updateTask(taskId: number, newTaskName: string): void;
  deleteTask(id: number): void;
}

export const CreateTodoTask = ({ todoList, updateTask, deleteTask, task }: Props) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [newTaskName, setNewTaskName] = useState<string>("");

  const completeEditing = () => {
    updateTask(task.id, newTaskName);
    setEdit(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(event.target.value);
  };

  return (
    <div className='task-box'>
      <div>
        {todoList && edit ? (
          <>
            <input type='text' value={newTaskName} placeholder='enter' onChange={handleInputChange} />
            <button onClick={completeEditing}>Update</button>
            <button onClick={() => setEdit(false)}>Cancel</button>
          </>
        ) : (
          <>
            <span className={completed ? "completed-task" : ""}>{task.taskName}</span>
            <button className={completed ? "avoid-btns" : "toggle-btns"} onClick={() => setEdit(true)}>📝</button>
            <button className={completed ? "avoid-btns" : "toggle-btns"} onClick={() => setCompleted(true)}>✅</button>
            <button className="toggle-btns" onClick={() => deleteTask(task.id)}>⛔</button>
          </>
        )}
      </div>
    </div>
  )
}