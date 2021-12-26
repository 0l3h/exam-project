import React, { useState } from 'react'
import styles from './Event.module.sass'

function Event (props) {
  const { eventName } = props
  const remainingTime = Date.now()

  //   const timerStyles = {
  //     width:
  //   }

  return (
    <div className={styles.event}>
      <span className={styles.eventName}>{eventName}</span>
      <span className={styles.remainingTime}>{remainingTime}</span>
    </div>
  )
}

export default Event
