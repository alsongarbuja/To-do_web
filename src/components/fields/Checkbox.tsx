import { Check } from 'lucide-react'
import { toggleCompleteTodo } from '../../helpers/localstorge';

interface ICheckboxProps { todo: Todo; }


const Checkbox = ({ todo }: ICheckboxProps) => {
  const toggleComplete = (id: number) => toggleCompleteTodo(id);

  return (
    <>
      <input id={todo.id.toString()} type="checkbox" className="mr-2 hidden" checked={todo.isCompleted} onChange={()=>toggleComplete(todo.id)} />
      <label htmlFor={todo.id.toString()} className="mr-2 cursor-pointer" tabIndex={0}>
        <span className={`w-4 h-4 rounded-sm border-2 border-blue-500 flex items-center justify-center ${todo.isCompleted?"bg-blue-500":""}`}>
          {
            todo.isCompleted && (
              // <span className="block w-2 h-2 bg-blue-300"></span>
              <Check className="w-2 h-2" />
            )
          }
        </span>
      </label>
    </>
  )
}

export default Checkbox