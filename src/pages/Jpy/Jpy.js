import Contact from "../../components/Jpy/Contact/Contact";
import Header from "../../components/Jpy/Header/Header";
import Hero from "../../components/Jpy/Hero/Hero";
import Service from "../../components/Jpy/Service/Service";
import './Jpy.css';



function Jpy() {
    return (
        <div className="JpyBody">
            <div className="heroBackground">
                <Header />
                <Hero />
                
            </div>
            <div className="JpyBody__shadow">
                
            </div>
            <Service />
        </div>
    );
}

export default Jpy;
