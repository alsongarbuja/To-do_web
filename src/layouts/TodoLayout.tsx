import type { PropsWithChildren } from "react";

interface TodoLayoutProps { }

const TodoLayout = ({ children }: PropsWithChildren<TodoLayoutProps>) => {
  return (
    <div className="p-2">
      {children}
    </div>
  )
}

export default TodoLayout