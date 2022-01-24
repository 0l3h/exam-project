import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import styles from './OutdatedEvents.module.sass'

function OutdatedEvents () {
  const outdatedEvents = useSelector(
    ({ eventsStore: { outdatedEvents } }) => outdatedEvents
  )

  useEffect(() => {
    localStorage.setItem('outdatedEvents', JSON.stringify(outdatedEvents))

    return () => {
      localStorage.clear()
    }
  }, [outdatedEvents])

  return (
    <div className={styles.outdatedEvents}>
      <h1>Outdated events</h1>
      <hr />
      <div className={styles.list}>
        {outdatedEvents.length === 0 ? (
          <div className={styles.emptyListSign}>
            <span>Empty</span>
          </div>
        ) : (
          outdatedEvents.map(event => (
            <div className={styles.event} key={uuidv4()}>
              <p>{event.eventName}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default OutdatedEvents
