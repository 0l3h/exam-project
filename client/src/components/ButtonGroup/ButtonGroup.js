import React from 'react'
import styles from './ButtonGroup.module.sass'

function ButtonGroup () {
  return (
    <div className={styles.buttonGroup}>
      <div>
        <span>Yes</span>
        <p>The Domain should exactly match the name</p>
      </div>
      <div>
        <span>Yes</span>
        <p>But minor variations are allowed (Recommended)</p>
      </div>
      <div>
        <span>No</span>
        <p>I am only looking for a name, not a Domain</p>
      </div>
    </div>
  )
}

export default ButtonGroup
