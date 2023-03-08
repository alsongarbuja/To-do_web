import { Edit2, Trash2, Eye } from "react-feather"
import Button from "../fields/Button"

const TaskCard = () => {
  return (
    <div className="p-4 bg-black/20 rounded-md m-3 flex items-center">
        <input type="checkbox" className="mr-2" />
        <p>This is a task</p>
        <div className="px-3 flex gap-2">
            <Button 
                content={<Edit2 className="w-4 h-4" />}
                onClick={() => console.log("Edit")}
                style="icon"
                size="sm"
            />
            <Button 
                content={<Trash2 className="w-4 h-4" />}
                onClick={() => console.log("Delete")}
                style="icon"
                size="sm"
            />
            <Button 
                content={<Eye className="w-4 h-4" />}
                onClick={() => console.log("Detail")}
                style="icon"
                size="sm"
            />
        </div>
    </div>
  )
}

export default TaskCard