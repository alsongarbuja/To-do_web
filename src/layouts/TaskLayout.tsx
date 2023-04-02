
interface TaskLayoutProps {
    children: React.ReactNode;
}

const TaskLayout = ({ children }: TaskLayoutProps) => {
  return (
    <div className="p-2">
        {children}
    </div>
  )
}

export default TaskLayout