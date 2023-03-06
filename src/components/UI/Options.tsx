
interface OptionsProps {
    name: string;
    icon: JSX.Element;
}

const Options = ({ name, icon }: OptionsProps) => {
  return (
    <div className="bg-slate-400/10 flex items-center p-4 rounded-md cursor-pointer">
        <div className="mr-3">
            {icon}
        </div>
        <div>
            {name}
        </div>
    </div>
  )
}

export default Options