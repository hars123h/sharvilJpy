import { useEffect, useState } from "react";
import Header from "../../components/Jpy/Header/Header";
import Hero from "../../components/Jpy/Hero/Hero";
import Service from "../../components/Jpy/Service/Service";
import './Jpy.css';
import "aos/dist/aos.css"
import Aos from "aos";
import Contact from "../../components/Jpy/Contact/Contact";



function Jpy() {
    const [loader, setloader] = useState(false)
    setTimeout(() => {
        setloader(false)
    }, 1000)
    useEffect(() => {
        Aos.init({
            duration: 2000,
            offset: 10,
        })
    }, [])
    return (
        <div className="JpyBody" data-aos="zoom-out">
            <Header />

            <div className="heroBackground">

                <Hero />

            </div>
            <Service />


        </div>

    );
}

export default Jpy;
