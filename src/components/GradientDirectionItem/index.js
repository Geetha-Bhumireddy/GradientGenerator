// Write your code here
import {DirectionButton} from './styledComponents'

const GradientDirectionItem = ({directionDetails, onClick, isActive}) => {
  const handleClick = () => {
    onClick(directionDetails.directionId)
  }

  return (
    <li>
      <DirectionButton type="button" onClick={handleClick} isActive={isActive}>
        {directionDetails.displayText}
      </DirectionButton>
    </li>
  )
}

export default GradientDirectionItem
