import { useEffect, useState } from 'react';
import { addTasks, deleteTask, editTasks, getTasks, toggleCompleteTask } from '../helpers/localstorge';

const useTask = () => {
    const [tasks, setTasks] = useState<Task[] | []>([])

    const getTaskFromLocalStorage = () => {
        const tasks = getTasks();
        setTasks(tasks);
    }

    useEffect(() => {
        getTaskFromLocalStorage();
    }, [])

    const addTask = (task: string) => {
        addTasks(task);

        getTaskFromLocalStorage();
    }

    const removeTask = (id: number) => {
        deleteTask(id);

        getTaskFromLocalStorage();
    }

    const completeTask = (id: number) => {
        toggleCompleteTask(id);

        getTaskFromLocalStorage();
    }

    const editTask = (id: number, content: string) => {
        editTasks(id, content);

        getTaskFromLocalStorage();
    }

    return {
        tasks,
        addTask,
        removeTask,
        completeTask,
        editTask,
    }
}

export default useTask