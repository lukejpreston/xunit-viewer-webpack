import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  suites: {},
  suite: {
    'margin-bottom': 10
  },
  cardHeader: {
    ':hover': {
      cursor: 'pointer',
      color: '#666'
    }
  },
  cardHeaderIcon: {
    transition: 'transform 0.2s',
    color: '#fff'
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
  cardHeaderTitleLabel: {
    'padding-left': 5
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
  },
  message: {
    borderBottom: 'solid 1px rgba(10, 10, 10, 0.1)'
  }
})

export default {
  suites: () => css(styles.suites),
  suite: () => css(styles.suite),
  cardHeader: () => css(styles.cardHeader),
  cardHeaderIconIcon: () => css(styles.cardHeaderIconIcon),
  cardHeaderIcon: (isCollapsed) => `${css(styles.cardHeaderIcon)} ${css(styles[`cardHeaderIcon-${isCollapsed}`])}`,
  cardHeaderTitleLabel: () => css(styles.cardHeaderTitleLabel),
  test: () => css(styles.test),
  properties: () => css(styles.properties),
  propertiesTable: () => css(styles.propertiesTable),
  collapsed: () => css(styles.collapsed),
  expanded: () => css(styles.expanded),
  message: () => css(styles.message)
}
