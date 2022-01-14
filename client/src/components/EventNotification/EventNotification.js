import React from 'react'
import styles from './EventNotification.module.sass'

function EventNotification () {
  return (
    <div className={styles.notification}>
      <span>Some of your events has been outdated</span>
    </div>
  )
}

export default EventNotification
