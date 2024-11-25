import React from 'react';
import cl from './ToDoHeader.module.css';
const ToDoHeader = ({value, changeTheme}) => {
    return (
        <div className={cl.ToDoHeader}>
            <div className={cl.ToDoHeader__logo}>
                {'TODO'}
            </div>
            <button className={cl.btn} onClick={() =>{value === 'dark' ? changeTheme('light') : changeTheme('dark')}}>
                <img alt={'icon'} src={require(`/home/shmi/WebstormProjects/todolist/src/components/UI/Resources/Images/icon-${value}.svg`)}/>
            </button>
        </div>
    );
};

export default ToDoHeader;