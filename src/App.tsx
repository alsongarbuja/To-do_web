import TaskCard from "./components/UI/TaskCard"
import ListLayout from "./layouts/ListLayout"
import MasterLayout from "./layouts/MasterLayout"
import TaskLayout from "./layouts/TaskLayout"
import useTask from "./hooks/useTask"

const App = () => {
  const { tasks, addTask, removeTask } = useTask()

  return (
    <div className="w-screen h-full bg-[#252525]">
      <MasterLayout addTask={addTask}>
        <TaskLayout>
          <ListLayout>
            {
              tasks.length === 0 ? (
                <p>No Task Avilable</p>
              ) : (
                <>
                  {
                    tasks.map(task => (
                      <TaskCard task={task} key={task.id} onDelete={removeTask} />
                    ))
                  }
                </>
              )
            }
          </ListLayout>
        </TaskLayout>
      </MasterLayout>
    </div>
  )
}

export default App
