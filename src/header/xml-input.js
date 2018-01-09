import React from 'react'
import styles from './styles'

const XmlInput = ({onXmlInputChange, xml}) => <div className='field'>
  <label className='label has-text-white'>XML Test Suites</label>
  <div className='control'>
    <textarea
      onChange={onXmlInputChange}
      className={`${styles.xmlInput()} textarea`}
      placeholder='<testsuites></testsuites>'
      defaultValue={xml} />
  </div>
</div>

export default XmlInput
