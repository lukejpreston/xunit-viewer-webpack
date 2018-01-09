import React, {Component} from 'react'
import CodeMirror from 'codemirror'
import '../../node_modules/codemirror/lib/codemirror.css'
import '../../node_modules/codemirror/mode/xml/xml'
import '../../node_modules/codemirror/theme/dracula.css'
import PropTypes from 'prop-types'

class XmlInput extends Component {
  componentDidMount () {
    const codeMirror = CodeMirror.fromTextArea(document.getElementById('xml'), {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'xml'
    })
    codeMirror.on('change', () => {
      this.props.onXmlChange(codeMirror.getValue())
    })
    codeMirror.setSize(null, 120)
  }
  render () {
    return <div>
      <label className='label has-text-white'>XML Test Suites</label>
      <button className='button is-link is-fullwidth'>Hide</button>
      <textarea defaultValue={this.props.xml} id='xml' ref={textArea => { this.textArea = textArea }} />
    </div>
  }
}

XmlInput.propTypes = {
  onXmlChange: PropTypes.func.isRequired,
  xml: PropTypes.string
}

export default XmlInput
