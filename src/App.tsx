import TaskCard from "./components/UI/TaskCard"
import MasterLayout from "./layouts/MasterLayout"

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#252525]">
      <MasterLayout>
        <TaskCard />
      </MasterLayout>
    </div>
  )
}

export default App
