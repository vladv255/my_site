import React from 'react'

interface CardProps {
  name: string;
  description: string;
  category: string;
}

export function Card( {name, description, category }: CardProps) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="tag">{category}</div>
    </div>
  )
}
