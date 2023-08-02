import type { PropsWithChildren } from "react";

import SideMenu from "../components/UI/SideMenu"

interface MasterLayoutProps extends PropsWithChildren {
  addTask: (task: string) => void;
}

const MasterLayout = ({ children, addTask }: MasterLayoutProps) => {
  return (
    <div className="flex text-white flex-col md:flex-row max-h-screen">
      <SideMenu onAdd={addTask} />
      <div className="flex-1 p-4 overflow-y-scroll">
        <h1>All Tasks</h1>
        {children}
      </div>
    </div>
  )
}

export default MasterLayout