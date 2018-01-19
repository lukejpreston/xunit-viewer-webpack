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
    backgroundColor: colors.default,
    borderColor: colors.default,
    ':hover': {
      backgroundColor: color(colors.default).darken(0.15).toString(),
      borderColor: color(colors.default).darken(0.15).toString()
    }
  },
  fail: {
    backgroundColor: colors.fail,
    borderColor: colors.fail,
    ':hover': {
      backgroundColor: color(colors.fail).darken(0.15).toString(),
      borderColor: color(colors.fail).darken(0.15).toString()
    }
  },
  pass: {
    backgroundColor: colors.pass,
    borderColor: colors.pass,
    ':hover': {
      backgroundColor: color(colors.pass).darken(0.15).toString(),
      borderColor: color(colors.pass).darken(0.15).toString()
    }
  },
  error: {
    backgroundColor: colors.error,
    borderColor: colors.error,
    ':hover': {
      backgroundColor: color(colors.error).darken(0.15).toString(),
      borderColor: color(colors.error).darken(0.15).toString()
    }
  },
  skip: {
    backgroundColor: colors.skip,
    borderColor: colors.skip,
    ':hover': {
      backgroundColor: color(colors.skip).darken(0.15).toString(),
      borderColor: color(colors.skip).darken(0.15).toString()
    }
  },
  unknown: {
    backgroundColor: colors.unknown,
    borderColor: colors.unknown,
    ':hover': {
      backgroundColor: color(colors.unknown).darken(0.15).toString(),
      borderColor: color(colors.unknown).darken(0.15).toString()
    }
  },
  defaultStatic: {
    backgroundColor: colors.default,
    borderColor: colors.defaul
  },
  failStatic: {
    backgroundColor: colors.fail,
    borderColor: colors.fail
  },
  passStatic: {
    backgroundColor: colors.pass,
    borderColor: colors.pass
  },
  errorStatic: {
    backgroundColor: colors.error,
    borderColor: colors.error
  },
  skipStatic: {
    backgroundColor: colors.skip,
    borderColor: colors.skip
  },
  unknownStatic: {
    backgroundColor: colors.unknown,
    borderColor: colors.unknown
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
