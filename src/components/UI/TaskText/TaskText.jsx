import React from 'react';
import classes from './TaskText.module.css';
import {changeTheme} from "../../../Utils/ChangeTheme";
const TaskText = ({theme,isDone,title}) => {
    const rootClasses = [classes.container]
    const pClasses=[];
    changeTheme(theme,rootClasses, classes);
    if(isDone) pClasses.push(classes.done);
    return (
        <div className={rootClasses.join(' ')}>
            <p className={pClasses.join(' ')}>{title}</p>
        </div>
    );
};

export default TaskText;