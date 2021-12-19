import React from 'react'
import { Link } from 'react-router-dom'
import Collapsible from './../../components/Collapsible/Collapsible'
import Header from '../../components/Header/Header'
import styles from './HowItWorksPage.module.sass'
import Footer from '../../components/Footer/Footer'
import CONSTANTS from '../../constants'

class HowItWorksPage extends React.Component {
  render () {
    return (
      <>
        <Header />

        <div className={styles.pageContainer}>
          <div className={styles.briefDescription}>
            <div>
              <span>World's #1 Naming Platform</span>

              <h1>How Does Squadhelp Work?</h1>

              <p>
                Squadhelp helps you come up with a great name for your business
                by combining the power of crowdsourcing with sophisticated
                technology and Agency-level validation services.
              </p>

              <a href={CONSTANTS.DESCRIPTION_VIDEO_URL}>
                <svg style={{ height: '26px', width: '26px' }}>
                  <path
                    fill='currentColor'
                    d='M8,5.14V19.14L19,12.14L8,5.14Z'
                  />
                </svg>
                Play Video
              </a>
            </div>

            <img src='staticImages/description-image.png' alt='decor' />
          </div>

          <div className={styles.usageOptions}>
            <div className={styles.optionsHeader}>
              <span>Our Services</span>

              <h2>3 Ways To Use Squadhelp</h2>

              <p>
                Squadhelp offers 3 ways to get you a perfect name for a
                business.
              </p>
            </div>

            <div className={styles.optionSection}>
              <img src='staticImages/start-a-contest.png' alt='decor' />

              <h3>Launch a Contest</h3>

              <p>
                Work with hundreds of creative experts to get custom name
                suggestions for your bussines or brand. All names are
                auto-checked for URL availability.
              </p>

              <Link to='/launch-a-contest'>Launch a Contest</Link>
            </div>

            <div className={styles.optionSection}>
              <img src='staticImages/explore-names.png' alt='decor' />

              <h3>Explore Names For Sale</h3>

              <p>
                Our branding team has curated thousands of pre-made names that
                you can purchase instantly. All names include a matching URL and
                a complimentary Logo Design
              </p>

              <Link to='/explore-names-for-sale'>Explore Names For Sale</Link>
            </div>

            <div className={styles.optionSection}>
              <img src='staticImages/managed-contests.png' alt='decor' />

              <h3>Agency-level Managed Contests</h3>

              <p>
                Our Managed contests combine the power of crowdsourcing with the
                rich experience of our branding consultants. Get a complete
                agency-level experience at a fraction of Agency costs
              </p>

              <Link to='/learn-more'>Learn More</Link>
            </div>
          </div>

          <div className={styles.namingContests}>
            <div className={styles.contestsHeader}>
              <img src='staticImages/trophy.png' alt='decor' />

              <h2>How Do Naming Contests Work?</h2>
            </div>

            <img src='staticImages/how-contests-work.png' alt='decor' />

            <ul className={styles.contestSection}>
              <li>
                <span>1.</span>
                <p>
                  Fill out your Naming Brief and begin receiving name ideas in
                  minutes
                </p>
              </li>
              <li>
                <span>2.</span>
                <p>
                  Rate the submissions and provide feedback to creatives.
                  Creatives submit even more names based on your feedback.
                </p>
              </li>
              <li>
                <span>3.</span>
                <p>
                  Our team helps you test your favorite names with your target
                  audience. We also assist with Trademark screening.
                </p>
              </li>
              <li>
                <span>4.</span>
                <p>Pick a Winner. The winner gets paid for their submission.</p>
              </li>
            </ul>
          </div>

          <div className={styles.QASection}>
            <div className={styles.QAsidebar}>
              <a href='#launching-a-contest'>Launching A Contest</a>
              <a href='#buying-from-marketplace'>Buying From Marketplace</a>
              <a href='#managed-contests'>Managed Contests</a>
              <a href='#for-creatives'>For Creatives</a>
            </div>

            <div className={styles.QAList}>
              <h3 id='launching-a-contest'>Launching A Contest</h3>

              <ul>
                <Collapsible
                  header='How long does it take to start receiving submissions?'
                  content='For Naming contests, you will start receiving your
                    submissions within few minutes of launching your contest.
                    Since our creatives are located across the globe, you can
                    expect to receive submissions 24 X 7 throughout the duration
                    of the brainstorming phase.'
                />

                <Collapsible
                  header='How long do Naming Contests last?'
                  content='You can choose a duration from 1 day to 7 days. We recommend
                  a duration of 3 Days or 5 Days. This allows for sufficient
                  time for entry submission as well as brainstorming with
                  creatives. If you take advantage of our validation services
                  such as Audience Testing and Trademark Research, both will
                  be an additional 4-7 days (3-5 business days for Audience
                  Testing and 1-2 business days for Trademark Research).'
                />

                <Collapsible
                  header='Where are the creatives located?'
                  content='About 70% of our Creatives are located in the United States
                  and other English speaking countries (i.e. United Kingdom,
                  Canada, and Australia.). We utilize an advanced rating score
                  algorithm to ensure that high quality creatives receive more
                  opportunities to participate in our contests.'
                />

                <Collapsible
                  header='What if I do not like any submissions?'
                  content={
                    <>
                      While it is unusually rare that you will not like any
                      names provided, we have a few options in case this problem
                      occurs:
                      <li>
                        If the contest ends and you have not yet found a name
                        that you’d like to move forward with, we can provide
                        complimentary extension of your contest as well as a
                        complimentary consultation with one of our branding
                        consultants (a $99 value).
                      </li>
                      <li>
                        By exploring our premium domain marketplace you can
                        apply the contest award towards the purchase of any name
                        listed for sale.
                      </li>
                      <li>
                        If you choose the Gold package or Platinum package and
                        keep the contest as "Not Guaranteed", you can request a
                        partial refund if you choose not to move forward with
                        any name from you project. (Please note that the refund
                        is for the contest award). Here is a link to our{' '}
                        <Link to='/refund-policy'>Refund Policy</Link>
                      </li>
                    </>
                  }
                />

                <Collapsible
                  header='How much does it cost?'
                  content={
                    <>
                      Our naming competitions start at $299, and our logo design
                      competitions start at $299. Also, there are three
                      additional contest level that each offer more features and
                      benefits. See our{' '}
                      <Link to='/pricing-page'>Pricing Page</Link> for details.
                    </>
                  }
                />

                <Collapsible
                  header='I need both a Name and a Logo. Do you offer any discount for multiple contests?'
                  content={
                    <>
                      Yes! We have many contest bundles - our most popular being
                      our Name, Tagline, and Logo bundle. Bundles allow you to
                      purchase multiple contests at one time and save as much as
                      from $75 - $400. You can learn more about our bundle
                      options on our{' '}
                      <Link to='/pricing-page'>Pricing Page</Link> .
                    </>
                  }
                />

                <Collapsible
                  header='What if I want to keep my bussiness idea private?'
                  content='You can select a Non Disclosure Agreement (NDA) option at
                    the time of launching your competition. This will ensure
                    that only those contestants who agree to the NDA will be
                    able to read your project brief and participate in the
                    contest. The contest details will be kept private from other
                    users, as well as search engines.'
                />

                <Collapsible
                  header='Can you serve the customers outside the US?'
                  content='Absolutely. Squadhelp services organizations across the
                    globe. Our customer come from many countries, such as the
                    United States, Australia, Canada, Europe, India, and MENA.
                    We’ve helped more than 25,000 customer around the world.'
                />

                <Collapsible
                  header='Can I see any examples?'
                  content={
                    <>
                      Our creatives have submitted more than 6 Million names and
                      thousands of logos on our platform. Here are some examples
                      of Names, Taglines, and Logos that were submitted in
                      recent contests.
                      <li>
                        <Link to='/name-examples'>Name Examples</Link>
                      </li>
                      <li>
                        <Link to='/tagline-examples'>Tagline Examples</Link>
                      </li>
                      <li>
                        <Link to='/logo-examples'>Logo Examples</Link>
                      </li>
                    </>
                  }
                />
              </ul>

              <h3 id='buying-from-marketplace'>Buying From Marketplace</h3>

              <ul>
                <Collapsible
                  header="What's included with a Domain Purchase?"
                  content='When you purchase a domain from our premium domain
                    marketplace, you will receive the exact match .com URL, a
                    complimentary logo design (along with all source files), as
                    well as a complimentary Trademark report and Audience
                    Testing if you’re interested in validating your name.'
                />

                <Collapsible
                  header='How does a domain transfer process work?'
                  content='Once you purchase a Domain, our transfer specialists will
                  reach out to you (typically on the same business day). In
                  most cases we can transfer the domain to your preferred
                  registrar (such as GoDaddy). Once we confirm the transfer
                  details with you, the transfers are typically initiated to
                  your account within 1 business day.'
                />

                <Collapsible
                  header='If I purchase a Domain on installments, can I start using it to setup my website?'
                  content='We offer payment plans for many domains in our Marketplace.
                  If you purchase a domain on a payment plan, we hold the
                  domain in an Escrow account until it is fully paid off.
                  However our team can assist you with making any changes to
                  the domains (such as Nameserver changes), so that you can
                  start using the domain right away after making your first
                  installment payment.'
                />
              </ul>

              <h3 id='managed-contests'>Managed Contests</h3>

              <ul>
                <Collapsible
                  header='What are Managed Contests?'
                  content={
                    <>
                      The 'Managed' option is a fully managed service by
                      Squadhelp Branding experts. It includes a formal brief
                      preparation by Squadhelp team and management of your
                      contest. Managed Contests are a great fit for companies
                      that are looking for an "Agency" like experience and they
                      do not want to manage the contest directly. Our branding
                      team has directly managed hundreds of branding projects
                      and has learned several best practices that lead to
                      successful project outcomes. Our team will apply all best
                      practices towards the management of your branding project.
                      Learn more about our{' '}
                      <Link to='/managed-contests-service'>
                        {' '}
                        Managed Contest Service
                      </Link>
                      .
                    </>
                  }
                />

                <Collapsible
                  header="What's a typical timeline for a Managed Contests?"
                  content={
                    <>
                      The overall process takes 12-13 days.
                      <ul>
                        <li>
                          The Managed projects start with a project kick-off
                          call with your Branding Consultant. You can schedule
                          this call online immediately after making your
                          payment.
                        </li>

                        <li>
                          After your kick-off call, the Branding consultant will
                          write your project brief and send for your approval
                          within 1 business day.
                        </li>

                        <li>
                          Upon your approval, the contest will go live. The
                          branding consultant will help manage your project
                          throughout the brainstorming phase (typically 5 days).
                        </li>

                        <li>
                          Upon the completion of brainstorming phase, the
                          branding consultant will work with you to test the top
                          6 names from your Shortlist (3-5 Days). In addition,
                          the branding consultant will coordinate the detailed
                          Trademark screening (1-3 days)
                        </li>
                      </ul>
                    </>
                  }
                />

                <Collapsible
                  header='How much do Managed Contests cost?'
                  content={
                    <>
                      We offer two levels of Managed Contests. Standard ($999)
                      and Enterprise ($1999). The Enterprise managed contest
                      includes:
                      <ul>
                        <li>
                          (1) a $500 award amount (instead of $300), which will
                          attract our top Creatives and provide more options to
                          choose from;
                        </li>

                        <li>
                          (2) we will ensure a senior member of our branding
                          team is assigned to your project and the branding team
                          will invest about 3X more time in the day-to-day
                          management of your project;
                        </li>

                        <li>
                          (3) you will receive more high-end trademark report
                          and 5X more responses for your audience test.
                        </li>

                        <li>
                          Here is a link to our{' '}
                          <Link to='/pricing-page'>Pricing page</Link> with a
                          detailed comparison of the two packages.
                        </li>
                      </ul>
                    </>
                  }
                />

                <Collapsible
                  header='Where are the Branding Consultants located?'
                  content='All our branding consultants are based in in our
                  Headquarters (Hoffman Estates, IL). Our branding consultants
                  have many years of experience in managing hundreds of
                  branding projects for companies ranging from early stage
                  startups to Fortune 500 corporations. .'
                />
              </ul>

              <h3 id='for-creatives'>For Creatives</h3>

              <ul>
                <Collapsible
                  header='Can anyone join the platform?'
                  content={
                    <>
                      We are open to anyone to signup. However, we have an
                      extensive "
                      <Link to='/quality-scoring'>Quality Scoring</Link>"
                      process which ensures that high quality creatives have the
                      ability to continue to participate in the platform. On the
                      other hand, we limit the participation from those
                      creatives who do not consistently receive high ratings.
                    </>
                  }
                />

                <Collapsible
                  header='Can I start participating immediatly upon signing up?'
                  content='When you initially signup, you are assigned few contests to
                  assess your overall quality of submissions. Based upon the
                  quality of your submissions, you will continue to be
                  assigned additional contests. Once you have received enough
                  high ratings on your submissions, your account will be
                  upgraded to "Full Access", so that you can begin
                  participating in all open contests.'
                />

                <Collapsible
                  header='How Do I Get Paid?'
                  content='We handle creative payouts via Paypal or Payoneer. Depending
                  upon your country of residence, we may require additional
                  documentation to verify your identity as well as your Tax
                  status.'
                />
              </ul>
            </div>
          </div>

          <div className={styles.getStartedSection}>
            <h2>Ready to get started?</h2>
            <p>
              Fill out your contest brief and begin receiving custom name
              suggestions within minutes.
            </p>
            <Link to='/start-a-contest'>Start A Contest</Link>
          </div>

          <div></div>

          <div>
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

          <div>
            <div>
              <h3>Pay a Fraction of cost vs hiring an agency</h3>
              <p>
                For as low as $199, our naming contests and marketplace allow
                you to get an amazing brand quickly and affordably.
              </p>
            </div>
            <div>
              <h3>Satisfaction Guarantee</h3>
              <p>
                Of course! We have policies in place to ensure that you are
                satisfied with your experience.{' '}
                <Link to='/learn-more'>Learn more</Link>
              </p>
            </div>
            <div>
              <h2>Questions?</h2>
              <p>
                Speak with a Squadhelp platform expert to learn more and get
                your questions answered.
              </p>
              <Link to='schedule-consultation'>Schedule Consultation</Link>
              <a href='tel:(877) 355-3585'>
                <img src='staticImages/phone.png' alt='phone' />
                (877) 355-3585
              </a>
              <span>Call us for assistance</span>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default HowItWorksPage
