import React from 'react'; import PropTypes from 'prop-types'
import Properties from './properties'
import Test from './test'
import iconMap from '../icon-map'
import styles from './styles'
import statusStyles from '../status-styles'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/fontawesome-free-solid'

let Suite = ({
  uuid,
  name = '',
  status = 'unknown',
  properties = {},
  tests = [],
  onToggle,
  collapsed,
  hidden,
  suites = []
}) => {
  suites = suites.map(suite => {
    return <Suite
      collapsed={collapsed}
      hidden={hidden}
      uuid={suite._uuid}
      onToggle={onToggle}
      key={`suite-${suite._uuid}`}
      name={suite.name}
      status={suite.status}
      properties={suite.properties}
      tests={suite.tests}
      suites={suite.suites}
    />
  })

  let Props = null
  if (Object.keys(properties).length > 1) Props = <Properties onToggle={onToggle} collapsed={collapsed} data={properties} />

  let isCollapsed = Object.keys(collapsed).includes(uuid) ? 'collapsed' : 'expanded'

  let Content = <div className={`card-content ${styles[isCollapsed]()}`}>
    {Props}
    {suites}
    {tests.map(test =>
      <Test
        onToggle={onToggle}
        collapsed={collapsed}
        key={`test-${test._uuid}`}
        uuid={test._uuid}
        {...test}
      />
    )}
  </div>

  let Icon = <a className={`card-header-icon ${styles.cardHeaderIcon(isCollapsed)}`}>
    <span className='icon'>
      <FontAwesomeIcon icon={faAngleDown} className={styles.cardHeaderIconIcon()} />
    </span>
  </a>

  if (Object.keys(properties).length === 1 && suites.length === 0 && tests.length === 0) {
    Content = null
    Icon = null
  }

  return <div className={`card ${styles.suite()} is-${isCollapsed}`}>
    <header
      className={`card-header ${styles.cardHeader()} ${statusStyles[status]()}`}
      onClick={() => {
        onToggle({type: 'suites', uuid})
      }}
    >
      <p className='card-header-title'>
        {iconMap[status]}
        <span className={styles.cardHeaderTitleLabel()}>{name}</span>
      </p>
      {Icon}
    </header>
    {Content}
  </div>
}

Suite.propTypes = {
  uuid: PropTypes.string.isRequired,
  name: PropTypes.string,
  status: PropTypes.string,
  properties: PropTypes.object,
  tests: PropTypes.array,
  onToggle: PropTypes.func.isRequired,
  collapsed: PropTypes.object.isRequired,
  hidden: PropTypes.object.isRequired,
  suites: PropTypes.array
}

export default Suite
