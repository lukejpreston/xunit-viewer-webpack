import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Icon from './icon'
import { toLaxTitleCase } from 'titlecase'
import styles from './styles'

class Burger extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: 'no-hover'
    }
  }
  mouseOver () { this.setState({hover: 'hover'}) }
  mouseLeave () { this.setState({hover: 'no-hover'}) }
  render () {
    return <button
      className={styles.heroBurger(this.props.active)}
      onClick={this.props.onToggle}
      onMouseOver={() => this.mouseOver()}
      onMouseLeave={() => this.mouseLeave()}>
      <span className={styles.heroBurgerTop(this.props.active, this.state.hover)} />
      <span className={styles.heroBurgerMiddle(this.props.active, this.state.hover)} />
      <span className={styles.heroBurgerBottom(this.props.active, this.state.hover)} />
    </button>
  }
}

Burger.propTypes = {
  active: PropTypes.string,
  onToggle: PropTypes.func
}

let Head = ({title = 'Xunit Viewer', active, onToggle}) => {
  title = toLaxTitleCase(title)
  return <div className={`hero-head ${styles.heroHead()}`}>
    <div className='container'>
      <div className='level is-mobile'>
        <div className='level-left'>
          <div className='level-item'>
            <Burger active={active} onToggle={onToggle} />
          </div>
        </div>
        <div className='level-item'>
          <Icon className={styles.heroIcon()} />
          <h1 className={`title ${styles.heroTitle()}`}>{title}</h1>
        </div>
      </div>
    </div>
  </div>
}

Head.propTypes = {
  title: PropTypes.string,
  active: PropTypes.string,
  onToggle: PropTypes.func
}

export default Head
