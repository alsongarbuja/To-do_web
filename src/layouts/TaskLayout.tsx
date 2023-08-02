import type { PropsWithChildren } from "react";

interface TaskLayoutProps { }

const TaskLayout = ({ children }: PropsWithChildren<TaskLayoutProps>) => {
  return (
    <div className="p-2">
      {children}
    </div>
  )
}

export default TaskLayout