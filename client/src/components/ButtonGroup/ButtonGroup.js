import React from 'react'
import styles from './ButtonGroup.module.sass'

function ButtonGroup () {
  return (
    <div className={styles.buttonGroup}>
      <label htmlFor='1' className={styles.button}>
        <input name='option' type='radio' id='1' />

        <div>
          <span>Yes</span>
          <p>The Domain should exactly match the name</p>
        </div>
      </label>

      <label htmlFor='2' className={styles.button}>
        <input name='option' type='radio' id='2' defaultChecked={true} />

        <div>
          <span>Yes</span>
          <p>But minor variations are allowed (Recommended)</p>
        </div>
      </label>

      <label htmlFor='3' className={styles.button}>
        <input name='option' type='radio' id='3' />

        <div>
          <span>No</span>
          <p>I am only looking for a name, not a Domain</p>
        </div>
      </label>
    </div>
  )
}

export default ButtonGroup
