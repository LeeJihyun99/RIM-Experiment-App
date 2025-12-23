import React from "react"
import "../../styles/experimentlayout.css"

type CenterCardProps = {
  title?: string
  children: React.ReactNode
}

export default function CenterCard({ title, children }: CenterCardProps) {
  return (
    <div className="center-card">
      {title && <h2>{title}</h2>}
      <div>{children}</div>
    </div>
  )
}
