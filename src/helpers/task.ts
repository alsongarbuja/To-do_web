export const isIdUnique = (id: number, tasks: Task[]): boolean => {
    return tasks.every(task => task.id !== id);
}