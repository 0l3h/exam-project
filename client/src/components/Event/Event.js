import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  addSeconds,
  formatDuration,
  intervalToDuration,
  getSeconds
} from 'date-fns'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'
import { addOutdatedEvent, deleteEvent } from './../../actions/actionCreator'
import EventNotification from '../EventNotification/EventNotification'
import styles from './Event.module.sass'

function Event (props) {
  const { id, eventName, eventDate, timeAmount, remindTime } = props
  const [currentTime, setCurrentTime] = useState(Date.now())
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(currentTime => new Date(addSeconds(currentTime, 1)))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    console.log(getSeconds(remindTime), getSeconds(eventDate - currentTime))
    if (eventDate - currentTime <= 0) {
      dispatch(deleteEvent({ id }))
      dispatch(addOutdatedEvent({ id, eventName }))
      eventOutdatedAlert()
    }
  }, [currentTime])

  const eventOutdatedAlert = () => {
    toast.error(<EventNotification />, {
      position: toast.POSITION.TOP_CENTER
    })
  }

  const eventReminderAlert = () => {
    toast.warn(<div>It's time for {eventName}</div>, {
      position: toast.POSITION.TOP_CENTER
    })
  }

  if (getSeconds(remindTime) === getSeconds(eventDate - currentTime)) {
    eventReminderAlert()
  }

  const timerStyles = {
    width: `${(100 * (timeAmount - (eventDate - currentTime))) / timeAmount}%`
  }

  const duration = intervalToDuration({
    start: currentTime,
    end: eventDate
  })

  return (
    <div className={styles.event}>
      <div className={styles.timer} style={timerStyles}></div>
      <span className={styles.eventName}>{eventName}</span>
      <span className={styles.remainingTime}>{formatDuration(duration)}</span>
    </div>
  )
}

Event.propTypes = {
  id: PropTypes.string.isRequired,
  eventName: PropTypes.string.isRequired,
  eventDate: PropTypes.number.isRequired,
  timeAmount: PropTypes.number.isRequired,
  remindTime: PropTypes.number.isRequired
}

export default Event
