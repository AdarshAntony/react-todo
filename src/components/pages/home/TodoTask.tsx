import React, { Dispatch, ChangeEvent, SetStateAction, useState, useEffect } from 'react';
import { ITask } from '../../../interfaces';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

interface Props {
  task: ITask;
  taskName: string;
  setTodoList: Dispatch<SetStateAction<ITask[]>>;
  todoList: ITask[];
}

export const TodoTask = ({ setTodoList, todoList, task, taskName }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [newTaskName, setNewTaskName] = useState<string>('');

  let errorMessage = " ";

  useEffect(() => {
    setCompleted(task.completed);
  }, [task.completed]);

  const deleteTask = async (id: string) => {
    try {
      const docRef = doc(db, 'todo', id);
      await deleteDoc(docRef);
      console.log('Document deleted successfully');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  const updateTask = async () => {
    if (!newTaskName) {
      errorMessage = "New task name is required in order to change current task name.";
      console.log(errorMessage);
      return
    }
    try {
      const docRef = doc(db, 'todo', task.id);
      await updateDoc(docRef, { taskName: newTaskName });
      setEdit(true);
      console.log('TaskName updated.');
      setEdit(false);
    } catch (error) {
      console.log('Error occurred while updating', error);
    }
  };

  const CompleteTask = async () => {
    try {
      const docRef = doc(db, 'todo', task.id);
      await updateDoc(docRef, { completed: !completed });
      setCompleted(!completed);
      console.log('Task completed.');
    } catch (error) {
      console.log('Error occurred while updating', error);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(event.target.value);
  };

  return (
    <div className='task-div'>
      {todoList && edit ? (
          <>
          <div className='task-edit-div'>
            <div className="input-container">
              <input type='text' value={newTaskName} placeholder='Enter new taskname......' onChange={handleInputChange} />
            </div>
            <div className="button-container">
              <button className="edit-btns" onClick={updateTask}>Update</button>
              <button className="edit-btns" onClick={() => setEdit(false)}>Cancel</button>
            </div>
            
          </div>
          {!newTaskName && <span className="error-message">Task name cannot be empty</span>}
          </>
      ) : (
        <div className='task-list'>
          <div>
            <span className={completed ? 'completed-task' : ''}>{taskName}</span>
          </div>
          <div className='button-container'>
            <button className={completed ? 'avoid-btns' : 'toggle-btns'} onClick={() => setEdit(true)}>
              📝
            </button>
            <button className={completed ? 'avoid-btns' : 'toggle-btns'} onClick={CompleteTask}>
              ✅
            </button>
            <button className='toggle-btns' onClick={() => deleteTask(task.id)}>
              ⛔
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
