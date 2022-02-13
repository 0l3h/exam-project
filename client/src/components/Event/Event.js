import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  addSeconds,
  formatDuration,
  intervalToDuration,
  isSameSecond,
} from 'date-fns';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { addOutdatedEvent, deleteEvent } from './../../actions/actionCreator';
import styles from './Event.module.sass';

function Event (props) {
  const { id, eventName, eventDate, timeAmount, remindTime } = props;
  const [currentTime, setCurrentTime] = useState(Date.now());
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(currentTime => new Date(addSeconds(currentTime, 1)));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (isSameSecond(eventDate - remindTime, currentTime)) {
      eventReminderAlert();
    }

    if (eventDate - currentTime <= 0) {
      dispatch(deleteEvent({ id }));
      dispatch(addOutdatedEvent({ id, eventName }));
      eventOutdatedAlert();
    }
  }, [currentTime]);

  const eventOutdatedAlert = () => {
    toast.error(<span>Some of your events has been outdated</span>, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const eventReminderAlert = () => {
    toast.warn(<span>It's time for {eventName}</span>, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const timerStyles = {
    width: `${(100 * (timeAmount - (eventDate - currentTime))) / timeAmount}%`,
  };

  const duration = intervalToDuration({
    start: currentTime,
    end: eventDate,
  });

  return (
    <div className={styles.event}>
      <div className={styles.timer} style={timerStyles}></div>
      <span className={styles.eventName}>{eventName}</span>
      <span className={styles.remainingTime}>{formatDuration(duration)}</span>
    </div>
  );
}

Event.propTypes = {
  id: PropTypes.string.isRequired,
  eventName: PropTypes.string.isRequired,
  eventDate: PropTypes.number.isRequired,
  timeAmount: PropTypes.number.isRequired,
  remindTime: PropTypes.number.isRequired,
};

export default Event;
