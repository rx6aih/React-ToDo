import React from 'react';
import classes from './Filter.module.css';
import {changeTheme} from "../../Utils/ChangeTheme";

const Filter = ({theme, setFilter}) => {
    const rootClasses = [classes.filter];
    changeTheme(theme, rootClasses, classes);
    function changeFilter(filter, e) {
        const btns = e.target.parentElement.children;
        for(let btn of btns){
            btn.classList.remove(classes.active);
        }
        e.target.classList.add(classes.active);
        setFilter(filter);
    }

    return (
        <div className={rootClasses.join(' ')}>
            <button className={classes.active} onClick={(e) => changeFilter(1,e)}>All</button>
            <button onClick={(e) => changeFilter(2,e)}>Active</button>
            <button onClick={(e) => changeFilter(3,e)}>Completed</button>
        </div>
    );
};

export default Filter;