import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import 'bulma/css/bulma.css'
import 'normalize.css'
import '../../node_modules/codemirror/lib/codemirror.css'
import '../../node_modules/codemirror/mode/xml/xml'
import '../../node_modules/codemirror/theme/dracula.css'

ReactDOM.render(<App />, document.getElementById('root'))
