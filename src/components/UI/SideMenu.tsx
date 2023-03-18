import { keybinds } from '../../utils/keybinds'
import Input from '../fields/Input'

const SideMenu = () => {
  return (
    <div className="min-h-screen border-r border-white">
        <div className="p-4">
            <Input 
                label="Add a new task"
                value="Hello"
                onChange={() => {}}
                id="add-task"
                onKeyUp={(e) => {
                    if(e.altKey && e.key === '-') {
                        const inp = e.target as HTMLInputElement;
                        inp.blur();
                    }
                }}
            />
        </div>
        <div className="p-4">
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