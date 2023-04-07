import React from 'react'

interface ListLayoutProps {
    children: React.ReactNode[];
}

const ListLayout = ({ children }: ListLayoutProps) => {
  return (
    <div className="flex flex-col gap-2">
        {children}
    </div>
  )
}

export default ListLayout