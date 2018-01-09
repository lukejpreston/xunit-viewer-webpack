import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Error from './error'
import Suites from './suites'
import parser from './parser'

const knownStatuses = ['pass', 'fail', 'error', 'skip']

class XunitViewer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      xml: props.xml,
      statStatus: {
        suites: {
          active: 'inactive',
          expanded: 'active',
          collapsed: 'inactive',
          shown: 'active',
          hidden: 'inactive'
        },
        tests: {
          active: 'inactive',
          expanded: 'active',
          collapsed: 'inactive',
          shown: 'active',
          hidden: 'inactive'
        },
        properties: {
          active: 'inactive',
          expanded: 'active',
          collapsed: 'inactive',
          shown: 'active',
          hidden: 'inactive'
        }
      },
      title: props.title || 'Xunit Viewer',
      suites: [],
      uuids: {},
      header: {
        active: true
      },
      search: {
        suites: '',
        tests: '',
        properties: ''
      },
      collapsed: {
        suites: {},
        tests: {},
        properties: {}
      },
      hidden: {
        suites: {},
        tests: {},
        properties: {}
      }
    }
  }
  updateWithXml (xml, suites) {
    let uuids = {
      suites: {},
      properties: {},
      tests: {}
    }
    suites.forEach(suite => {
      let suiteStatus = knownStatuses.includes(suite.status) ? suite.status : 'unknown'
      uuids.suites[suiteStatus] = uuids.suites[suiteStatus] || []
      uuids.suites[suiteStatus].push(suite._uuid)

      if (suite.properties) {
        uuids.properties.properties = uuids.properties.properties || []
        uuids.properties.properties.push(suite.properties._uuid)
      }

      if (suite.tests) {
        suite.tests.forEach(test => {
          let testStatus = knownStatuses.includes(test.status) ? test.status : 'unknown'
          uuids.tests[testStatus] = uuids.tests[testStatus] || []
          uuids.tests[testStatus].push(test._uuid)
        })
      }
    })
    this.setState({xml, uuids, suites, err: null})
  }
  componentDidMount () {
    parser
      .parse(this.state.xml)
      .then(result => this.updateWithXml(this.state.xml, result))
      .catch(err => this.setState({err}))
  }
  render () {
    return <div>
      <Header
        title={this.state.title}
        statsStatus={this.state.statStatus}
        suites={this.state.suites}
        search={this.state.search}
        onSearch={(value, type) => {
          let search = this.state.search
          search[type] = value
          this.setState({search})
        }}
        onToggle={() => {
          let header = this.state.header
          header.active = !header.active
          this.setState({header})
        }}
        onStatToggle={(type) => {
          let statStatus = this.state.statStatus
          statStatus[type].active = statStatus[type].active === 'active' ? 'inactive' : 'active'
          this.setState({statStatus})
        }}
        onExpand={({name, type}) => {
          name = name.toLowerCase()

          let collapsed = this.state.collapsed

          if (name === type) {
            Object.keys(this.state.uuids[name]).forEach(key => {
              let uuids = this.state.uuids[name][key]
              uuids.forEach(uuid => {
                if (collapsed[type][uuid]) delete collapsed[type][uuid]
              })
            })
          } else {
            let uuids = this.state.uuids[name][type]
            uuids.forEach(uuid => {
              if (collapsed[name][uuid]) delete collapsed[name][uuid]
            })
          }

          let statStatus = this.state.statStatus
          statStatus[type].expanded = statStatus[type].expanded = 'active'
          statStatus[type].collapsed = statStatus[type].collapsed = 'inactive'
          this.setState({statStatus, collapsed})
        }}
        onCollapse={({name, type}) => {
          name = name.toLowerCase()
          let collapsed = this.state.collapsed

          if (name === type) {
            Object.keys(this.state.uuids[name]).forEach(key => {
              let uuids = this.state.uuids[name][key]
              uuids.forEach(uuid => {
                collapsed[type][uuid] = true
              })
            })
          } else {
            let uuids = this.state.uuids[name][type]
            uuids.forEach(uuid => {
              collapsed[name][uuid] = true
            })
          }
          let statStatus = this.state.statStatus
          statStatus[type].expanded = statStatus[type].expanded = 'inactive'
          statStatus[type].collapsed = statStatus[type].collapsed = 'active'
          this.setState({statStatus, collapsed})
        }}
        onShow={({name, type}) => {
          name = name.toLowerCase()

          let hidden = this.state.hidden

          if (name === type) {
            Object.keys(this.state.uuids[name]).forEach(key => {
              let uuids = this.state.uuids[name][key]
              uuids.forEach(uuid => {
                if (hidden[type][uuid]) delete hidden[type][uuid]
              })
            })
          } else {
            let uuids = this.state.uuids[name][type]
            uuids.forEach(uuid => {
              if (hidden[name][uuid]) delete hidden[name][uuid]
            })
          }

          let statStatus = this.state.statStatus
          statStatus[type].hidden = statStatus[type].hidden = 'inactive'
          statStatus[type].shown = statStatus[type].shown = 'active'
          this.setState({statStatus, hidden})
        }}
        onHide={({name, type}) => {
          name = name.toLowerCase()
          let hidden = this.state.hidden

          if (name === type) {
            Object.keys(this.state.uuids[name]).forEach(key => {
              let uuids = this.state.uuids[name][key]
              uuids.forEach(uuid => {
                hidden[type][uuid] = true
              })
            })
          } else {
            let uuids = this.state.uuids[name][type]
            uuids.forEach(uuid => {
              hidden[name][uuid] = true
            })
          }

          let statStatus = this.state.statStatus
          statStatus[type].hidden = statStatus[type].hidden = 'active'
          statStatus[type].shown = statStatus[type].shown = 'inactive'
          this.setState({statStatus, hidden})
        }}
        isActive={this.state.header.active}
        onXmlChange={(evt) => {
          const xml = evt.target.value
          parser
            .parse(xml)
            .then(result => this.updateWithXml(xml, result))
            .catch(err => this.setState({xml, err}))
        }}
        xml={this.state.xml}
      />
      {this.state.err ? <Error err={this.state.err} xml={this.state.xml} />
        : <Suites
          suites={this.state.suites}
          search={this.state.search}
          hidden={this.state.hidden}
          collapsed={this.state.collapsed}
          onToggle={({type, uuid}) => {
            let collapsed = this.state.collapsed
            if (collapsed[type][uuid]) delete collapsed[type][uuid]
            else collapsed[type][uuid] = true
            this.setState({collapsed})
          }}
        />
      }
    </div>
  }
}

XunitViewer.propTypes = {
  xml: PropTypes.string,
  title: PropTypes.string
}

export default XunitViewer
if (typeof window !== 'undefined') window.XunitViewer = XunitViewer
