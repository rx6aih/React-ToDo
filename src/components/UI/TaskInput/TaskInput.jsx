import React, {useState} from 'react';
import classes from './TaskInput.module.css';
import {changeTheme} from "../../../Utils/ChangeTheme";
const TaskInput = ({theme, tasks, create}) => {
    const rootClasses =[classes.container]
    const [task,setTask] = useState('');
    changeTheme(theme,rootClasses, classes);

    const newTask = () =>{
        const newTask = {
            title:task, id: Date.now(), isDone: false
        }
        create(newTask);
        setTask('');
    }

    return (
        <div className={rootClasses.join(' ')}>
            <input
                type='text'
                value={task}
                placeholder='Введите дело'
                onKeyDown={(e) =>{
                    if(e.key === 'Enter' && task.length>1){
                        newTask();
                    }
                }}
                onChange = {(e) =>setTask(e.target.value)}
            />
        </div>
    );
};

export default TaskInput;