import React from 'react'; import PropTypes from 'prop-types'
import Suite from './suite'
import searchSuites from '../search-suites'
import styles from './styles'
import clone from 'clone'

let hideSuites = (suites, hidden) => {
  suites = clone(suites)
  suites = suites.filter(suite => {
    return hidden[suite._uuid] !== true
  })

  suites.forEach(suite => {
    if (suite.properties && hidden[suite.properties._uuid]) delete suite.properties

    if (suite.tests) {
      suite.tests = suite.tests.filter(test => {
        return hidden[test._uuid] !== true
      })
    }
  })
  return suites
}

let Suites = ({suites = [], search, collapsed, hidden, onToggle, onToggleMessage, pretty}) => {
  suites = searchSuites(suites, search)
  suites = hideSuites(suites, hidden)
  return <section className={`section ${styles.suites()}`}>
    <div className='container'>{
      suites.map(suite => <Suite
        collapsed={collapsed}
        hidden={hidden}
        uuid={suite._uuid}
        onToggle={onToggle}
        onToggleMessage={onToggleMessage}
        pretty={pretty}
        key={`suite-${suite._uuid}`}
        name={suite.name}
        status={suite.status}
        properties={suite.properties}
        tests={suite.tests}
        suites={suite.suites}
      />
      )
    }</div>
  </section>
}

Suites.propTypes = {
  suites: PropTypes.array,
  search: PropTypes.object.isRequired,
  collapsed: PropTypes.object.isRequired,
  hidden: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onToggleMessage: PropTypes.func.isRequired,
  pretty: PropTypes.object
}

export default Suites
