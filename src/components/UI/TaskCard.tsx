import { Check, Trash, View } from "lucide-react";
import Button from "../fields/Button"

interface TaskCardProps {
  task: Task;
  isInGrid?: boolean;
  onDelete: (id: number) => void;
  onCompleteToggle: (id: number) => void;
}

const TaskCard = ({ isInGrid=false, task, onDelete, onCompleteToggle }: TaskCardProps) => {
  return (
    <div className={`p-4 bg-black/20 rounded-md m-2 flex gap-3 justify-between ${isInGrid ? 'flex-col': 'items-center'}`}>
      <div className="flex items-center">
        <input id={task.id.toString()} type="checkbox" className="mr-2 hidden" checked={task.isCompleted} onChange={()=>onCompleteToggle(task.id)} />
        <label htmlFor={task.id.toString()} className="mr-2 cursor-pointer" tabIndex={0}>
          <span className={`w-4 h-4 rounded-sm border-2 border-blue-500 flex items-center justify-center ${task.isCompleted?"bg-blue-500":""}`}>
            {
              task.isCompleted && (
                // <span className="block w-2 h-2 bg-blue-300"></span>
                <Check className="w-2 h-2" />
              )
            }
          </span>
        </label>
        <p className={`${task.isCompleted?"line-through":""}`}>{task.content}</p>
      </div>
      <div className={`flex gap-2 ${isInGrid && "justify-end"}`}>
        <Button 
          content={<Trash className="w-6 h-6" />}
          onClick={() => onDelete(task.id)}
          style="icon"
          size="sm"
        />
        <Button 
          content={<View className="w-6 h-6" />}
          onClick={() => console.log("Detail "+task.id)}
          style="icon"
          size="sm"
        />
      </div>
    </div>
  )
}

export default TaskCard