
interface GridLayoutProps {
    children: React.ReactNode[];
}

const GridLayout = ({ children }: GridLayoutProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
        {children}
    </div>
  )
}

export default GridLayout