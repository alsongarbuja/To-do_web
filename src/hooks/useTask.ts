import { useEffect, useState } from 'react'
import { isIdUnique } from '../helpers/task';

const TASK_TODO = "tasks_todo";

const useTask = () => {
    const [tasks, setTasks] = useState<Task[] | []>([])

    useEffect(() => {
        const tasks = localStorage.getItem(TASK_TODO);
        if (tasks) {
            setTasks(JSON.parse(tasks));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(TASK_TODO, JSON.stringify(tasks));
    }, [tasks])

    const addTask = (task: string) => {

        let id = Math.random();

        while (!isIdUnique(id, tasks)) {
            id = Math.random();
        }

        const newTask: Task = {
            id,
            content: task,
            isCompleted: false,
            isDeleted: false,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        
        setTasks(prev => ([
            ...prev,
            newTask,
        ]));

        // localStorage.setItem(TASK_TODO, JSON.stringify(tasks));
    }

    const removeTask = (id: number) => {
        setTasks(prev => prev.filter(task => task.id !== id));

        // localStorage.setItem(TASK_TODO, JSON.stringify(tasks));
    }

    const completeTask = (id: number) => {
        setTasks(prev => prev.map(task => {
            if (task.id === id) {
                task.isCompleted = !task.isCompleted;
            }
            return task;
        }));

        // localStorage.setItem(TASK_TODO, JSON.stringify(tasks));
    }

    const editTask = (id: number, content: string) => {
        setTasks(prev => prev.map(task => {
            if (task.id === id) {
                task.content = content;
                task.updatedAt = new Date();
            }
            return task;
        }));

        // localStorage.setItem(TASK_TODO, JSON.stringify(tasks));
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