import { StyleSheet, css } from 'aphrodite'
import color from 'color'

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
    padding: 0,
    height: 0,
    overflow: 'hidden',
    transition: 'height 0.2s'
  },
  'heroBody-active-1-stats-0': {
    height: 41 * 1 + 0 * 130 + 5
  },
  'heroBody-active-1-stats-1': {
    height: 41 * 1 + 1 * 130 + 5
  },
  'heroBody-active-1-stats-2': {
    height: 41 * 1 + 2 * 130 + 5
  },
  'heroBody-active-1-stats-3': {
    height: 41 * 2 + 3 * 130 + 5
  },
  'heroBody-active-2-stats-0': {
    height: 41 * 2 + 0 * 130 + 5
  },
  'heroBody-active-2-stats-1': {
    height: 41 * 2 + 1 * 130 + 5
  },
  'heroBody-active-2-stats-2': {
    height: 41 * 2 + 2 * 130 + 5
  },
  'heroBody-active-2-stats-3': {
    height: 41 * 2 + 3 * 130 + 5
  },
  'heroBody-active-3-stats-0': {
    height: 41 * 3
  },
  'heroBody-active-3-stats-1': {
    height: 41 * 3 + 130 + 5
  },
  'heroBody-active-3-stats-2': {
    height: 41 * 3 + 2 * 130 + 10
  },
  'heroBody-active-3-stats-3': {
    height: 41 * 3 + 3 * 130 + 5
  },
  statBody: {
    overflow: 'hidden',
    transition: 'height 0.2s'
  },
  'statBody-active': {
    height: 135
  },
  'statBody-inactive': {
    height: 0
  },
  statButton: {
    'justify-content': 'space-between',
    width: 250,
    'margin-bottom': 5
  },
  'statButton-active': {
    transition: 'transform 0.2s',
    transform: 'rotate(0deg)'
  },
  'statButton-inactive': {
    transition: 'transform 0.2s',
    transform: 'rotate(-180deg)'
  },
  statSearch: {
    width: 250,
    'margin-bottom': 5
  },
  statRadio: {
    'justify-content': 'left',
    width: 122,
    'margin-right': 5,
    'margin-bottom': 5
  },
  count: {
    display: 'inline-flex',
    'margin-left': 5,
    'margin-bottom': 0
  },
  countTag: {
    height: 36,
    'margin-bottom': 0
  },
  countTagNumber: {
    'min-width': 50
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
  heroBody: (active, size, status) => {
    const activeStats = Object.keys(status).filter(key => status[key].active === 'active').length
    return `${css(styles.heroBody)} ${css(styles[`heroBody-${active}-${size}-stats-${activeStats}`])}`
  },
  statBody: (active) => `${css(styles.statBody)} ${css(styles[`statBody-${active}`])}`,
  statButton: () => css(styles.statButton),
  statButtonAngle: (active) => css(styles[`statButton-${active}`]),
  statSearch: () => css(styles.statSearch),
  statRadio: () => css(styles.statRadio),
  count: () => css(styles.count),
  countTag: () => css(styles.countTag),
  countTagNumber: () => css(styles.countTagNumber)
}
