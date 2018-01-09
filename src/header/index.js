import React from 'react'
import PropTypes from 'prop-types'
import Head from './head'
import Body from './body'
import styles from './styles'

let Header = ({suites = [], title, onToggle, onStatToggle, onExpand, onCollapse, onShow, onHide, onSearch, isActive, search, statsStatus, onXmlInputChange, xml}) => {
  let active = isActive ? 'active' : 'inactive'
  return <section className={`hero ${styles.hero()}`}>
    <Head
      title={title}
      active={active}
      onToggle={onToggle} />
    <Body
      onStatToggle={onStatToggle}
      statsStatus={statsStatus}
      suites={suites}
      active={active}
      onSearch={onSearch}
      onExpand={onExpand}
      onCollapse={onCollapse}
      onShow={onShow}
      onHide={onHide}
      search={search}
      onXmlInputChange={onXmlInputChange}
      xml={xml} />
  </section>
}

Header.propTypes = {
  suites: PropTypes.array,
  title: PropTypes.string,
  isActive: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  onStatToggle: PropTypes.func.isRequired,
  onExpand: PropTypes.func.isRequired,
  onCollapse: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired,
  statsStatus: PropTypes.object
}

export default Header
