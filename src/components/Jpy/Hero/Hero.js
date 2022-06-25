import React from 'react';
import './Hero.css';


const Hero = () => {
    return (
        <div className='hero__main'>
            <div className="hero">
                <h2>全ての課題を <br />
                    システムで解決する。
                </h2>
            </div>
            <div className="jpy_heroBottom">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-7">
                            <h3>ITを活用しながら事業における課題を <br />
                                発見,解決し、顧客の最適解を見出し,実行します。 <br />
                                必ずしもITを活用するのではなくハンズオンで、 <br />
                                サービス開発,事業開発,成長など高い視点からサポート</h3>
                        </div>
                        <div className="col-md-5 imgContainer">
                            <img className="img-fluid" src="/images/jpy/hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;