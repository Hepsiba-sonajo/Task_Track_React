import React from 'react'
import './Tag.css'

const Tag = ({tagName,selectTag, selected}) => {
 const tagStyle = {
  JavaScript: {backgroundColor : "#fda821"},
  React: {backgroundColor : "#15d4c8"},
  Node: {backgroundColor : "#ffd12c"},
  HTML: {backgroundColor : "#4cdafc"},
  default: {backgroundColor : "#f9f9f9"},
 }


  return (
    <div>
        <button 
        type='button'  
        className='tag' 
        style={selected ? tagStyle[tagName] : tagStyle.default}
        onClick={() => selectTag(tagName) }> 
        {tagName}</button>
    </div>
  )
}

export default Tag