import React from 'react'
import './Tag.css'

const Tag = (props) => {
  return (
    <div>
        <button className='tag'>{props.tagName}</button>
    </div>
  )
}

export default Tag