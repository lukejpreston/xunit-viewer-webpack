import React from 'react'
import XunitViewer from './xunit-viewer'

window.suites = `<?xml version="1.0" encoding="UTF-8"?>
<testsuite tests="2" failures="1" time="0.0160106" name="A Suite">
    <testcase name="It Is A Pass" classname="Passing" time="0.000625">
        Here is a message
    </testcase>
    <testcase name="It Is A Fail" classname="Failing" time="0.000625" status="fail"></testcase>
</testsuite>`

const App = () => <XunitViewer xml={window.suites} title={window.title} />

export default App
