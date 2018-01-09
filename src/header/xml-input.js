import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

const XmlInput = ({onXmlChange, xml}) => <div className='field'>
  <label className='label has-text-white'>XML Test Suites</label>
  <div className='control'>
    <textarea
      onChange={onXmlChange}
      className={`${styles.xmlInput()} textarea`}
      placeholder='<testsuites></testsuites>'
      defaultValue={xml} />
  </div>
</div>

XmlInput.propTypes = {
  onXmlChange: PropTypes.func.isRequired,
  xml: PropTypes.string
}

export default XmlInput
