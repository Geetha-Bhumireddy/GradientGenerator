// Style your elements here

import styled from 'styled-components'

export const DirectionButton = styled.button`
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
