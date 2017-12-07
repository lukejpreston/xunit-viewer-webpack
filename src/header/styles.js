import { StyleSheet, css } from 'aphrodite'
import color from 'color'
import statusStyle from '../status-styles'

const heroBase = '#2C3E50'

const styles = StyleSheet.create({
  hero: {
    'background-image': `linear-gradient(141deg, ${heroBase} 0%, ${color(heroBase).darken(0.2).toString()} 71%, ${color(heroBase).darken(0.6).toString()} 100%)`
  },
  heroHead: {
    height: 49,
    margin: '10px 0'
  },
  heroTitle: {
    'display': 'inline-block',
    'vertical-align': 'middle',
    color: '#fff',
    padding: '0 20px',
    margin: 0
  },
  heroIcon: {
    'display': 'inline-block',
    'vertical-align': 'middle'
  },
  heroBurger: {
    border: 0,
    width: 56,
    position: 'relative',
    height: 46,
    'background-color': 'transparent',
    transition: 'background-color 0.2s',
    ':hover': {
      cursor: 'pointer',
      'background-color': color(heroBase).darken(0.4).toString()
    }
  },
  heroBurgerLine: {
    top: 0,
    position: 'absolute',
    border: 'solid 1px #fff',
    width: 4 * 7,
    left: 2 * 7,
    transition: 'all 0.2s',
    ':before': {
      content: ' '
    }
  },
  heroBurgerTop: {
    'margin-top': 7 + 7 + 1
  },
  'heroBurgerTop-hover': {
    width: 2 * 7 + 7,
    transform: 'rotate(45deg)',
    'margin-top': 2 * 7 + 7 + 1,
    left: 2 * 7 - 5
  },
  'heroBurgerTop-active-hover': {
    transform: 'rotate(45deg)'
  },
  'heroBurgerTop-inactive-hover': {
    transform: 'rotate(-45deg)'
  },
  'heroBurgerTop-inactive': {
    transform: 'rotate(-45deg)',
    'margin-top': 22
  },
  heroBurgerMiddle: {
    'margin-top': 2 * 7 + 7 + 1
  },
  'heroBurgerMiddle-hover': {
    width: 2 * 7 + 7,
    transform: 'rotate(-45deg)',
    left: 4 * 7 - 5
  },
  'heroBurgerMiddle-active-hover': {
    transform: 'rotate(-45deg)'
  },
  'heroBurgerMiddle-inactive-hover': {
    transform: 'rotate(45deg)'
  },
  'heroBurgerMiddle-inactive': {
    transform: 'rotate(45deg)',
    'margin-top': 22
  },
  heroBurgerBottom: {
    'margin-top': 3 * 7 + 7 + 1,
    display: 'block'
  },
  'heroBurgerBottom-hover': {
    display: 'none'
  },
  'heroBurgerBottom-inactive': {
    display: 'none'
  },
  heroBody: {
    transition: 'all 0.2s',
    overflow: 'hidden',
    height: 0,
    padding: '0 10px',
    'margin': 0
  },
  'heroBody-active': {
    'margin': '10px 0'
  },
  'heroBody-active-0': {
    height: 200
  },
  'heroBody-active-1': {
    height: 245
  },
  'heroBody-active-2': {
    height: 302
  },
  'heroBody-active-3': {
    height: 360
  },
  stat: {
    height: 0,
    'overflow-x': 'auto',
    'overflow-y': 'hidden',
    'padding-bottom': 45
  },
  statLabel: {
    width: 80,
    color: '#fff'
  },
  statSearchIcon: {
    height: '50%',
    fill: '#dbdbdb'
  },
  statTotal: {
    display: 'inline-flex',
    'margin-right': 2
  },
  statTotalTag: {
    height: 28,
    'min-width': 40
  },
  statSelect: {
    display: 'inline-flex',
    'margin-right': 2
  },
  parseLabel: {
    color: '#fff'
  }
})

export default {
  hero: () => css(styles.hero),
  heroHead: () => css(styles.heroHead),
  heroTitle: () => css(styles.heroTitle),
  heroIcon: () => css(styles.heroIcon),
  heroBurger: (active) => `${css(styles.heroBurger)}`,
  heroBurgerTop: (active, hover) => `${css(styles.heroBurgerLine)} ${css(styles.heroBurgerTop)} ${css(styles[`heroBurgerTop-${active}`])} ${css(styles[`heroBurgerTop-${hover}`])} ${css(styles[`heroBurgerTop-${active}-${hover}`])}`,
  heroBurgerMiddle: (active, hover) => `${css(styles.heroBurgerLine)} ${css(styles.heroBurgerMiddle)} ${css(styles[`heroBurgerMiddle-${active}`])} ${css(styles[`heroBurgerMiddle-${hover}`])} ${css(styles[`heroBurgerMiddle-${active}-${hover}`])}`,
  heroBurgerBottom: (active, hover) => `${css(styles.heroBurgerLine)} ${css(styles.heroBurgerBottom)} ${css(styles[`heroBurgerBottom-${active}`])} ${css(styles[`heroBurgerBottom-${hover}`])}`,
  heroBody: (active, size) => `${css(styles.heroBody)} ${css(styles[`heroBody-${active}`])} ${css(styles[`heroBody-${active}-${size}`])}`,
  stat: () => css(styles.stat),
  statLabel: () => css(styles.statLabel),
  statSearchIcon: () => css(styles.statSearchIcon),
  statTotal: () => css(styles.statTotal),
  statTotalTag: () => css(styles.statTotalTag),
  statSelect: () => css(styles.statSelect),
  parseLabel: () => css(styles.parseLabel)
}
