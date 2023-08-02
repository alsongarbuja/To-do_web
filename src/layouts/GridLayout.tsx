import type { PropsWithChildren } from "react";

interface GridLayoutProps {}

const GridLayout = ({ children }: PropsWithChildren<GridLayoutProps>) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {children}
    </div>
  )
}

export default GridLayout