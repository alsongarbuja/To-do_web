import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { stateManager } from '../state/stateManager';
import { addTodos, deleteTodo, editTodos, getTodos, toggleCompleteTodo } from '../helpers/localstorge';


export const useTodo = () => {
  const [todos, setTodos] = useAtom(stateManager);
  // const [todos, setTodos] = useState<Todo[] | []>([])

  const getTodoFromLocalStorage = () => {
    const todos = getTodos();
    setTodos(todos);
  }

  useEffect(() => {
    getTodoFromLocalStorage();
  }, [])

  const addTodo = (todo: string) => {
    addTodos(todo);

    getTodoFromLocalStorage();
  }
  
  const removeTodo = (id: number) => {
    if(window.confirm('Are you sure you want to delete this todo?')) {
      deleteTodo(id);
      getTodoFromLocalStorage();
    }
  }

  const completeTodo = (id: number) => {
    toggleCompleteTodo(id);

    getTodoFromLocalStorage();
  }

  const editTodo = (id: number, content: string) => {
    editTodos(id, content);

    getTodoFromLocalStorage();
  }

  return {
    todos,
    addTodo,
    removeTodo,
    completeTodo,
    editTodo,
  }
}