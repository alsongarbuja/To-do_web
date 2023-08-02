import type { PropsWithChildren } from 'react'

interface ListLayoutProps {}

const ListLayout = ({ children }: PropsWithChildren<ListLayoutProps>) => {
  return (
    <div className="flex flex-col gap-1">
      {children}
    </div>
  )
}

export default ListLayout