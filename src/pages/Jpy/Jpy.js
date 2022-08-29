import { useEffect, useState } from "react";
import Header from "../../components/Jpy/Header/Header";
import Hero from "../../components/Jpy/Hero/Hero";
import Service from "../../components/Jpy/Service/Service";
import './Jpy.css';
import "aos/dist/aos.css"
import Aos from "aos";
import Contact from "../../components/Jpy/Contact/Contact";
import Service2 from "../../components/Jpy/Service/Service2";



function Jpy(props) {
    const [loader, setloader] = useState(false)
    setTimeout(() => {
        setloader(false)
    }, 1000)
    useEffect(() => {
        Aos.init({
            
           
              duration: 2000,
            offset: 10,
            // disable: 'mobile'
        }
        )
    }, [])
    return (
        <>
          <div className="JpyBody" >
            <Header setPage = {props.setPage} />
            <div data-aos="zoom-out" className="heroBackground">
                <Hero/>
            </div>
            <Service />
            <Service2/>
            <Contact />

        </div>
        
        </>
      

    );
}

export default Jpy;
