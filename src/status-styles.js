import { StyleSheet, css } from 'aphrodite'
import color from 'color'

const colors = {
  default: '',
  fail: '#E74C3C',
  pass: '#23D160',
  error: '#FFDD57',
  skip: '#ECF0F1',
  unknown: '#3273DC'
}

const styles = StyleSheet.create({
  default: {
    'background-color': colors.default,
    ':hover': {
      'background-color': color(colors.default).darken(0.15).toString()
    }
  },
  fail: {
    'background-color': colors.fail,
    ':hover': {
      'background-color': color(colors.fail).darken(0.15).toString()
    }
  },
  pass: {
    'background-color': colors.pass,
    ':hover': {
      'background-color': color(colors.pass).darken(0.15).toString()
    }
  },
  error: {
    'background-color': colors.error,
    ':hover': {
      'background-color': color(colors.error).darken(0.15).toString()
    }
  },
  skip: {
    'background-color': colors.skip,
    ':hover': {
      'background-color': color(colors.skip).darken(0.15).toString()
    }
  },
  unknown: {
    'background-color': colors.unknown,
    ':hover': {
      'background-color': color(colors.unknown).darken(0.15).toString()
    }
  },
  defaultStatic: {
    'background-color': colors.default
  },
  failStatic: {
    'background-color': colors.fail
  },
  passStatic: {
    'background-color': colors.pass
  },
  errorStatic: {
    'background-color': colors.error
  },
  skipStatic: {
    'background-color': colors.skip
  },
  unknownStatic: {
    'background-color': colors.unknown
  }
})

export default {
  fail: () => css(styles.fail),
  pass: () => css(styles.pass),
  error: () => css(styles.error),
  skip: () => css(styles.skip),
  unknown: () => css(styles.unknown),
  default: () => css(styles.default),
  static: {
    fail: () => css(styles.failStatic),
    pass: () => css(styles.passStatic),
    error: () => css(styles.errorStatic),
    skip: () => css(styles.skipStatic),
    unknown: () => css(styles.unknownStatic),
    default: () => css(styles.defaultStatic)
  }
}
