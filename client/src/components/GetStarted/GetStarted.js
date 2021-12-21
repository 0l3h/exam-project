import React from 'react'
import { Link } from 'react-router-dom'
import styles from './GetStarted.module.sass'

const GetStarted = () => {
  return (
    <div className={styles.getStartedSection}>
      <h2>Ready to get started?</h2>
      <p>
        Fill out your contest brief and begin receiving custom name suggestions
        within minutes.
      </p>
      <Link className={styles.startAContestButton} to='/startContest'>
        Start A Contest
      </Link>
    </div>
  )
}

export default GetStarted
