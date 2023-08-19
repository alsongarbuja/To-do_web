import { useState } from "react";
import type { PropsWithChildren } from "react";

import Input from "../components/fields/Input";

interface MasterLayoutProps extends PropsWithChildren {
  addTodo: (task: string) => void;
}

const MasterLayout = ({ children, addTodo }: MasterLayoutProps) => {
  const [task, setTask] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <div className="text-white max-h-screen p-4">
      <Input
        label="Add a new task"
        value={task}
        onChange={onChange}
        id="add-task"
        onKeyUp={(e) => {
          if (e.altKey && e.key === "-") {
            const inp = e.target as HTMLInputElement;
            inp.blur();
          }
          if (e.key === "Enter") {
            addTodo(task);
            setTask("");
          }
        }}
      />
      <h1>All Tasks</h1>
      {children}
    </div>
  )
}

export default MasterLayout