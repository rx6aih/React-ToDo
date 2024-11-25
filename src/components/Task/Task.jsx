import React, {useState} from 'react';
import classes from './Task.module.css';
import {changeTheme} from "../../Utils/ChangeTheme";
import CircleButton from "../UI/CircleButton/CircleButton";
import TaskText from "../UI/TaskText/TaskText";
const Task = ({theme, task,remove,onChange}) => {
    const rootClasses = [classes.oneTask];
    changeTheme(theme,rootClasses, classes);
    return (
        <div className={rootClasses.join(' ')}>
            <CircleButton data-done isDone={task.isDone} onclick={(e) =>{onChange(task)}}/>
            <TaskText theme={theme} isDone={task.isDone} title={task.title}/>
            <button className={(classes.deleteBtn)} onClick={() => {remove(task)}}>
                <img alt='delete' src={require('/home/shmi/WebstormProjects/todolist/src/components/UI/Resources/Images/icon-cross.svg').default}/>
            </button>
        </div>
    );
};

export default Task;