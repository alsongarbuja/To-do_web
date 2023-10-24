import type { PropsWithChildren } from "react";

interface GridLayoutProps {}

const GridLayout = ({ children }: PropsWithChildren<GridLayoutProps>) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,_1fr))]">
      {children}
    </div>
  )
}

export default GridLayout