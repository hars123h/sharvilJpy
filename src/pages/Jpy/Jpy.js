import { useEffect, useState } from "react";
import Header from "../../components/Jpy/Header/Header";
import Hero from "../../components/Jpy/Hero/Hero";
import Service from "../../components/Jpy/Service/Service";
import './Jpy.css';
import "aos/dist/aos.css"
import Aos from "aos";



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
        <div className="JpyBody">
            <Header />
            <div data-aos="zoom-out"  >
                <div className="heroBackground">

                    <Hero />

                </div>
                <div className="JpyBody__shadow">

                </div>
                <Service />
            </div>

        </div>

    );
}

export default Jpy;
