import {Component} from 'react'
import {
  Heading,
  Label,
  Input,
  Option,
  AppContainer,
  ImageContainer,
  Text,
  Button,
  Form,
  Select,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    urlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    isTrue: false,
    fontSize: 8,
  }

  getUrl = event => {
    this.setState({urlInput: event.target.value})
  }

  getTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  getBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  getImageDetails = event => {
    event.preventDefault()
    this.setState({isTrue: true})
  }

  fontSizeChange = event => {
    this.setState({fontSize: event.target.value})
  }

  render() {
    const {
      urlInput,
      topTextInput,
      bottomTextInput,
      isTrue,
      fontSize,
    } = this.state
    return (
      <AppContainer>
        <div>
          <Form onSubmit={this.getImageDetails}>
            <Heading className="main-heading">Meme Generator</Heading>
            <Label htmlFor="url">Image URL</Label>
            <br />
            <Input type="text" id="url" onChange={this.getUrl} />
            <br />
            <Label htmlFor="topText">Top Text</Label>
            <br />
            <Input type="text" id="topText" onChange={this.getTopText} />
            <br />
            <Label htmlFor="bottomText">Bottom Text</Label>
            <br />
            <Input type="text" id="bottomText" onChange={this.getBottomText} />
            <br />
            <Label htmlFor="Font Size">Font Size</Label>
            <br />
            <Select id="Font Size" onChange={this.fontSizeChange}>
              {fontSizesOptionsList.map(eachFontSize => (
                <Option
                  key={eachFontSize.optionId}
                  value={eachFontSize.optionId}
                >
                  {eachFontSize.displayText}
                </Option>
              ))}
            </Select>
            <br />
            <Button type="submit">Generate</Button>
          </Form>
        </div>
        {isTrue && (
          <ImageContainer url={urlInput} data-testid="meme">
            <Text font={fontSize}>{topTextInput}</Text>
            <Text font={fontSize}>{bottomTextInput}</Text>
          </ImageContainer>
        )}
      </AppContainer>
    )
  }
}

export default MemeGenerator
