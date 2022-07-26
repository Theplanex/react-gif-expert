import React from 'react'

export function GifItem({url,title,id}) {
  return (
    <div className='card'>
        <img src={url} alt={title}  />
        <p>{title}</p>
    </div>
  )
}

export default GifItem