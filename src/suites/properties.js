import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import statusStyles from '../status-styles'
import AngleDown from '../icons/angle-down'

let Row = ({name, value}) => {
  return <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
}

Row.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string
}

let Properties = ({data = {}, onToggle, collapsed}) => {
  let isCollapsed = Object.keys(collapsed.properties).includes(data._uuid) ? 'collapsed' : 'expanded'
  return <div className={`card ${styles.properties()}`}>
    <header
      className={`card-header ${styles.cardHeader()} ${statusStyles.skip()}`}
      onClick={() => {
        onToggle({
          type: 'properties',
          uuid: data._uuid
        })
      }}>
      <p className='card-header-title'>Properties</p>
      <a className={`card-header-icon ${styles.cardHeaderIcon(isCollapsed)}`}>
        <span className='icon'>
          <AngleDown className={styles.cardHeaderIconIcon()} />
        </span>
      </a>
    </header>
    <div className={`card-content ${styles[isCollapsed]()}`}>
      <table className={`table is-fullwidth ${styles.propertiesTable()}`}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{
          Object.keys(data)
            .filter(key => key !== '_uuid')
            .map((key, index) => <Row
              key={`properties-${key}-${index}`}
              name={key}
              value={data[key]}
            />
            )
        }</tbody>

      </table>
    </div>
  </div>
}

Properties.propTypes = {
  data: PropTypes.object,
  onToggle: PropTypes.func.isRequired,
  collapsed: PropTypes.object.isRequired
}

export default Properties
