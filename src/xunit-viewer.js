import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Error from './error'
import Suites from './suites'
import parser from './parser'
import CodeMirror from 'codemirror'
import '../node_modules/codemirror/lib/codemirror.css'
import '../node_modules/codemirror/mode/xml/xml'
import '../node_modules/codemirror/theme/dracula.css'

const knownStatuses = ['pass', 'fail', 'error', 'skip']

const xunitViewerIcon = 'data:image/png;base64,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'
const failIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANmSURBVHic7Zs9jxtFHIefmZ198Zo7LIioaaBA99JQQh8RQhMkipCEAhASUME3OIc0oUmBkFJEXBQRhCDfIgKJJvkAUboUQce9yPaud2+HwvF513m586HZv8TNU1nWzPr3f3ZmPd5Zq0fvv2M5wWjpANKY6Yv7Zci9/VAyS2usBwVrpgBqAu7th2zmqVioNrkYDw8EnPgp4AVIB5DGC5AOII0XIB1AGi9AOoA0XoB0AGm8AOkA0ngB0gGk8QKkA0jjXMArqlq4j8FySi/e7zg4FfBGUPLTS/9wIRkeuY9Rlo10lx+627zWggRnAt7UJVfTHRJl+Sgacik+XIJRlo3OLqtByctUXEu3efUYI2gRnAjo6Yrvuzt01GTLIQY+jEZ88oKRYJTlcrrHqimJlUWryXGudnecDlMnx96uNJvjlHFtyyVRlnPRkC+SwVPtjbL0O7u8pcfEzDoVwPWsi8sxYA5vcjx+zTsAXIoGxGryXgKciUYA/Jh1JwGUpd/ZYyUoDtoBZMCV4TJ3y8hVxMnnuzz4cyWEGQq4nqf00z1W9FikeHAsACYSNJaPoxHJk2tCoizvhRnvhjnLyhLX2mdW0R8t8WcLxUMLAgB+yVMUivPRsCEhobkv23bx0OJK8HbeYXOckj9nLzoDrrRcPLS8FL6TJzy2ARWq8X4J/FXErcz5eVoTYLBspHuc0hV6bugb4G0z5vNnfEW6phUBk+J3WTFFY94XtTaJspwNMz5rWYJzAdMzv2LKRvG5VdwtYjI7mw6JsnwQZq2OBKcCpsWvBs0znwHfjZboj5a4Pe6Qz0k4G2V82ZIEZwLqxceqWXx9kXMrT/l5XgKW0y1JcCJgNuybxedWcXn09ArvVp7y2zhpTgcsp1uYDk4ELCvL67oknJvz/WyJP4pnf9XdyLv8PidBA2tBgVHuHmRzImDLar4e9tiqNCWHFz+lLqEAHlYB3w56lFa9sN9/wdk14O9K89Wgx6MqOFLxU6YSHuwbvhn0yFwFfILT3wJbVvPpoEe14Bm8kXe5mVtKR7nqOF8HLFr8lBJ3w76Ovy0uHUAaL0A6gDRegHQAabwA6QDSeAHSAaTxAqQDSOMFSAeQxguQDiCNFyAdQJqDe4LrQcHFIzzJ9X9gPZjtSh4IWDOz/9OeJE78FPgXp1svY7A0kjQAAAAASUVORK5CYII='
const passIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAM+SURBVHic7ZvBixxFFIe/V11dO7MbNXhQcgphdz2KeDAXvUvQS0DFk4Eccsk/krshBBQ8SLx4kIBeDTkEcooJCkKMSg4KLmwQZjI71T31PAy7O73sbjx0zWvY/k5NU8z71a/eq6qu7pH1h5eUE4yzFmCN370ofqtxj2tLLUsjbXpmG/Ou7xngHtf4H3bMRC2T+sJgz4ATXwK9AdYCrOkNsBZgTW+AtQBregOsBVjTG2AtwJreAGsB1vgXN+kAA0FPO0CRrQSz9n660wakTU+8OETPFFApIuD+nBE+H7UWo7MGzM4H4sdDCDK/UQhaKfJ3i8NPR+eA2bqnWuw8QAK3nShvT1qN1TkD9FVHdWUNXew8wFQJ18dQtRuvUyWgQZhePYWuNDsvUSlvjpFnqfWYnTKg+nSInpZGXspU8bd3KJ7kObDtTAnU75SkN0so90dfIrhHFf7uNFvcTmRAes1RfbLanPQUZDsRbrU76R3EPgM8xCunoGzelqlS3hhBnffFlbkB9YdD9BUBWRj9COXXz3Hb7U96BzEtgXSuoH43NFM/Kv5epHjY8np3BHYZEIR4+cB6nxS3lSi/y1v3i5gZUH00hGEzvEQIN8etPuy8iKwlkDY8szc87vea4te6cb9+u4Sw31YihFuTLJud48higK7O0zud9RDmOzl3bYRszaCE+Nlas+4rcD9H3IOYQ86xZCmBeHmNtO5hBRDQUqjeXwGg+mCArjbby0QJ3yyv7hfJYoC+7qBoRklvlfNZ/71BY/QlKuGLEezYfKiSxQD565A6ThCvvtQsuqj4O1PcH0uc9Q6QxQD/IMK0OaI6EDQAu4OvIP+q+UcZWQwoHtVQyPGNaghfLXfJO4w8+4Bxwh13dBWV8s4U99S492TcCBU/7sAR2S0jzFN/l2wG+J8O38tLVMKX4+xPef+XfFvhCsK3z5GoMFFkokgN/vsJ7ml3PsfLuhUu7kfcLxX6sgMP7p9ktt4fRfbHYRkpMrKf7I7C/EDEmt4AawHW9AZYC7CmN8BagDW9AdYCrOkNsBZgTW+AtQBregOsBVjTG2AtwJq9E6G06akvDCy1LI20uX8Qtnc129j/P+1J4sSXwH+ci/WyVnUwgwAAAABJRU5ErkJggg=='

