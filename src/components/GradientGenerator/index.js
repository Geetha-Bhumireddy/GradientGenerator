import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {BgContainer} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    directionId: gradientDirectionsList[0].value,
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  handleDirectionClick = directionId => {
    this.setState({directionId})
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
      <BgContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        <ul>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              directionDetails={each}
              onClick={this.handleDirectionClick}
              isActive={each.value === directionId}
            />
          ))}
        </ul>
        <div>
          <p>Pick the Colors</p>
          <label htmlFor="fromColor">
            <p>{fromColor}</p>
          </label>
          <input
            type="color"
            id="fromColor"
            value={fromColor}
            onChange={e => this.handleColorChange('fromColor', e)}
          />
        </div>
        <div>
          <label htmlFor="toColor">
            <p>{toColor}</p>
          </label>
          <input
            type="color"
            id="toColor"
            value={toColor}
            onChange={e => this.handleColorChange('toColor', e)}
          />
        </div>
        <button type="button" onClick={this.handleGenerateButtonClick}>
          Generate
        </button>
      </BgContainer>
    )
  }

  render() {
    return <>{this.renderGradient()}</>
  }
}

export default GradientGenerator
