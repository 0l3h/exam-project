import React, { useState } from 'react'
import styles from './SlideDownButton.module.sass'

const SlideDownButton = props => {
  const [isActive, changeStatus] = useState(false)

  const showContent = () => {
    changeStatus()
  }

  const contentStyle = classNames(styles.answerContent, {
    [styles.active]: isActive,
    [styles.inactive]: !isActive
  })
  return (
    <>
      <li onClick={showContent}>
        <span className={styles.questionContent}>
          Where are the creatives located?
        </span>
        <div className={contentStyle}>
          About 70% of our Creatives are located in the United States and other
          English speaking countries (i.e. United Kingdom, Canada, and
          Australia.). We utilize an advanced rating score algorithm to ensure
          that high quality creatives receive more opportunities to participate
          in our contests.
        </div>
      </li>
    </>
  )
}

export default SlideDownButton
