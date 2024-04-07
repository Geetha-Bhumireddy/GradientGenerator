import React, {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {bgContainer} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    directionId: gradientDirectionsList[0].directionId,
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].directionId}, #8ae323, #014f7b`,
  }

  handleDirectionClick = directionId => {
    const {fromColor, toColor} = this.state
    const gradientValue = `to ${directionId}, ${fromColor}, ${toColor}`
    this.setState({directionId, gradientValue})
  }

  handleColorChange = (colorType, event) => {
    const {value} = event.target
    this.setState({[colorType]: value})
  }

  handleGenerateButtonClick = () => {
    const {directionId, fromColor, toColor} = this.state
    const gradientValue = `to ${directionId}, ${fromColor}, ${toColor}`
    this.setState({gradientValue})
  }

  renderGradient = () => {
    const {directionId, fromColor, toColor, gradientValue} = this.state
    return (
      <bgContainer gradientValue={gradientValue}>
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        <ul>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              directionDetails={each}
              onClick={this.handleDirectionClick}
            />
          ))}
        </ul>
        <div>
          <label htmlFor="fromColor">From Color:</label>
          <input
            type="color"
            id="fromColor"
            value={fromColor}
            onChange={e => this.handleColorChange('fromColor', e)}
          />
        </div>
        <div>
          <label htmlFor="toColor">To Color:</label>
          <input
            type="color"
            id="toColor"
            value={toColor}
            onChange={e => this.handleColorChange('toColor', e)}
          />
        </div>
        <button onClick={this.handleGenerateButtonClick}>Generate</button>
      </bgContainer>
    )
  }

  render() {
    return <>{this.renderGradient()}</>
  }
}

export default GradientGenerator
