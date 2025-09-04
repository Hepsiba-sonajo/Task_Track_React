import React from 'react'
import './Tag.css'

<<<<<<< HEAD
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
=======
const Tag = (props) => {
  return (
    <div>
        <button className='tag'>{props.tagName}</button>
>>>>>>> a162edb7b803fe62d44ae0fa465abc20e2f3b09f
    </div>
  )
}

export default Tag