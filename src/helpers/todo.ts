export const isIdUnique = (id: number, todos: Todo[]): boolean => {
  return todos.every(todo => todo.id !== id);
}