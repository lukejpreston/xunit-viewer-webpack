import React from 'react'
import Check from './icons/check'
import Times from './icons/times'
import Exclamation from './icons/exclamation'
import Ban from './icons/ban'
import Question from './icons/question'

import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  icon: {
    height: '100%'
  }
})

let Icon = ({children}) => {
  return <i className='icon is-small'>
    {children}
  </i>
}

export default {
  pass: <Icon ><Check className={css(styles.icon)} /></Icon>,
  fail: <Icon ><Times className={css(styles.icon)} /></Icon>,
  error: <Icon ><Exclamation className={css(styles.icon)} /></Icon>,
  skip: <Icon ><Ban className={css(styles.icon)} /></Icon>,
  unknown: <Icon ><Question className={css(styles.icon)} /></Icon>
}
