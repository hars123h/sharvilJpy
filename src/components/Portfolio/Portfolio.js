import React, { useState } from 'react'


const Portfolio = () => {
   
    return (
        <>
              <section id="portfolio" className="position-relative padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center wow fadeIn" data-wow-delay="300ms">
                    <div className="heading-title darkcolor wow fadeInUp" data-wow-delay="300ms">
                        <span className="defaultcolor"> Let's Explore Out </span>
                        <h2 className="font-normal darkcolor heading_space_half"> Our Services </h2>
                    </div>
                    {/* <div className="col-md-6 offset-md-3 heading_space_half">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores omnis provident quam reiciendis voluptatum.</p>
                    </div> */}
                </div>
                <div className="col-lg-12">
                    <div id="mosaic-filter" className="cbp-l-filters bottom30 wow fadeIn text-center" data-wow-delay="350ms">
                        <div data-filter="*" className="cbp-filter-item">
                            <span>All</span>
                        </div>
                        <div data-filter=".web-application" className="cbp-filter-item">
                            <span>Web Application</span>
                        </div>
                        <div data-filter=".app-development" className="cbp-filter-item">
                            <span>App Development</span>
                        </div>
                        <div data-filter=".emerging-technology" className="cbp-filter-item">
                            <span>Emerging Technology</span>
                        </div>
                       
                    </div>
                </div>
                <div className="col-lg-12">
                    <div id="grid-mosaic" className="cbp cbp-l-grid-mosaic-flat">
                        {/* <!--Item 1--> */}
                        <div className="cbp-item web-application">
                            <img src="images/webApplication.jpg" alt="" />
                           
                            <div className="gallery-hvr whitecolor">
                                <div className="center-box">
                                    <a href="images/webApplication.jpg" className="opens" data-fancybox="gallery" title="Zoom In"> 
                                       
                                        <i className="fa fa-search-plus"></i>
                                    </a>
                                    <a href="#contact" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                    <h4 className="w-100">Web Application</h4>
                                    <p>The purpose of the security test is to discover the vulnerabilities of the web application so that the developers can then remove these vulnerabilities
                                      from the application and make the web application and data safe from unauthorized actions. </p>
                                </div>
                            </div>
                        </div>
                        {/* <!--Item 2--> */}
                        <div className="cbp-item app-development">
                            <img src="images/iphoneDevelopment.jpg" alt="" />
                            <div className="gallery-hvr whitecolor">
                                <div className="center-box">
                                    <a href="images/iphoneDevelopment.jpg" className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                    <a href="#contact" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                    <h4 className="w-100">IPhone App Development</h4>
                                    <p>We design and develop top-class iOS apps for startups, small, medium and 
                                    large enterprises. Speak to our team to validate your app idea.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!--Item 3--> */}
                        <div className="cbp-item app-development">
                            <img src="images/android.png" alt="" />
                            <div className="gallery-hvr whitecolor">
                                <div className="center-box">
                                    <a href='images/android.png' className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                    <a href="#contact" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                    <h4 className="w-100">Android App Development</h4>
                                    <p>Advanced proficiency, industry-oriented knowledge,
                                     and unmatched competency are some of the prime qualities possessed by our Android developers</p>
                                </div>
                            </div>
                        </div>

                        
                        {/* <!--Item 4--> */}
                        <div className="cbp-item app-development">
                            <img src="images/reactNative.png" alt="" />
                            <div className="gallery-hvr whitecolor">
                                <div className="center-box">
                                    <a href="images/reactNative.png" className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                    <a href="#contact" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                    <h4 className="w-100">React Native Development</h4>
                                    <p>Leverage The React Native Platform With Highly Efficient Developers</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--Item 5--> */}
                        <div className="cbp-item emerging-technology">
                            <img src="images/blockchain2.png" alt="" />
                            <div className="gallery-hvr whitecolor">
                                <div className="center-box">
                                    <a href="images/blockchain2.png" className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                    <a href="#contact" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                    <h4 className="w-100">Blockchain Development</h4>
                                    <p>It's changing the future as we speak—but where do you start? Harness Blockchain with
                                     real-world applications from the leaders in distributed ledger technologies</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--Item 6--> */}
                        <div className="cbp-item emerging-technology">
                            <img src="images/web3.0.jpg" alt="" />
                            <div className="gallery-hvr whitecolor">
                                <div className="center-box">
                                    <a href="images/web3.0.jpg" className="opens" data-fancybox="gallery" title="Zoom In"> <i className="fa fa-search-plus"></i></a>
                                    <a href="#contact" className="opens" title="View Details"> <i className="fas fa-link"></i></a>
                                    <h4 className="w-100">Web 3.0</h4>
                                    <p>Web3 libraries help us interface with the blockchain easily,
                                     make transactions, and interact with smart contracts.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Item 7 */}
                        
                    </div>
                    <div className="col-lg-12">
                        {/* <!--Load more itema from another html file using ajax--> */}
                        {/* <div id="js-loadMore-mosaic" className="cbp-l-loadMore-button ">
                            <a href="load-more.html" className="cbp-l-loadMore-link border-0 font-13 button gradient-btn whitecolor transition-3" rel="nofollow">
                            <span className="cbp-l-loadMore-defaultText">Load More (<span className="cbp-l-loadMore-loadItems">6</span>)</span>
                            <span className="cbp-l-loadMore-loadingText">Loading <i className="fas fa-spinner fa-spin"></i></span>
                            <span className="cbp-l-loadMore-noMoreLoading d-none">NO MORE WORKS</span>
                        </a>
                        </div> */}
                       
                    </div>
                </div>

            </div>
        </div>
    </section>
        </>
    )
}

export default Portfolio