class XunitViewer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      xml: props.xml,
      xmlActive: 'active',
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
      header: { active: true },
      search: {
        suites: '',
        tests: '',
        properties: ''
      },
      collapsed: {},
      hidden: {},
      pretty: {}
    }
  }
  updateWithXml (xml, suites) {
    let uuids = {
      suites: {},
      properties: {},
      tests: {}
    }
    const pretty = {}
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
          pretty[test._uuid] = true
        })
      }
    })
    this.setState({xml, uuids, suites, err: null, pretty})
    const link = document.getElementById('favico')
    if (this.state.suites.some(suite => suite.status !== 'pass')) link.href = failIcon
    else link.href = passIcon
  }
  componentDidMount () {
    const codeMirror = CodeMirror.fromTextArea(document.getElementById('xml'), {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'xml'
    })
    this.codeMirror = codeMirror
    codeMirror.on('change', () => {
      const xml = codeMirror.getValue()
      parser
        .parse(xml)
        .then(result => this.updateWithXml(xml, result))
        .catch(err => this.setState({xml, err, suites: []}))
    })
    codeMirror.setSize(null, 120)
    codeMirror.getWrapperElement().style.transition = 'height 0.2s'
    parser
      .parse(this.state.xml)
      .then(result => this.updateWithXml(this.state.xml, result))
      .catch(err => this.setState({err}))

    const link = document.querySelector("link[rel*='icon']") || document.createElement('link')
    link.id = 'favico'
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = xunitViewerIcon
    document.getElementsByTagName('head')[0].appendChild(link)
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
                if (collapsed[uuid]) delete collapsed[uuid]
              })
            })
          } else {
            let uuids = this.state.uuids[name][type]
            uuids.forEach(uuid => {
              if (collapsed[uuid]) delete collapsed[uuid]
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
                collapsed[uuid] = true
              })
            })
          } else {
            let uuids = this.state.uuids[name][type]
            uuids.forEach(uuid => {
              collapsed[uuid] = true
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
                if (hidden[uuid]) delete hidden[uuid]
              })
            })
          } else {
            let uuids = this.state.uuids[name][type]
            uuids.forEach(uuid => {
              if (hidden[uuid]) delete hidden[uuid]
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
                hidden[uuid] = true
              })
            })
          } else {
            let uuids = this.state.uuids[name][type]
            uuids.forEach(uuid => {
              hidden[uuid] = true
            })
          }

          let statStatus = this.state.statStatus
          statStatus[type].hidden = statStatus[type].hidden = 'active'
          statStatus[type].shown = statStatus[type].shown = 'inactive'
          this.setState({statStatus, hidden})
        }}
        isActive={this.state.header.active}
        onXmlInput={() => {
          const xmlActive = this.state.xmlActive === 'active' ? 'inactive' : 'active'
          this.codeMirror.setSize(null, xmlActive === 'inactive' ? 0 : 120)
          this.setState({xmlActive})
        }}
        xml={this.state.xml}
        xmlActive={this.state.xmlActive}
      />
      {this.state.err ? <Error err={this.state.err} xml={this.state.xml} />
        : <Suites
          suites={this.state.suites}
          search={this.state.search}
          hidden={this.state.hidden}
          collapsed={this.state.collapsed}
          pretty={this.state.pretty}
          onToggle={({uuid}) => {
            let collapsed = this.state.collapsed
            if (collapsed[uuid]) delete collapsed[uuid]
            else collapsed[uuid] = true
            this.setState({collapsed})
          }}
          onToggleMessage={({uuid, message}) => {
            this.state.pretty[uuid] = !this.state.pretty[uuid]
            this.setState({
              pretty: this.state.pretty
            })
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
