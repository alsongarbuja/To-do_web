import SideMenu from "../components/UI/SideMenu"

interface MasterLayoutProps {
    children: React.ReactNode
}

const MasterLayout = ({ children }: MasterLayoutProps) => {
  return (
    <div className="flex text-white">
        <SideMenu />
        <div>
            {children}
        </div>
    </div>
  )
}

export default MasterLayout