import SideMenu from "../components/UI/SideMenu"

interface MasterLayoutProps {
    children: React.ReactNode
}

const MasterLayout = ({ children }: MasterLayoutProps) => {
  return (
    <div className="flex text-white">
        <SideMenu />
        <div className="flex-1 p-4">
          <h1>All Tasks</h1>
          {children}
        </div>
    </div>
  )
}

export default MasterLayout