import React from 'react'
import {PropTypes} from 'prop-types'
 
export function GifItem({url,title,id}) {
  return (
    <div className='card'>
        <img src={url} alt={title}  />
        <p>{title}</p>
    </div>
  )
}


GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title : PropTypes.string.isRequired
}

export default GifItem