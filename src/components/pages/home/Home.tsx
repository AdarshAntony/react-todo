import React, { useEffect, useState } from "react";
import Header from "../../header/Header";
import { TodoTask } from "./TodoTask";
import { ITask } from "../../../interfaces";
import { useNavigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";


const Home = () => {
    const navigate = useNavigate();
    const collectionRef = collection(db, "todo");
    const [todoList, setTodoList] = useState<ITask[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
            const todoData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                taskName: doc.data().taskName,
                completed: doc.data().completed,
            }));
            setTodoList(todoData);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div className="Home-body">
            <div className="List-items">
                <div className={todoList.length >0 ? "create-task" : "hidden-thing"}>
                    <Header />
                </div>
                {todoList.length > 0 ? (todoList.map((task: ITask) => (
                    <TodoTask task={task} key={task.id} setTodoList={setTodoList} todoList={todoList} taskName={task.taskName} />
                ))
                ) : (
                    <>
                        <h1 className="noItem-h1">No Task Available</h1>
                        <p>Add some task and stay upto date with this todo-app.Why waiting? Click the button below and go on.</p>
                        <button className="create-task-btn" onClick={() => navigate("/createtask")}>Get Started</button>
                    </>
                )}
                <button className={todoList.length >0 ? "create-task create-task-btn" : "hidden-thing"} onClick={() => navigate("/createtask")}>Create Another Task</button>
            </div>
        </div>
    );
};

export default Home;
