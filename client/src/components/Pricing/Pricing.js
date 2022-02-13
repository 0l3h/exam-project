import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Pricing.module.sass'

function Pricing () {
  return (
    <div className={styles.pricingSection}>
      <div className={styles.advantages}>
        <div>
          <h3>Pay a Fraction of cost vs hiring an agency</h3>
          <p>
            For as low as $199, our naming contests and marketplace allow you to
            get an amazing brand quickly and affordably.
          </p>
        </div>
        <hr />
        <div>
          <h3>Satisfaction Guarantee</h3>
          <p>
            Of course! We have policies in place to ensure that you are
            satisfied with your experience.{' '}
            <Link to='/learn-more'>Learn more</Link>
          </p>
        </div>
      </div>
      <div className={styles.helpSection}>
        <h2>Questions?</h2>
        <p>
          Speak with a Squadhelp platform expert to learn more and get your
          questions answered.
        </p>
        <Link className={styles.scheduleButton} to='schedule-consultation'>
          Schedule Consultation
        </Link>
        <a href='tel:(877) 355-3585'>
          <img src='staticImages/phone.png' alt='phone' />
          (877) 355-3585
        </a>
        <span>Call us for assistance</span>
      </div>
    </div>
  )
}

export default Pricing
