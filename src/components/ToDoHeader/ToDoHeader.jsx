import React from 'react';
import cl from './ToDoHeader.module.css';
const ToDoHeader = () => {
    return (
        <div className={cl.ToDoHeader}>
            <div className={cl.ToDoHeaderLogo}>{'TODO'}</div>
            <button>
                <img alt='theme' src={require('/home/shmi/WebstormProjects/todolist/src/components/UI/Resources/Images/icon-sun.svg')}/>
            </button>
        </div>
    );
};

export default ToDoHeader;