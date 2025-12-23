import React from "react"

interface CenterCardProps {
  title: string
  children: React.ReactNode
}

export default function CenterCard({ title, children }: CenterCardProps) {
  return React.createElement(
    "div",
    {
      style: {
        border: "1px solid #ccc",
        borderRadius: 10,
        padding: 20,
        margin: "20px 0",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      },
    },
    React.createElement("h2", {}, title),
    children
  )
}
