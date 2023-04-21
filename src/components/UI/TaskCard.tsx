import { Edit2, Trash2, Eye } from "react-feather"
import Button from "../fields/Button"

interface TaskCardProps {
    task: Task;
    isInGrid?: boolean;
    onDelete: (id: number) => void;
    onCompleteToggle: (id: number) => void;
}

const TaskCard = ({ isInGrid=false, task, onDelete, onCompleteToggle }: TaskCardProps) => {
  return (
    <div className={`p-4 bg-black/20 rounded-md m-3 flex gap-3 justify-between ${isInGrid ? 'flex-col': 'items-center'}`}>
        <div className="flex items-center">
            <input id={task.id.toString()} type="checkbox" className="mr-2 hidden" checked={task.isCompleted} onChange={()=>onCompleteToggle(task.id)} />
            <label htmlFor={task.id.toString()} className="mr-2 cursor-pointer">
                <span className={`w-4 h-4 rounded-full border-2 border-blue-500 flex items-center justify-center ${task.isCompleted?"bg-gray-50":""}`}>
                    {
                        task.isCompleted && (
                            <span className="block w-2 h-2 rounded-full bg-blue-300"></span>
                        )
                    }
                </span>
            </label>
            <p>{task.content}</p>
        </div>
        <div className={`flex gap-2 ${isInGrid && "justify-end"}`}>
            <Button 
                content={<Edit2 className="w-4 h-4" />}
                onClick={() => console.log("Edit "+task.id)}
                style="icon"
                size="sm"
            />
            <Button 
                content={<Trash2 className="w-4 h-4" />}
                onClick={() => onDelete(task.id)}
                style="icon"
                size="sm"
            />
            <Button 
                content={<Eye className="w-4 h-4" />}
                onClick={() => console.log("Detail "+task.id)}
                style="icon"
                size="sm"
            />
        </div>
    </div>
  )
}

export default TaskCard