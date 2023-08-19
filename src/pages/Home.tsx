import MasterLayout from '../layouts/MasterLayout'
import GridLayout from '../layouts/GridLayout'
import { useTodo } from '../hooks/useTodo'
import TodoCard from '../components/UI/TodoCard'
import TodoLayout from '../layouts/TodoLayout'

const Home = () => {
  const { todos, addTodo, removeTodo } = useTodo()

  return (
    <MasterLayout addTodo={addTodo}>
      <TodoLayout>
        <GridLayout>
          {
            todos.length === 0 ? (
              <p>No Todo Avilable</p>
            ) : (
              <>
                {
                  todos.map(todo => (
                    <TodoCard todo={todo} key={todo.id} onDelete={removeTodo} />
                  ))
                }
              </>
            )
          }
        </GridLayout>
      </TodoLayout>
    </MasterLayout>
  )
}

export default Home