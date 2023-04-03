import TaskCard from "./components/UI/TaskCard"
import GridLayout from "./layouts/GridLayout"
import MasterLayout from "./layouts/MasterLayout"
import TaskLayout from "./layouts/TaskLayout"
import { taskList } from "./utils/tasks"

const App = () => {
  return (
    <div className="w-screen h-full bg-[#252525]">
      <MasterLayout>
        <TaskLayout>
          <GridLayout>
            {
              taskList.map(task => (
                <TaskCard {...task} isInGrid />
              ))
            }
          </GridLayout>
        </TaskLayout>
      </MasterLayout>
    </div>
  )
}

export default App
