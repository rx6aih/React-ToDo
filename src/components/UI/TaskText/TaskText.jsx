import React from 'react';
import classes from './TaskText.module.css';
import {changeTheme} from "../../../Utils/ChangeTheme";
const TaskText = ({theme,isDone,title}) => {
    const rootClasses = [classes.container]
    let disabled = isDone? true : false;
    changeTheme(theme,rootClasses, classes);
    return (
        <div className={rootClasses.join(' ')}>
            <p title={title}/>
        </div>
    );
};

export default TaskText;