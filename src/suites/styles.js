import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  suites: {},
  suite: {
    'margin-bottom': 10
  },
  cardHeader: {
    ':hover': {
      cursor: 'pointer',
      color: '#666',
      transition: 'background-color 0.2s'
    }
  },
  cardHeaderIcon: {
    transition: 'transform 0.2s',
    color: '#666'
  },
  'cardHeaderIcon-collapsed': {
    transform: 'rotate(-180deg)'
  },
  'cardHeaderIcon-expanded': {
    transform: 'rotate(0deg)'
  },
  cardHeaderIconIcon: {
    height: '100%'
  },
  test: {
    'margin-bottom': 10
  },
  properties: {
    'margin-bottom': 10
  },
  propertiesTable: {
    margin: 0
  },
  collapsed: {
    display: 'none'
  },
  expanded: {
    display: 'block'
  }
})

export default {
  suites: () => css(styles.suites),
  suite: () => css(styles.suite),
  cardHeader: () => css(styles.cardHeader),
  cardHeaderIconIcon: () => css(styles.cardHeaderIconIcon),
  cardHeaderIcon: (isCollapsed) => `${css(styles.cardHeaderIcon)} ${css(styles[`cardHeaderIcon-${isCollapsed}`])}`,
  test: () => css(styles.test),
  properties: () => css(styles.properties),
  propertiesTable: () => css(styles.propertiesTable),
  collapsed: () => css(styles.collapsed),
  expanded: () => css(styles.expanded)
}
