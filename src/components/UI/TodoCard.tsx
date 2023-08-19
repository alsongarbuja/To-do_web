import { useNavigate } from "react-router-dom";
import { Check, Trash, View } from "lucide-react";

import Button from "../fields/Button"
import Checkbox from "../fields/Checkbox";

interface TodoCardProps {
  todo: Todo;
  isInGrid?: boolean;
  onDelete: (id: number) => void;
}

const TodoCard = ({ isInGrid=false, todo, onDelete }: TodoCardProps) => {
  const navigate = useNavigate();

  return (
    <div className={`p-4 bg-black/20 rounded-md m-2 flex gap-3 justify-between ${isInGrid ? 'flex-col': 'items-center'}`}>
      <div className="flex items-center">
        <Checkbox todo={todo} />
        <p className={`${todo.isCompleted?"line-through":""}`}>{todo.content}</p>
      </div>
      <div className={`flex gap-2 ${isInGrid && "justify-end"}`}>
        <Button 
          content={<Trash className="w-6 h-6" />}
          onClick={() => onDelete(todo.id)}
          style="icon"
          size="sm"
        />
        <Button 
          content={<View className="w-6 h-6" />}
          onClick={() => navigate(`${todo.id}`)}
          style="icon"
          size="sm"
        />
      </div>
    </div>
  )
}

export default TodoCard