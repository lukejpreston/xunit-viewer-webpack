import React from 'react'
import PropTypes from 'prop-types'
import Stat from './stat'
import XmlInput from './xml-input'
import extractStats from './extract-stats'
import styles from './styles'

let Body = ({active, suites, onStatToggle, onSearch, onExpand, onCollapse, onShow, onHide, search, statsStatus, onXmlInput, xml, xmlActive}) => {
  let stats = extractStats(suites, search)

  return <div className={`hero-body ${styles.heroBody(active, stats.length, statsStatus, xmlActive)}`}>
    <div className='container'>
      {stats.map(stat => <Stat
        key={`stat-${stat.name}`}
        status={statsStatus[stat.type]}
        onStatToggle={onStatToggle}
        onExpand={onExpand}
        onCollapse={onCollapse}
        onShow={onShow}
        onHide={onHide}
        onSearch={onSearch}
        name={stat.name}
        total={stat.total}
        type={stat.type}
        icon={stat.icon}
        data={stat.data}
      />)}
      <XmlInput onXmlInput={onXmlInput} xml={xml} active={xmlActive} />
    </div>
  </div>
}

Body.propTypes = {
  active: PropTypes.string,
  suites: PropTypes.array,
  onStatToggle: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onExpand: PropTypes.func.isRequired,
  onCollapse: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired,
  statsStatus: PropTypes.object.isRequired,
  onXmlInput: PropTypes.func.isRequired,
  xml: PropTypes.string,
  xmlActive: PropTypes.string
}

export default Body
