
const LOCALSTORAGE_KEY = 'todo_application_todos'; 

export const getTodos = () => {
  const todos = localStorage.getItem(LOCALSTORAGE_KEY);
  return todos ? JSON.parse(todos) : [];
}

export const addTodos = (todo: string) => {
  const Todo: Todo = {
    id: Date.now(),
    content: todo,
    isCompleted: false,
    isDeleted: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }

  const todos = getTodos();
  todos.push(Todo);

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todos));
}

export const deleteTodo = (id: number) => {
  const todos = getTodos();
  const newTodos = todos.filter((todo: Todo) => todo.id !== id);

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newTodos));
}

export const toggleCompleteTodo = (id: number) => {
  const todos = getTodos();
  const newTodos = todos.map((todo: Todo) => {
    if (todo.id === id) {
      todo.isCompleted = !todo.isCompleted;
    }
    return todo;
  });

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newTodos));
}

export const editTodos = (id: number, content: string) => {
  const todos = getTodos();
  const newTodos = todos.map((todo: Todo) => {
    if (todo.id === id) {
      todo.content = content;
      todo.updatedAt = new Date();
    }
    return todo;
  });

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newTodos));
}

export const getTodo = (id: number): Todo => {
  const todos = getTodos();
  return todos.find((todo: Todo) => todo.id === id);
}