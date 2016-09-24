import React, { Component, PropTypes } from 'react'
import { Button,Form,FormGroup,FormControl,ControlLabel } from 'react-bootstrap';


export default class Explore extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }
//onChange 必须是一个函数，value必须是一个字符串。
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setInputValue(nextProps.value)
    }
  }

  //对组件进行回收

  getInputValue = () => {
    return this.refs.input.value
  }

  setInputValue = (val) => {
    // Generally mutating DOM is a bad idea in React components,
    // but doing this for a single uncontrolled field is less fuss
    // than making it controlled and maintaining a state for it.
    this.refs.input.value = val
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleGoClick()
      //alert('success')
    }
  }
  //如果keycode=13的按键也就是enter键被按下了，则采取相应的措施。
  //再次进行了一次转化。

  handleGoClick = () => {
    //alert("success");
    this.props.onChange(this.getInputValue())
  }

  render() {
    return (
      <div>
        <Button bsStyle="success">Success</Button>
        <button bsStyle="success">Success</button>
        <Form inline>
        <FormGroup >
        <ControlLabel>Name</ControlLabel>
        {' '}
        <FormControl />
        </FormGroup>
        {' '}
        <FormGroup >
        <ControlLabel>Email</ControlLabel>
        {' '}
        <FormControl type="email" placeholder="jane.doe@example.com" />
        </FormGroup>
        {' '}
        <Button type="submit">
        Send invitation
        </Button>
        </Form>
        <p>Type a username or repo full name and hit 'Go':</p>
        <input size="45"
          ref="input"
          defaultValue={this.props.value}
          onKeyUp={this.handleKeyUp} 
          placeholder="please input your words"    
               />
        <button onClick={this.handleGoClick}>
          Go!
        </button>
        <hr/>
        <p>
          Move hide the DevTools   with Ctrl+H.
        </p>
      </div>
    )
  }
}

//在这里就是用的原生的html UI，并没有使用类似bootstrap这样的包。
//我们也可以试着来使用一下。
