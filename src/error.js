import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

class Error extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stack: 'inactive',
      message: 'active'
    }
  }
  showStack () {
    this.setState({
      stack: 'active',
      message: 'inactive'
    })
  }
  hideStack () {
    this.setState({
      stack: 'inactive',
      message: 'active'
    })
  }
  render () {
    return <section className='section'>
      <div className='container'>
        <div className='content'>
          <div className='notification is-danger'>
            <p className='has-text-centered is-size-5 has-text-weight-bold'>There was an error parsing your results</p>
          </div>
          <h4>Error</h4>
          <pre className={css(styles[`error-is-${this.state.message}`])}>
            <button className={`${css(styles.button)} button is-info is-fullwidth`} onClick={() => this.showStack()}>Show Stack</button>
            {this.props.err.message || 'Unkown Error'}
          </pre>
          <pre className={css(styles[`error-is-${this.state.stack}`])}>
            <button className={`${css(styles.button)} button is-info is-fullwidth`} onClick={() => this.hideStack()}>Hide Stack</button>
            {this.props.err.stack || 'Unkown Error'}
          </pre>
          <h4>Input</h4>
          <pre>{this.props.xml || 'No Input'}</pre>
        </div>
      </div>
    </section>
  }
}

Error.propTypes = {
  err: PropTypes.object,
  xml: PropTypes.string
}

const styles = StyleSheet.create({
  'error-is-inactive': {
    display: 'none'
  },
  'error-is-active': {
    display: 'block'
  },
  button: {
    marginBottom: 10
  }
})

export default Error
