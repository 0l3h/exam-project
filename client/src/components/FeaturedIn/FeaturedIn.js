import React from 'react'
import styles from './FeaturedIn.module.sass'
import CONSTANTS from '../../constants'

function FeaturedIn () {
  return (
    <div className={styles.featuredInSection}>
      <h2>Featured In</h2>

      <div className={styles.sponsors}>
        <a href={CONSTANTS.FORBES_URL} target='blank'>
          <img
            src='staticImages/sponsors/Forbes-inactive.png'
            alt='Forbes logo'
          />
        </a>
        <a href={CONSTANTS.THE_NEXT_WEB_URL} target='blank'>
          <img
            src='staticImages/sponsors/the_next_web_inactive.png'
            alt='The Next Web logo'
          />
        </a>
        <a href={CONSTANTS.CHICAGO_URL} target='blank'>
          <img src='staticImages/sponsors/chicago.svg' alt='Client logo' />
        </a>
        <a href={CONSTANTS.MASHABLE_URL} target='blank'>
          <img
            src='staticImages/sponsors/mashable-inactive.png'
            alt='Client logo'
          />
        </a>
      </div>
    </div>
  )
}

export default FeaturedIn
