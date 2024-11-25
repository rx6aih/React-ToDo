import React from 'react';
import classes from './CircleButton.module.css';
const CircleButton = ({isDone, onclick}) => {
    return (
        <div>
        {!isDone
         ?<button onClick={onclick} className={classes.btn}></button>
         :<button onClick={onclick} className={(`${classes.btn} ${classes.done}`)}>
                <img alt='achieve' src={require('/home/shmi/WebstormProjects/todolist/src/components/UI/Resources/Images/icon-check.svg').default}/>
         </button>
        }
        </div>
    );
};

export default CircleButton;