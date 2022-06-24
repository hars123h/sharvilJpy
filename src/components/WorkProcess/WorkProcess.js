import React from 'react'

const WorkProcess = () => {
    return (
        <>
            <section id="our-process" className="padding bgdark">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 text-center">
                    <div className="heading-title whitecolor wow fadeInUp" data-wow-delay="300ms">
                        <span>To make it most efficient </span>
                        <h2 className="font-normal">Our Work Process </h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <ul className="process-wrapp">
                    <li className="whitecolor wow fadeIn" data-wow-delay="300ms">
                        <span className="pro-step bottom20">01</span>
                        <p className="fontbold bottom20">Concept</p>
                        <p className="mt-n2 mt-sm-0">
                        We  define your goals, analysis the requirements and make the project schedule
                        </p>
                    </li>
                    <li className="whitecolor wow fadeIn" data-wow-delay="400ms">
                        <span className="pro-step bottom20">02</span>
                        <p className="fontbold bottom20">Plan</p>
                        <p className="mt-n2 mt-sm-0">

                            We make requirements documents, wireframing of pages,  clickable prototype and sitemap
                        </p>
                    </li>
                    <li className="whitecolor wow fadeIn active" data-wow-delay="500ms">
                        <span className="pro-step bottom20">03</span>
                        <p className="fontbold bottom20">Design</p>
                        <p className="mt-n2 mt-sm-0">We design the software or website that support good looks and feel and makes different from other
                         </p>
                    </li>
                    <li className="whitecolor wow fadeIn" data-wow-delay="600ms">
                        <span className="pro-step bottom20">04</span>
                        <p className="fontbold bottom20">Development</p>
                        <p className="mt-n2 mt-sm-0">We build your software with developing new content data that appear on site</p>
                    </li>
                    <li className="whitecolor wow fadeIn" data-wow-delay="700ms">
                        <span className="pro-step bottom20">05</span>
                        <p className="fontbold bottom20">Launch and Maintenance</p>
                        <p className="mt-n2 mt-sm-0">We get the final approval and go live. It's not over yet! We keep up to date website
                        with content and technologies </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>

        </>
    )
}

export default WorkProcess
