import { Edit2, Trash2, Eye } from "react-feather"
import Button from "../fields/Button"

interface TaskCardProps {
    id: number;
    content: string;
    isCompleted: boolean;
    isDeleted: boolean;
    isInGrid?: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const TaskCard = ({ isInGrid=false, content, isCompleted, id, isDeleted, createdAt, updatedAt }: TaskCardProps) => {
  return (
    <div className={`p-4 bg-black/20 rounded-md m-3 flex gap-3 justify-between ${isInGrid ? 'flex-col': 'items-center'}`}>
        <div className="flex items-start">
            <input type="checkbox" className="mr-2 mt-2" checked={isCompleted} />
            <p>{content}</p>
        </div>
        <div className={`flex gap-2 ${isInGrid && "justify-end"}`}>
            <Button 
                content={<Edit2 className="w-4 h-4" />}
                onClick={() => console.log("Edit "+id)}
                style="icon"
                size="sm"
            />
            <Button 
                content={<Trash2 className="w-4 h-4" />}
                onClick={() => console.log("Delete "+id)}
                style="icon"
                size="sm"
            />
            <Button 
                content={<Eye className="w-4 h-4" />}
                onClick={() => console.log("Detail "+id)}
                style="icon"
                size="sm"
            />
        </div>
    </div>
  )
}

export default TaskCard