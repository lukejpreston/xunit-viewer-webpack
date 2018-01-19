import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import statusStyles from '../status-styles'
import iconMap from '../icon-map'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown, faHashtag, faPlus, faMinus, faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid'

const Head = ({onStatToggle, type, name, status}) => <button className={`button is-link ${styles.statButton()}`} onClick={() => onStatToggle(type)}>
  <span>{name}</span>
  <span className={`icon ${styles.statButtonAngle(status.active)}`} >
    <FontAwesomeIcon icon={faAngleDown} />
  </span>
</button>

Head.propTypes = {
  status: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onStatToggle: PropTypes.func.isRequired
}

const Count = ({total, active}) => <div className={`tags has-addons ${styles.count()}`}>
  <span className={`tag is-medium is-info ${styles.countTag()}`}>
    <span className='icon is-small is-right'>
      <FontAwesomeIcon icon={faHashtag} />
    </span>
  </span>
  <span className={`tag is-medium is-white ${styles.countTag()} ${styles.countTagNumberTest(active)}`}>{total}</span>
</div>

Count.propTypes = {
  active: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
}

const TestCount = ({type, total, active}) => <div className={`tags has-addons ${styles.count()}`}>
  <span className={`tag is-medium ${statusStyles.static[type]()} ${styles.countTag()}`}>{iconMap[type]}</span>
  <span className={`tag is-medium is-white ${styles.countTag()} ${styles.countTagNumberTest(active)}`}>{total}</span>
</div>

TestCount.propTypes = {
  active: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

const Body = ({onSearch, onExpand, onCollapse, onShow, onHide, status, type, name, data}) => <div className={styles.statBody(status[type].active)}>
  <Search onSearch={onSearch} type={type} />
  <Toggles index={0} onExpand={onExpand} onCollapse={onCollapse} onShow={onShow} onHide={onHide} status={status} type={type} name={name} />
  {data.map((d, index) => <Toggles key={`toggle-${type}-${name}-${d.type}`} index={index + 1} onExpand={onExpand} onCollapse={onCollapse} onShow={onShow} onHide={onHide} status={status} type={type} name={name} testType={d.type} />)}
</div>

Body.propTypes = {
  status: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.array,
  type: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onExpand: PropTypes.func.isRequired,
  onCollapse: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired
}

const Search = ({onSearch, type}) => <div className={`control has-icons-right ${styles.statSearch()}`}>
  <input className='input' type='text' placeholder='Search' onChange={evt => onSearch(evt.target.value, type)} />
  <span className='icon is-small is-right'>
    <FontAwesomeIcon icon={faSearch} />
  </span>
</div>

Search.propTypes = {
  type: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired
}

const Toggles = ({index, onExpand, onCollapse, onShow, onHide, status, type, name, testType}) => <div className={styles.statBodyToggles(index)}>
  <div>
    <button className={`button ${status[testType || type].expanded === 'active' ? (testType ? statusStyles[testType]() : 'is-link') : 'is-light'} ${styles.statRadio(status[testType || type].expanded)}`} onClick={() => { onExpand({name, type: testType || type}) }}>
      <span className='icon'>
        <FontAwesomeIcon icon={faPlus} />
      </span>
    </button>
    <button className={`button ${status[testType || type].collapsed === 'active' ? (testType ? statusStyles[testType]() : 'is-link') : 'is-light'} ${styles.statRadio(status[testType || type].expanded)}`} onClick={() => { onCollapse({name, type: testType || type}) }}>
      <span className='icon'>
        <FontAwesomeIcon icon={faMinus} />
      </span>
    </button>
  </div>
  <div>
    <button className={`button ${status[testType || type].shown === 'active' ? (testType ? statusStyles[testType]() : 'is-link') : 'is-light'} ${styles.statRadio(status[testType || type].expanded)}`} onClick={() => { onShow({name, type: testType || type}) }}>
      <span className='icon'>
        <FontAwesomeIcon icon={faEye} />
      </span>
    </button>
    <button className={`button ${status[testType || type].hidden === 'active' ? (testType ? statusStyles[testType]() : 'is-link') : 'is-light'} ${styles.statRadio(status[testType || type].expanded)}`} onClick={() => { onHide({name, type: testType || type}) }}>
      <span className='icon'>
        <FontAwesomeIcon icon={faEyeSlash} />
      </span>
    </button>
  </div>
</div>

Toggles.propTypes = {
  status: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onExpand: PropTypes.func.isRequired,
  onCollapse: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  testType: PropTypes.string,
  index: PropTypes.number
}

const Stat = ({status, name, total, data = [], type, onStatToggle, onSearch, onExpand, onCollapse, onShow, onHide}) => <div className={styles.stat(status[type].active)}>
  <Head onStatToggle={onStatToggle} type={type} name={name} status={status} />
  <Count total={total} active={status[type].active} />
  {data.map(d => <TestCount key={`stat-count-${name}-${d.type}`} {...d} active={status[d.type].active} />)}
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
