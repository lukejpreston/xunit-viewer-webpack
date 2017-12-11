import React from 'react'

const Parse = () => <div className='container'>
  <div className='field'>
    <label className={`label ${styles.parseLabel()}`}>XML Value</label>
    <div className='control'>
      <textarea className='textarea' placeholder='<testsuites>' />
    </div>
  </div>
  <div className='field is-grouped'>
    <div className='control'>
      <button className='button is-link'>Parse</button>
    </div>
    <div className='control'>
      <button className='button is-white'>Clear</button>
    </div>
  </div>
</div>

export default Parse
