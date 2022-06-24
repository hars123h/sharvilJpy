import React from 'react'

const Testimonial = () => {
    return (
        <>
                <section id="our-testimonial">
        <div className="parallax page-header testimonial-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-6 col-md-12 text-center text-lg-end">
                        <div className="heading-title wow fadeInRight padding_testi" data-wow-delay="300ms">
                            <span className="whitecolor">Quisque tellus risus, adipisci</span>
                            <h2 className="whitecolor font-normal">What People Say</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="owl-carousel" id="testimonial-slider">
                {/* <!--item 1--> */}
                <div className="item testi-box">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 text-center">
                        <a href="https://www.mbsautoavenue.com/">
                            <div className="testimonial-round d-inline-block">
                                <img src="images/testimonial-5.jpg" alt="" />
                            </div>
                            
                           
                                 <h4 className="defaultcolor font-light top15">MBS Auto Avenue (Reaan)</h4>
                        </a>
                            
                           
                            {/* <p>UPWORK, New York</p> */}
                        </div>
                        <div className="col-lg-6 offset-lg-2 col-md-10 offset-md-1 text-lg-start text-center">
                            <p className="bottom15 top90 ">
                            It was an astounding experience to work with SHARVIL Business Groups. We started off with an imagination, a rough idea on how to
                             manage our second hand car selling business online. Starting from planning out the whole IT system to development to testing to after support, SHARVIL has been surprising me everyday with their services.
                            </p>
                            <span className="d-inline-block test-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </span>
                        </div>
                    </div>
                </div>
                {/* <!--item 2--> */}
                <div className="item testi-box">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 text-center">
                        <a href="https://cloud-jp.net/">
                            <div className="testimonial-round d-inline-block">
                                <img src="images/testimonial-2.jpg" alt="" />
                            </div>
                           
                            <h4 className="defaultcolor font-light top15"> 株式会社CLOUD</h4> </a>
                            {/* <p>FIVERR, Italy</p> */}
                        </div>
                        <div className="col-lg-6 offset-lg-2 col-md-10 offset-md-1 text-lg-start text-center">
                            <p className="bottom15 top90">

                            Our whole business model were to start with a blogging site, we wanted to gain traction and start off our 
                            Shisha selling business. Not only we got the whole IT system made and maintained, but also received the business consultation on 
                            how to get the suppliers and how to manage the financials.


                            </p>
                            <span className="d-inline-block test-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </span>
                        </div>
                    </div>
                </div>
                {/* <!--item 3--> */}
                <div className="item testi-box">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12 text-center">
                        <a href="https://www.rutilea.com/">
                            <div className="testimonial-round d-inline-block">
                                <img src="images/testimonial-3.jpg" alt="" />
                            </div>
                            <h4 className="defaultcolor font-light top15">Rutilea Inc.</h4>
                            {/* <p>ENVATO, Australia</p> */}
                            </a>
                        </div>
                        <div className="col-lg-6 offset-lg-2 col-md-10 offset-md-1 text-lg-start text-center">
                            <p className="bottom15 top90">
                            The knowledge we have exchanged with SHARVIL is unmatchable. The support we received was more than what we expected, it was surprising to see that a company that new could be well experienced. It was not just the IT but the sales aspect is also we took the advantage of.
                             Looking forward to creating strong bonds with SHARVIL in terms of business.
                            </p>
                            <span className="d-inline-block test-star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </span>
                        </div>
                    </div>
                </div>
                {/* <!--item 4--> */}
                
            </div>
        </div>
    </section>
     
        </>
    )
}

export default Testimonial