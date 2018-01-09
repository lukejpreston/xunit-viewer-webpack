import React from 'react'
import XunitViewer from './xunit-viewer'

const App = () => <XunitViewer xml={window.suites} title={window.title} />

export default App
