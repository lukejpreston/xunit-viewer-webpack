import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import statusStyles from '../status-styles'
import iconMap from '../icon-map'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown, faHashtag } from '@fortawesome/fontawesome-free-solid'
import { faDotCircle, faCircle } from '@fortawesome/fontawesome-free-regular'

const Head = ({onStatToggle, type, name, status}) => <button className={`button is-link ${styles.statButton()}`} onClick={() => onStatToggle(type)}>
  <span>{name}</span>
  <span className={`icon ${styles.statButtonAngle(status.active)}`} >
    <FontAwesomeIcon icon={faAngleDown} />
  </span>
</button>

const Count = ({total}) => <div className={`tags has-addons ${styles.count()}`}>
  <span className={`tag is-medium is-info ${styles.countTag()}`}>
    <span className='icon is-small is-right'>
      <FontAwesomeIcon icon={faHashtag} />
    </span>
  </span>
  <span className={`tag is-medium is-white ${styles.countTag()} ${styles.countTagNumber()}`}>{total}</span>
</div>

const TestCount = ({type, total, active}) => <div className={`tags has-addons ${styles.count()}`}>
  <span className={`tag is-medium ${statusStyles.static[type]()} ${styles.countTag()}`}>{iconMap[type]}</span>
  <span className={`tag is-medium is-white ${styles.countTag()} ${styles.countTagNumberTest(active)}`}>{total}</span>
</div>

const Body = ({onSearch, onExpand, onCollapse, onShow, onHide, status, type, name, data}) => <div className={styles.statBody(status.active)}>
  <Search onSearch={onSearch} type={type} />
  <Toggles index={0} onExpand={onExpand} onCollapse={onCollapse} onShow={onShow} onHide={onHide} status={status} type={type} name={name} />
  {data.map((d, index) => <Toggles index={index + 1} onExpand={onExpand} onCollapse={onCollapse} onShow={onShow} onHide={onHide} status={status} type={type} name={name} />)}
</div>

const Search = ({onSearch, type}) => <div className={`control has-icons-right ${styles.statSearch()}`}>
  <input className='input' type='text' placeholder='Search' onChange={evt => onSearch(evt.target.value, type)} />
  <span className='icon is-small is-right'>
    <FontAwesomeIcon icon={faSearch} />
  </span>
</div>

const Toggles = ({index, onExpand, onCollapse, onShow, onHide, status, type, name}) => <div className={styles.statBodyToggles(index)}>
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

const Stat = ({status, name, total, data = [], type, onStatToggle, onSearch, onExpand, onCollapse, onShow, onHide, xmlActive}) => <div className={styles.stat(status.active)}>
  <Head onStatToggle={onStatToggle} type={type} name={name} status={status} />
  <Count total={total} />
  {data.map(d => <TestCount key={`stat-count-${name}-${d.type}`} {...d} active={status.active} />)}
  <div>
    <Body onSearch={onSearch} onExpand={onExpand} onCollapse={onCollapse} onShow={onShow} onHide={onHide} status={status} type={type} name={name} data={data} />
  </div>
</div>

Stat.propTypes = {
  status: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
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
