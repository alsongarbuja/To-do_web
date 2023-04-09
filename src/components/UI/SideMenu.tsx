import { useState } from 'react';
import { keybinds } from '../../utils/keybinds'
import Input from '../fields/Input'

interface SideMenuProps {
    onAdd: (task: string) => void;
}

const SideMenu = ({ onAdd }: SideMenuProps) => {
    const [task, setTask] = useState<string>('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }

  return (
    <div className="md:min-h-screen md:border-r border-white">
        <div className="p-4">
            <Input 
                label="Add a new task"
                value={task}
                onChange={onChange}
                id="add-task"
                onKeyUp={(e) => {
                    if(e.altKey && e.key === '-') {
                        const inp = e.target as HTMLInputElement;
                        inp.blur();
                    }
                    if(e.key === 'Enter') {
                        onAdd(task);
                        setTask('');
                    }
                }}
            />
        </div>
        <div className="p-4 hidden md:block">
            <h3>Key Binds</h3>
            <ul className="mt-6">
                {
                    keybinds.map(keybind => (
                        <li className="mb-6" key={keybind.id}>
                            Press <span className="bg-slate-500 p-1 rounded-md font-medium">{keybind.bind}</span> {keybind.function}
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default SideMenu