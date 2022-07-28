import React, { useState } from 'react'
import "./Service2.css"
import webPagedata from "./Webdata.js"

function Service2() {
    const [WebData, setWebData] = useState(webPagedata[0])
    return (
        <div>

            <div className="jpy_serviceWrapper2">
                <div className="jpy_serviceWrapper2__cards">
                    <div data-aos="fade-up" className="jpy_serviceWrapper2__card">
                        <div className="jpy_serviceWrapper2__card__circle">
                            <p>01</p>
                        </div>
                        <h3>ヒアリング</h3>
                        <p >まずは、お客様の持っていらっしゃる課題をとにかく深掘りします。課題を明確にし、解決をサポートできる最適なチームをセットします。</p>
                    </div>
                    <div data-aos="fade-up" className="jpy_serviceWrapper2__card">
                        <div className="jpy_serviceWrapper2__card__circle">
                            <p>02</p>
                        </div>
                        <h3>戦略策定</h3>
                        <p>発見し、明確に言語化した課題を解決するための戦略を策定していきます。もちろんですが、お客様と綿密に打ち合わせを重ねていきます。</p>
                    </div>
                    <div data-aos="fade-up" className="jpy_serviceWrapper2__card">
                        <div className="jpy_serviceWrapper2__card__circle">
                            <p>03</p>
                        </div>
                        <h3>デザイン</h3>
                        <p>課題解決のために、システムにせよ、サービスにせよ、目に見えるデザインと、目に見えないデザインをどちらも究極まで詰め、仕上げます</p>
                    </div>
                    <div data-aos="fade-up" className="jpy_serviceWrapper2__card">
                        <div className="jpy_serviceWrapper2__card__circle">
                            <p>04</p>
                        </div>
                        <h3>開発・実行</h3>
                        <p>システムであれば、最適なチームで迅速にシステムを構築し、事業開発であれば最適なチームと最速で実行に移します。スピードが重要です。</p>
                    </div>
                    <div data-aos="fade-up" className="jpy_serviceWrapper2__card">
                        <div className="jpy_serviceWrapper2__card__circle">
                            <p>05</p>
                        </div>
                        <h3>サポート</h3>
                        <p>商品やコンサルを納品して終わりではありません。無期限でお客様のサポートをさせていただきます。</p>
                    </div>
                </div>
            </div>
            <div className="service__webpageDesigne">
                <div className="service__webpageDesigne__left">
                    <p onClick={() => setWebData(webPagedata[0])} className='service__webpageDesigne__left__circle'><img src="images/jpy/web1.png" alt="" /></p>
                    <p onClick={() => setWebData(webPagedata[1])} className='service__webpageDesigne__left__circle'><img src="images/jpy/web2.png" alt="" /></p>
                    <p onClick={() => setWebData(webPagedata[2])} className='service__webpageDesigne__left__circle'><img src="images/jpy/web3.png" alt="" /></p>
                    <p onClick={() => setWebData(webPagedata[3])} className='service__webpageDesigne__left__circle'><img src="images/jpy/web4.png" alt="" /></p>
                    <p onClick={() => setWebData(webPagedata[1])} className='service__webpageDesigne__left__circle'><img src="images/jpy/web5.png" alt="" /></p>
                </div>
                <div className="service__webpageDesigne__rightBox">

                    <div data-aos="fade-up" className="datashow">
                        <h3>{WebData.heading}</h3>
                        <p className='' >{WebData.para}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Service2