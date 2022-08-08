import { useEffect } from 'react';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Portfolio from '../../components/Portfolio/Portfolio';
import Services from '../../components/Service/Services';
import Testimonial from '../../components/Testimonial/Testimonial';
import WorkProcess from '../../components/WorkProcess/WorkProcess';



function English(props) {
   
    return (
        <>
            <div data-bs-spy="scroll" data-bs-target=".navbar-nav" data-bs-offset="75" class="offset-nav">
                {/* Preloader */}
                <Header setPage={props.setPage} />
                <div class="loader">
                    {/* <div class="loader-inner">
                        <div class="cssload-loader"></div>
                    </div> */}
                </div>
                <Hero />
                <Services />
                <WorkProcess />
                <Portfolio />
                <Testimonial />
                <Contact />
                <Footer />
            </div>
        </>
    );
}

export default English;
