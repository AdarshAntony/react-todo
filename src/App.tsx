import React, {  useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ITask } from './interfaces';

//File Imports
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import CreateTask from './components/pages/CreateTask';

function App() {

  const [task, setTask] = useState<any>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  //AddTask Function
  const addTask = () => {
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      taskName: task,
    }
    setTodoList([...todoList, newTask]);
    setTask("");
  };


  //UpdateTask Function
  const updateTask = (taskId: number, newTaskName: string) => {
    const updatedList = todoList.map((task) => task.id === taskId ? { ...task, taskName: newTaskName } : task);
    setTodoList(updatedList);
  };

  //DeleteTask Function
  const deleteTask = (id: number) => {
    setTodoList(todoList.filter((task) => {
      return task.id !== id
    }));
  };

  return (
    <div className='App-body'>
      <div className='nav-bar'>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home deleteTask={deleteTask} updateTask={updateTask} task={task} todoList={todoList} />} ></Route>
            <Route path='/createtask' element={<CreateTask task={task} addTask={addTask} setTask={setTask} />} ></Route>

          </Routes>
        </Router>
      </div>

    </div >
  );
}

export default App;
