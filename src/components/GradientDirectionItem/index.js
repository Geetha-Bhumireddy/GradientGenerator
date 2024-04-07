// Write your code here
import React from 'react'

const GradientDirectionItem = ({directionDetails, onClick}) => {
  const handleClick = () => {
    onClick(directionDetails.directionId)
  }

  return (
    <li>
      <button onClick={handleClick}>{directionDetails.displayText}</button>
    </li>
  )
}

export default GradientDirectionItem
