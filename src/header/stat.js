import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Search from '../icons/search'
import styles from './styles'
import statusStyles from '../status-styles'

const Options = ({type, total, icon, onCollapse, onExpand, onHide, onShow}) => <div className='control'>
  <Total type={type} label={icon} total={total} />
  <SelectVisible onCollapse={onCollapse} onExpand={onExpand} />
  <SelectDisplay onHide={onHide} onShow={onShow} />
</div>

const Total = ({type, label, total}) => <div className={`tags has-addons ${styles.statTotal()}`}>
  <span className={`tag ${statusStyles.static[type]()} ${styles.statTotalTag()}`}>{label}</span>
  <span className={`tag is-info ${styles.statTotalTag()}`}>{total}</span>
</div>

const SelectDisplay = ({onHide, onShow}) => <div className={`select is-small ${styles.statSelect()}`}>
  <select onChange={evt => {
    switch (evt.target.value) {
      case 'show':
        return onShow()
      case 'hide':
        return onHide()
    }
  }}>
    <option value='show'>Shown</option>
    <option value='hide'>Hidden</option>
  </select>
</div>

const SelectVisible = ({onCollapse, onExpand}) => <div className={`select is-small ${styles.statSelect()}`}>
  <select onChange={evt => {
    switch (evt.target.value) {
      case 'expand':
        return onExpand()
      case 'collapse':
        return onCollapse()
    }
  }}>
    <option value='expand'>Expanded</option>
    <option value='collapse'>Collapsed</option>
  </select>
</div>

const SearchInput = ({onSearch, type}) => <div className='control has-icons-right'>
  <input className='input is-small' type='text' placeholder='Search' onChange={evt => onSearch(evt.target.value, type)} />
  <span className='icon is-medium is-right'>
    <Search className={styles.statSearchIcon()} />
  </span>
</div>

class Stat extends Component {
  componentDidMount () {
    const el = document.getElementById(`stat-${this.props.name}`)
    console.log(el.scrollWidth, el.clientWidth)
  }
  componentDidUpdate () {
    const el = document.getElementById(`stat-${this.props.name}`)
    console.log(el)
  }
  render () {
    return <div id={`stat-${this.props.name}`} className={`field is-grouped ${styles.stat()}`}>
      <div className='control'>
        <button className={`button is-link is-small ${styles.statLabel()}`}>{this.props.name}</button>
      </div>
      <SearchInput onSearch={this.props.onSearch} type={this.props.type} />
      <Options
        icon='Total'
        total={this.props.total}
        type='default'
        onCollapse={() => this.props.onCollapse({name: this.props.name, type: this.props.type})}
        onExpand={() => this.props.onExpand({name: this.props.name, type: this.props.type})}
        onHide={() => this.props.onHide({name: this.props.name, type: this.props.type})}
        onShow={() => this.props.onShow({name: this.props.name, type: this.props.type})}
      />
      {this.props.data.map(d => <Options
        {...d}
        onCollapse={() => this.props.onCollapse({name: this.props.name, type: d.type})}
        onExpand={() => this.props.onExpand({name: this.props.name, type: d.type})}
        onHide={() => this.props.onHide({name: this.props.name, type: d.type})}
        onShow={() => this.props.onShow({name: this.props.name, type: d.type})}
      />)}
    </div>
  }
}

Stat.defaultProps = {
  data: []
}

export default Stat

// onCollapse
// onExpand
// onHide
// onShow
