import React from 'react'

export function Filters() {
  return (
    <div className="controls">
      <input type="text" placeholder="Search by name..." />

      <select>
        <option>All</option>
        <option>Text</option>
        <option>Image</option>
        <option>Video</option>
      </select>
    </div>
  )
}
