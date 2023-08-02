import TaskCard from "./components/UI/TaskCard"
import MasterLayout from "./layouts/MasterLayout"
import TaskLayout from "./layouts/TaskLayout"
import useTask from "./hooks/useTask"
import GridLayout from "./layouts/GridLayout"

const App = () => {
  const { tasks, addTask, removeTask, completeTask } = useTask()

  return (
    <div className="w-screen h-full bg-[#252525]">
      <MasterLayout addTask={addTask}>
        <TaskLayout>
          <GridLayout>
            {
              tasks.length === 0 ? (
                <p>No Task Avilable</p>
              ) : (
                <>
                  {
                    tasks.map(task => (
                      <TaskCard task={task} key={task.id} onDelete={removeTask} onCompleteToggle={completeTask} />
                    ))
                  }
                </>
              )
            }
          </GridLayout>
        </TaskLayout>
      </MasterLayout>
    </div>
  )
}

export default App
