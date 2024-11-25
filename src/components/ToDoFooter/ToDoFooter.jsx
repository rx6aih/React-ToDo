import React, {useEffect, useMemo, useState} from 'react';
import classes from './ToDoFooter.module.css';
import {changeTheme} from "../../Utils/ChangeTheme";
import {useLeft} from "../../hooks/useLeft";
import Filter from "../Filter/Filter";
const ToDoFooter = ({theme, tasks, setTasks, setFilter}) => {
    const rootClasses = [classes.footer];
    changeTheme(theme,rootClasses,classes);

    const tasksLeft = useLeft(tasks) + ' осталось';
    function clearCompleted(){
        setTasks(tasks.filter(task => !task.isDone))
    }
    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.container}>
                <p className={classes.tasksLeft}>{tasksLeft}</p>
                <Filter theme={theme} setFilter={setFilter}/>
                <button onClick={clearCompleted}>Clear completed</button>
            </div>
        </div>
    );
};

export default ToDoFooter;