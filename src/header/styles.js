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
  'heroBody-active-0-stats-0-xml-active': {
    height: 170
  },
  'heroBody-active-1-stats-0-xml-active': {
    height: 41 * 1 + 0 * 90 + 5 + 165
  },
  'heroBody-active-1-stats-1-xml-active': {
    height: 41 * 1 + 1 * 90 + 5 + 165
  },
  'heroBody-active-1-stats-2-xml-active': {
    height: 41 * 1 + 2 * 90 + 5 + 165
  },
  'heroBody-active-1-stats-3-xml-active': {
    height: 41 * 2 + 3 * 90 + 5 + 165
  },
  'heroBody-active-2-stats-0-xml-active': {
    height: 41 * 2 + 0 * 90 + 5 + 165
  },
  'heroBody-active-2-stats-1-xml-active': {
    height: 41 * 2 + 1 * 90 + 5 + 165
  },
  'heroBody-active-2-stats-2-xml-active': {
    height: 41 * 2 + 2 * 90 + 5 + 165
  },
  'heroBody-active-2-stats-3-xml-active': {
    height: 41 * 2 + 3 * 90 + 5 + 165
  },
  'heroBody-active-3-stats-0-xml-active': {
    height: 41 * 3 + 165
  },
  'heroBody-active-3-stats-1-xml-active': {
    height: 41 * 3 + 90 + 5 + 165
  },
  'heroBody-active-3-stats-2-xml-active': {
    height: 41 * 3 + 2 * 90 + 10 + 165
  },
  'heroBody-active-3-stats-3-xml-active': {
    height: 41 * 3 + 3 * 90 + 5 + 165
  },
  'heroBody-active-0-stats-0-xml-inactive': {
    height: 40
  },
  'heroBody-active-1-stats-0-xml-inactive': {
    height: 41 * 1 + 0 * 90 + 5 + 45
  },
  'heroBody-active-1-stats-1-xml-inactive': {
    height: 41 * 1 + 1 * 90 + 5 + 45
  },
  'heroBody-active-1-stats-2-xml-inactive': {
    height: 41 * 1 + 2 * 90 + 5 + 45
  },
  'heroBody-active-1-stats-3-xml-inactive': {
    height: 41 * 2 + 3 * 90 + 5 + 45
  },
  'heroBody-active-2-stats-0-xml-inactive': {
    height: 41 * 2 + 0 * 90 + 5 + 45
  },
  'heroBody-active-2-stats-1-xml-inactive': {
    height: 41 * 2 + 1 * 90 + 5 + 45
  },
  'heroBody-active-2-stats-2-xml-inactive': {
    height: 41 * 2 + 2 * 90 + 5 + 45
  },
  'heroBody-active-2-stats-3-xml-inactive': {
    height: 41 * 2 + 3 * 90 + 5 + 45
  },
  'heroBody-active-3-stats-0-xml-inactive': {
    height: 41 * 3 + 45
  },
  'heroBody-active-3-stats-1-xml-inactive': {
    height: 41 * 3 + 90 + 5 + 45
  },
  'heroBody-active-3-stats-2-xml-inactive': {
    height: 41 * 3 + 2 * 90 + 10 + 45
  },
  'heroBody-active-3-stats-3-xml-inactive': {
    height: 41 * 3 + 3 * 90 + 5 + 45
  },

  stat: {
    overflow: 'hidden',
    transition: 'height 0.2s'
  },
  'stat-active': {
    height: 128
  },
  'stat-inactive': {
    height: 40
  },
  statBody: {
    display: 'inline-block'
  },
  statBodyToggles: {
    display: 'inline-block',
    verticalAlign: 'top'
  },
  statButton: {
    justifyContent: 'space-between',
    width: 166,
    marginBottom: 5
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
    verticalAlign: 'top',
    display: 'inline-block',
    width: 166,
    marginBottom: 5,
    marginRight: 5
  },
  statRadio: {
    justifyContent: 'left',
    width: 122,
    marginRight: 5,
    marginBottom: 5
  },
  count: {
    display: 'inline-flex',
    marginLeft: 5,
    marginBottom: 0
  },
  countTag: {
    height: 36,
    marginBottom: 0
  },
  countTagNumber: {
    transition: 'min-width 0.1s',
    'min-width': 50
  },
  'countTagNumber-active': {
    'min-width': 221
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
  heroBody: (active, size, status, xmlActive) => {
    const activeStats = Object.keys(status).filter(key => status[key].active === 'active').length
    return `${css(styles.heroBody)} ${css(styles[`heroBody-${active}-${size}-stats-${activeStats}-xml-${xmlActive}`])}`
  },
  stat: (active) => `${css(styles.stat)} ${css(styles[`stat-${active}`])}`,
  statBody: () => css(styles.statBody),
  statBodyToggles: (index) => `${css(styles.statBodyToggles)} ${css(styles[`statBodyToggles-${index}`])}`,
  statButton: () => css(styles.statButton),
  statButtonAngle: (active) => css(styles[`statButton-${active}`]),
  statSearch: () => css(styles.statSearch),
  statRadio: () => css(styles.statRadio),
  count: () => css(styles.count),
  countTag: () => css(styles.countTag),
  countTagNumber: () => css(styles.countTagNumber),
  countTagNumberTest: active => `${css(styles.countTagNumber)} ${css(styles[`countTagNumber-${active}`])}`
}
