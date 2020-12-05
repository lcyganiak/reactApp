import React, { Component } from 'react'


class NowyComponentClassowy extends Component {
  constructor(props) {
    super(props)
    // // this.props = { 
    // tablicaZRodzica => zawartości arr z app.js
    // kolejnyProps = zawarości z app.js 
    // props3 => zawartości z app.js
    // }
    this.state = {
      tablicaZRodzica: this.props.tablicaZRodzica || [],
      kolejnyProps: this.props.kolejnyProps || '',
      props3: this.props.props3 || ''
    }
  }
  xd = () => {
    this.setState({
      props3: "zostałem zminiony "
    })
  }
  componentDidMount() {
    this.xd()
  }
  render() {
    const lista = this.state.tablicaZRodzica.map((item, index) => {
      return (
        <p key={index}>{item}</p>
      )
    })
    return (
      <div>
        {lista}
        <div>{this.state.props3}</div>



      </div>
    )
  }

}
export default NowyComponentClassowy