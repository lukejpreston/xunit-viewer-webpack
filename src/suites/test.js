import React from 'react'; import PropTypes from 'prop-types'
import styles from './styles'
import statusStyles from '../status-styles'
import iconMap from '../icon-map'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/fontawesome-free-solid'
import { faDotCircle, faCircle } from '@fortawesome/fontawesome-free-regular'

let knownStatuses = [
  'pass',
  'fail',
  'error',
  'skip'
]

let Test = ({uuid, status, name, messages, onToggle, collapsed, onToggleMessage, pretty}) => {
  let isCollapsed = Object.keys(collapsed).includes(uuid) ? 'collapsed' : 'expanded'
  status = knownStatuses.includes(status) ? status : 'unknown'
  let Content = null
  let Icon = null
  Content = messages.map((message, index) => pretty ? <div
    key={`test-message-${uuid}-${index}`}
    className={`card-content ${styles.message()} ${styles[isCollapsed]()}`}
    dangerouslySetInnerHTML={{__html: message}}
  /> : <div
    key={`test-message-${uuid}-${index}`}
    className={`card-content ${styles.message()} ${styles[isCollapsed]()}`}>
    <code>{message}</code>
  </div>)
  Icon = <a className={`card-header-icon ${styles.cardHeaderIcon(isCollapsed)}`}>
    <span className='icon'>
      <FontAwesomeIcon icon={faAngleDown} className={styles.cardHeaderIconIcon()} />
    </span>
  </a>

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
    <div>
      <button className={`button is-${!pretty ? 'link' : ''} ${styles.toggle()} ${styles[isCollapsed]()}`} onClick={() => onToggleMessage({ message: 'raw', uuid })}>
        <span className='icon'>
          <FontAwesomeIcon icon={!pretty ? faDotCircle : faCircle} />
        </span>
        <span>Raw</span>
      </button>
      <button className={`button is-${pretty ? 'link' : ''} ${styles.toggle()} ${styles[isCollapsed]()}`} onClick={() => onToggleMessage({ message: 'pretty', uuid })}>
        <span className='icon'>
          <FontAwesomeIcon icon={pretty ? faDotCircle : faCircle} />
        </span>
        <span>Pretty</span>
      </button>
    </div>
    {Content}
  </div>
}

Test.propTypes = {
  uuid: PropTypes.string.isRequired,
  status: PropTypes.string,
  name: PropTypes.string,
  messages: PropTypes.array,
  onToggle: PropTypes.func.isRequired,
  collapsed: PropTypes.object.isRequired,
  onToggleMessage: PropTypes.func.isRequired,
  pretty: PropTypes.bool
}

export default Test
