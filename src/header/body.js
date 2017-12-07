import React from 'react'
import PropTypes from 'prop-types'
import Stat from './stat'
import extractStats from './extract-stats'
import styles from './styles'

let Body = ({active, suites, onSearch, onStatToggle, onExpand, onCollapse, onShow, onHide, search, statsStatus}) => {
  let stats = extractStats(suites, search)
  return <div className={`hero-body ${styles.heroBody(active, stats.length)}`}>
    <div className='container'>{
      stats.map((stat, index) => {
        return <Stat
          statsStatus={statsStatus}
          onExpand={onExpand}
          onCollapse={onCollapse}
          onShow={onShow}
          onHide={onHide}
          onStatToggle={onStatToggle}
          onSearch={onSearch}
          key={`stat-${stat.type}-${index}`}
          name={stat.name}
          total={stat.total}
          type={stat.type}
          icon={stat.icon}
          data={stat.data}
        />
      })
    }
    </div>
    <div className='container'>
      <div className='field'>
        <label className={`label ${styles.parseLabel()}`}>XML Value</label>
        <div className='control'>
          <textarea className='textarea' placeholder='<testsuites>' />
        </div>
      </div>
      <div className='field is-grouped'>
        <div className='control'>
          <button className='button is-link'>Parse</button>
        </div>
        <div className='control'>
          <button className='button is-white'>Clear</button>
        </div>
      </div>
    </div>
  </div>
}

Body.propTypes = {
  active: PropTypes.string,
  suites: PropTypes.array,
  onSearch: PropTypes.func.isRequired,
  onStatToggle: PropTypes.func.isRequired,
  onExpand: PropTypes.func.isRequired,
  onCollapse: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired,
  statsStatus: PropTypes.object
}

export default Body
