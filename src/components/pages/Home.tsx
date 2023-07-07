import React from "react";
import { ITask } from "../../interfaces";
import { CreateTodoTask } from "../CreateTodoTask";

interface Props {
    task: ITask;
    todoList: ITask[];
    updateTask(taskId: number, newTaskName: string): void;
    deleteTask(id: number): void;
}

const Home = ({ task, todoList, updateTask, deleteTask }: Props) => {

    return (
        <div className="Todo-body">
            <div className='List-items'>
                {
                    todoList.length > 0 ?
                        todoList.map((task: ITask, key: number) => {
                            return <CreateTodoTask task={task} key={key} updateTask={updateTask} todoList={todoList} deleteTask={deleteTask} />
                        }) :
                        <h1>No Todos Available</h1>
                }
            </div>
        </div>
    );
}

export default Home;
