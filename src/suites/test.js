import React from 'react'; import PropTypes from 'prop-types'
import styles from './styles'
import statusStyles from '../status-styles'
import iconMap from '../icon-map'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/fontawesome-free-solid'

let knownStatuses = [
  'pass',
  'fail',
  'error',
  'skip'
]

let Test = ({uuid, status, name, message, onToggle, collapsed}) => {
  let isCollapsed = Object.keys(collapsed.tests).includes(uuid) ? 'collapsed' : 'expanded'
  status = knownStatuses.includes(status) ? status : 'unknown'
  let Content = null
  let Icon = null
  if (message) {
    Content = <div
      className={`card-content ${styles[isCollapsed]()}`}
      dangerouslySetInnerHTML={{__html: message}}
    />
    Icon = <a className={`card-header-icon ${styles.cardHeaderIcon(isCollapsed)}`}>
      <span className='icon'>
        <FontAwesomeIcon icon={faAngleDown} className={styles.cardHeaderIconIcon()} />
      </span>
    </a>
  }

  return <div className={`card ${styles.test()}`}>
    <header
      className={`card-header ${styles.cardHeader()} ${statusStyles[status]()}`}
      onClick={() => {
        onToggle({
          type: 'tests',
          uuid
        })
      }}>
      <p className='card-header-title'>
        {iconMap[status]}
        <span className={styles.cardHeaderTitleLabel()}>{name}</span>
      </p>
      {Icon}
    </header>
    {Content}
  </div>
}

Test.propTypes = {
  uuid: PropTypes.string.isRequired,
  status: PropTypes.string,
  name: PropTypes.string,
  message: PropTypes.any,
  onToggle: PropTypes.func.isRequired,
  collapsed: PropTypes.object.isRequired
}

export default Test
