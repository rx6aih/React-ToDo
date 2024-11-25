import React from 'react';
import { Reorder } from "framer-motion"
import cl from './ToDoBody.module.css';
import {changeTheme} from "../../Utils/ChangeTheme";
import Task from "../Task/Task";
const ToDoBody = ({theme, tasks, remove, onChange, setTasks}) => {
    const rootClasses = [cl.body];
    changeTheme(theme, rootClasses, cl);

    return (
        <Reorder.Group values = {tasks} onReorder={setTasks} className={rootClasses.join(' ')}>
                {tasks.map(task =>
                    <Reorder.Item value={task} key={task.id}>
                        <Task key={task.id} theme={theme} task={task} remove={remove} onChange={onChange}/>
                    </Reorder.Item>
                )}
        </Reorder.Group>
    );
};

export default ToDoBody;