import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './SlideDownButton.module.sass'

const SlideDownButton = props => {
  const [isActive, setIsActive] = useState(false)
  const { header, content } = props

  const contentStyle = classNames(styles.answerContent, {
    [styles.active]: isActive,
    [styles.inactive]: !isActive
  })

  const showContent = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <li>
        <span onClick={showContent} className={styles.questionContent}>
          {header}
        </span>
        <div className={contentStyle}>{content}</div>
      </li>
    </>
  )
}

export default SlideDownButton
