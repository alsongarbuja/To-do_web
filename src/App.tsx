import { useState } from "react"
import TaskCard from "./components/UI/TaskCard"
import ListLayout from "./layouts/ListLayout"
import MasterLayout from "./layouts/MasterLayout"
import TaskLayout from "./layouts/TaskLayout"

const App = () => {
  const [taskList, setTaskList] = useState<Task[] | []>([]);

  const addTask = (task: string) => {
    const newTask: Task = {
      id: new Date().getTime(),
      content: task,
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      isDeleted: false,
    }
    setTaskList(prev => ([...prev, newTask]));
  }

  return (
    <div className="w-screen h-full bg-[#252525]">
      <MasterLayout addTask={addTask}>
        <TaskLayout>
          <ListLayout>
            {
              taskList.length === 0 ? (
                <p>No Task Avilable</p>
              ) : (
                <>
                  {
                    taskList.map(task => (
                      <TaskCard {...task} key={task.id} />
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
