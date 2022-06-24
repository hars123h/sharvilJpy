import React from 'react'

const Services = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div id="services-slider" class="owl-carousel">
              <div class="item">
                <div class="service-box">
                  <span class="bottom25"><i class="fa fa-clipboard"></i></span>
                  <h4 class="bottom10 text-nowrap"><a href="javascript:void(0)">General Trading</a></h4>
                  <p>The foundational business model is trading focusing on trade with overseas parties.
                    We fully display our functions as a trading company in our domestic and international business transactions.</p>
                </div>
              </div>
              <div class="item">
                <div class="service-box">
                  <span class="bottom25"><i class="fa fa-laptop"></i></span>
                  <h4 class="bottom10"><a href="javascript:void(0)">IT Development & Cyber Security</a></h4>
                  <p> Boasting a team of honed engineers, Sharvil’s IT Development branch can transform your imagination into a beautiful reality. Fields of expertise include Web/Software Development, AI & ML and Cybersecurity.
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="service-box">
                  <span class="bottom25"><i class="fas fa-business-time"></i></span>
                  <h4 class="bottom10"><a href="javascript:void(0)">Business Consulting</a></h4>
                  <p>

                    From evolving customer expectations and emerging technologies to more nimble companies entering industries, businesses today are more at risk for disruption than ever before
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="service-box">
                  <span class="bottom25"><i class="fa fa-edit"></i></span>
                  <h4 class="bottom10"><a href="javascript:void(0)">Business development</a></h4>
                  <p>Select the business development services you are interested in and one of our specialists will contact you to explore your needs and identify the best path to growth for your organisation. </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <section id="about" class="single-feature padding mt-n5">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-lg-6 col-md-7 col-sm-7 text-sm-start text-center wow fadeInLeft" data-wow-delay="300ms">
              <div class="heading-title mb-4">
                <h2 class="darkcolor font-normal bottom30">Lets take your <span class="defaultcolor">Business</span> to Next Level</h2>
              </div>
              <p class="bottom35">
                Long-term relationships with our clients are always our primary goals, and we are a team of 100+ to deliver the best with ROQ. <br />
                <span style={{ color: '#066363', fontWeight: 700 }}>Sharvil</span>  provides bespoke mobile app development solutions from commencement to delivery and will offer support & maintenance for mobile applications
              </p>
              {/* <a href="javascript:void(0)" class="button gradient-btn mb-sm-0 mb-4">Learn More</a> */}
            </div>
            <div class="col-lg-5 offset-lg-1 col-md-5 col-sm-5 wow fadeInRight" data-wow-delay="300ms">
              <div class="image"><img alt="SEO" src="images/whywe.jpg" /></div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Services
