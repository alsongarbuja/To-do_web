import TaskCard from "./components/UI/TaskCard"
import GridLayout from "./layouts/GridLayout"
import ListLayout from "./layouts/ListLayout"
import MasterLayout from "./layouts/MasterLayout"
import TaskLayout from "./layouts/TaskLayout"
import { taskList } from "./utils/tasks"

const App = () => {
  return (
    <div className="w-screen h-full bg-[#252525]">
      <MasterLayout>
        <TaskLayout>
          <ListLayout>
            {
              taskList.map(task => (
                <TaskCard {...task} />
              ))
            }
          </ListLayout>
        </TaskLayout>
      </MasterLayout>
    </div>
  )
}

export default App
