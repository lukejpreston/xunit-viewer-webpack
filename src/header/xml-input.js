import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/fontawesome-free-solid'

const XmlInput = ({active, xml, onXmlInput}) => <div>
  <button className={`button is-link ${styles.statButton()}`} onClick={() => onXmlInput()}>
    <span>XML Test Suites</span>
    <span className={`icon ${styles.statButtonAngle(active)}`} >
      <FontAwesomeIcon icon={faAngleDown} />
    </span>
  </button>
  <textarea defaultValue={xml} id='xml' ref={textArea => { this.textArea = textArea }} />
</div>

XmlInput.propTypes = {
  onXmlInput: PropTypes.func.isRequired,
  xml: PropTypes.string,
  active: PropTypes.string.isRequired
}

export default XmlInput
