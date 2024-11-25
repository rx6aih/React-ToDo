import {useMemo} from 'react';
import allStorage from "../Utils/AllStorage";

export const useLeft = (tasks) => {
    const tasksLeft = useMemo(() =>{
        let count = 0;
        for(let i = 0; i < tasks.length; i++){
            if(tasks[i].isDone === false)
                count++;
        }
        return count;
    },[tasks]);
    return tasksLeft;
}