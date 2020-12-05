import React, { Component } from 'react'

class ParagrafComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paragraf4: this.props.text
    }
  }

  render() {
    const viewPropsText = this.state.paragraf4.map((item, index) => {
      return (
        <p key={index}>{item}</p>
      )
    })

    return (
      <div>
        <p>{viewPropsText}</p>
      </div>
    )
  }

}
export default ParagrafComponent