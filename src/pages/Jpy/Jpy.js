import Header from "../../components/Jpy/Header/Header";
import Hero from "../../components/Jpy/Hero/Hero";
import Service from "../../components/Jpy/Service/Service";
import './Jpy.css';



function Jpy() {
    return (
        <>
            <div className="heroBackground">
                <Header />
                <Hero />
                
            </div>
            <Service />
        </>
    );
}

export default Jpy;
