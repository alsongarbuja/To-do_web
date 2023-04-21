
const LOCALSTORAGE_KEY = 'tasks_todo'; 

export const getTasks = () => {
    const tasks = localStorage.getItem(LOCALSTORAGE_KEY);
    return tasks ? JSON.parse(tasks) : [];
}

export const addTasks = (task: string) => {
    const Task: Task = {
        id: Date.now(),
        content: task,
        isCompleted: false,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    const tasks = getTasks();
    tasks.push(Task);

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(tasks));
}

export const deleteTask = (id: number) => {
    const tasks = getTasks();
    const newTasks = tasks.filter((task: Task) => task.id !== id);

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newTasks));
}

export const toggleCompleteTask = (id: number) => {
    const tasks = getTasks();
    const newTasks = tasks.map((task: Task) => {
        if (task.id === id) {
            task.isCompleted = !task.isCompleted;
        }
        return task;
    });

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newTasks));
}

export const editTasks = (id: number, content: string) => {
    const tasks = getTasks();
    const newTasks = tasks.map((task: Task) => {
        if (task.id === id) {
            task.content = content;
            task.updatedAt = new Date();
        }
        return task;
    });

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newTasks));
}