import React, {Component} from 'react'
import XunitViewer from './xunit-viewer'

import parser from './parser'
const suitesPromise = parser.parse(window.suites)

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {suites: []}
  }
  componentDidMount () {
    suitesPromise
      .then((suites) => this.setState({suites}))
      .catch(err => this.setState({err, xml: err.xml}))
  }
  render () {
    return <XunitViewer
      suites={this.state.suites}
      err={this.state.err}
      xml={this.state.xml}
      title={window.title || 'Xunit Viewer'}
    />
  }
}

export default App
