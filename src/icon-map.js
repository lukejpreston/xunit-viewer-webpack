import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faExclamation, faBan, faQuestion } from '@fortawesome/fontawesome-free-solid'

import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  icon: {
    height: '100%'
  }
})

let Icon = ({children}) => {
  return <i className={`icon is-small ${css(styles.icon)}`}>
    {children}
  </i>
}

export default {
  pass: <Icon ><FontAwesomeIcon icon={faCheck} /></Icon>,
  fail: <Icon ><FontAwesomeIcon icon={faTimes} /></Icon>,
  error: <Icon ><FontAwesomeIcon icon={faExclamation} /></Icon>,
  skip: <Icon ><FontAwesomeIcon icon={faBan} /></Icon>,
  unknown: <Icon ><FontAwesomeIcon icon={faQuestion} /></Icon>
}
