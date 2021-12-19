import React from 'react'
import styles from './Stats.module.sass'

function Stats () {
  return (
    <div className={styles.statsSection}>
      <div>
        <p>
          <img src='staticImages/stars.png' alt='stars' />
          <span>4.9 out of 5 stars</span> from 25,000+ customers.
        </p>
      </div>
      <div>
        <p>
          <img src='staticImages/people.png' alt='stars' />
          Our branding community stands <span>200,000+</span> strong.
        </p>
      </div>
      <div>
        <p>
          <img src='staticImages/world-globe.png' alt='stars' />
          <span>140+ Industries</span> supported across more than{' '}
          <span>85 countries</span> – and counting.
        </p>
      </div>
    </div>
  )
}

export default Stats
