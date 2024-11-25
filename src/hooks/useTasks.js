import {useMemo} from "react";
import allStorage from "../Utils/AllStorage";

export const useTasks = (filter,tasks,setTasks) => {
    const sortedTasks = useMemo(() =>{
        if(filter === 1)
            return tasks;
        if(filter === 2)
            return ([...tasks].filter(task => !task.isDone))
        if(filter === 3)
            return([...tasks].filter(task => task.isDone))
    },[tasks, filter]);
    return sortedTasks;
}