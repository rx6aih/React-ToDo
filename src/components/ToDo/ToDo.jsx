import React, {useMemo, useState} from 'react';
import cl from './ToDo.module.css';
import ToDoHeader from "../ToDoHeader/ToDoHeader";
import Background from "../UI/Background/Background";
import ToDoBody from "../ToDoBody/ToDoBody";
import TaskInput from "../UI/TaskInput/TaskInput";
import ToDoFooter from "../ToDoFooter/ToDoFooter";
import {useTasks} from "../../hooks/useTasks";
import allStorage from "../../Utils/AllStorage";
const ToDo = () => {
    const [theme, setTheme] = useState("dark");

    const [tasks, setTasks] = useState([
        {title: 'First', id: Date.now() + 1, isDone: false},
        {title:'Second', id: Date.now() + 2, isDone: false},
        {title:'Third', id: Date.now() +3, isDone: false}
    ]);

        useMemo(() => {
            localStorage.setItem(Date.now() + 5,JSON.stringify({title:'Fourth', id: Date.now() +4, isDone: false}))
            setTasks([...tasks, JSON.parse(...allStorage())]);
        },[])


    const [filter, setFilter] = useState(1);
    const removeTask = (delTask) => {
        setTasks(tasks.filter(task => delTask.id !== task.id));
        localStorage.removeItem(delTask.id);
    }
    const createTask = (newTask) => {
        setTasks([...tasks, newTask])
        console.log(newTask)
        localStorage.setItem(newTask.id, JSON.stringify(newTask))
    }
    const changeTask = (changedTask) =>{
        const newTasks = tasks.map(task =>{
            if(task.id === changedTask.id)
                return{
                    ...task,isDone : !task.isDone
                };
            else
                return task;
        })
        setTasks(newTasks);
    }

    const filteredTasks = useTasks(filter, tasks, setTasks);



    return (
        <div className={cl.ToDo}>
            <Background theme={theme}>
                <ToDoHeader
                    value={theme}
                    changeTheme={value => setTheme(value)}
                />
                <TaskInput theme={theme} tasks={tasks} create = {createTask}/>
                <ToDoBody theme={theme} tasks={filteredTasks} setTasks={setTasks} remove = {removeTask} onChange={changeTask}>
                </ToDoBody>
                <ToDoFooter theme={theme} tasks={tasks} setTasks={setTasks} setFilter={setFilter}/>
            </Background>
        </div>
    );
};

export default ToDo;