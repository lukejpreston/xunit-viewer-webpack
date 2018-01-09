import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import statusStyles from '../status-styles'
import iconMap from '../icon-map'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown, faHashtag } from '@fortawesome/fontawesome-free-solid'
import { faDotCircle, faCircle } from '@fortawesome/fontawesome-free-regular'

const Stat = ({status, name, total, data = [], type, onStatToggle, onSearch, onExpand, onCollapse, onShow, onHide}) => {
  return <div>
    <div>
      <button className={`button is-link ${styles.statButton()}`} onClick={() => onStatToggle(type)}>
        <span>{name}</span>
        <span className={`icon ${styles.statButtonAngle(status.active)}`} >
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </button>
      <div className={`tags has-addons ${styles.count()}`}>
        <span className={`tag is-medium is-info ${styles.countTag()}`}>
          <span className='icon is-small is-right'>
            <FontAwesomeIcon icon={faHashtag} />
          </span>
        </span>
        <span className={`tag is-medium is-white ${styles.countTag()} ${styles.countTagNumber()}`}>{total}</span>
      </div>
      {data.map(d => <div key={`stat-count-${name}-${d.type}`}className={`tags has-addons ${styles.count()}`}>
        <span className={`tag is-medium ${statusStyles.static[d.type]()} ${styles.countTag()}`}>{iconMap[d.type]}</span>
        <span className={`tag is-medium is-white ${styles.countTag()} ${styles.countTagNumber()}`}>{d.total}</span>
      </div>)}
    </div>
    <div className={styles.statBody(status.active)}>
      <div className={`control has-icons-right ${styles.statSearch()}`}>
        <input className='input' type='text' placeholder='Search' onChange={evt => onSearch(evt.target.value, type)} />
        <span className='icon is-small is-right'>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
      <div>
        <button className={`button ${status.expanded === 'active' ? 'is-link' : 'is-light'} ${styles.statRadio(status.expanded)}`} onClick={() => { onExpand({name, type}) }}>
          <span className='icon'>
            <FontAwesomeIcon icon={status.expanded === 'active' ? faDotCircle : faCircle} />
          </span>
          <span>Expanded</span>
        </button>
        <button className={`button ${status.collapsed === 'active' ? 'is-link' : 'is-light'} ${styles.statRadio(status.expanded)}`} onClick={() => { onCollapse({name, type}) }}>
          <span className='icon'>
            <FontAwesomeIcon icon={status.collapsed === 'active' ? faDotCircle : faCircle} />
          </span>
          <span>Collapsed</span>
        </button>
      </div>
      <div>
        <button className={`button ${status.shown === 'active' ? 'is-link' : 'is-light'} ${styles.statRadio(status.expanded)}`} onClick={() => { onShow({name, type}) }}>
          <span className='icon'>
            <FontAwesomeIcon icon={status.shown === 'active' ? faDotCircle : faCircle} />
          </span>
          <span>Shown</span>
        </button>
        <button className={`button ${status.hidden === 'active' ? 'is-link' : 'is-light'} ${styles.statRadio(status.expanded)}`} onClick={() => { onHide({name, type}) }}>
          <span className='icon'>
            <FontAwesomeIcon icon={status.hidden === 'active' ? faDotCircle : faCircle} />
          </span>
          <span>Hidden</span>
        </button>
      </div>
    </div>
  </div>
}

Stat.propTypes = {
  status: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  data: PropTypes.array,
  type: PropTypes.string.isRequired,
  onStatToggle: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onExpand: PropTypes.func.isRequired,
  onCollapse: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired
}

export default Stat
