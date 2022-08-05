import React, { useState } from 'react'
import "./Service2.css"
import webPagedata from "./Webdata.js"

function Service2() {
    // const [WebData, setWebData] = useState(webPagedata[0])
    const [Webpage, setWebpage] = useState('noActiveBtn')
    const [Reactnative, setReactNative] = useState('activeBtn')
    const [Blockchain, setBlockchain] = useState('noActiveBtn')
    const [application, setApplication] = useState('noActiveBtn')
    const [webthree, setWebthree] = useState('noActiveBtn')
    const webaPageData = () => {
        setWebpage('activeBtn');
        setReactNative('noActiveBtn')
        setApplication('noActiveBtn')
        setBlockchain('noActiveBtn')
        setWebthree('noActiveBtn')
    }
    const reactNativeData = () => {
        setWebpage('noActiveBtn');
        setReactNative('activeBtn');
        setApplication('noActiveBtn')
        setBlockchain('noActiveBtn')
        setWebthree('noActiveBtn')
    }
    const applicationData = () => {
        setWebpage('noActiveBtn');
        setReactNative('noActiveBtn')
        setApplication('activeBtn')
        setBlockchain('noActiveBtn')
        setWebthree('noActiveBtn')
    }

    const blockChainData = () => {
        setWebpage('noActiveBtn');
        setReactNative('noActiveBtn')
        setApplication('noActiveBtn')
        setBlockchain('activeBtn')
        setWebthree('noActiveBtn')
    }
    const web3Data = () => {
        setWebpage('noActiveBtn');
        setReactNative('noActiveBtn')
        setApplication('noActiveBtn')
        setBlockchain('noActiveBtn')
        setWebthree('activeBtn')
    }
    return (
        <div>
            {/* NUMBER WAALA SERVICE */}
            <div className="jpy_serviceWrapper2">
                <div className="jpy_serviceWrapper2__cards">
                    <table >

                        <tr className='NumberRow' data-aos="fade-up">
                            <td className="jpy_serviceWrapper2__card__circle">
                                <p>01</p>
                            </td>
                            <td className="jpy_serviceWrapper2__card__circle">
                                <p>02</p>
                            </td>
                            <td className="jpy_serviceWrapper2__card__circle">
                                <p>03</p>
                            </td>
                            <td className="jpy_serviceWrapper2__card__circle" style={{ marginLeft: ".7rem" }}>
                                <p>04</p>
                            </td>
                            <td style={{ marginLeft: ".7rem" }} className="jpy_serviceWrapper2__card__circle">
                                <p>05</p>
                            </td>
                        </tr>
                        <tr data-aos="fade-up" className='tabletitle'>
                            <td><h3 style={{ color: "#fff" }}>ヒアリング</h3></td>
                            <td><h3 style={{ color: "#fff", marginLeft: "-.5rem" }}>戦略策定</h3></td>
                            <td><h3 style={{ color: "#fff" }}>デザイン</h3></td>
                            <td><h3 style={{ color: "#fff", }}>開発・実行</h3></td>
                            <td> <h3 style={{ color: "#fff", }}>サポート</h3></td>
                        </tr>
                        <tr className='dataRow' data-aos="fade-up">
                            <td style={{ width: "220px" }}> <p style={{ lineHeight: "2", letterSpacing: "2px", color: "#fff", fontSize: "20px", fontWeight: "550" }}>まずは、お客様の持っていらっしゃる課題をとにかく深掘りします。課題を明確にし、解決をサポートできる最適なチームをセットします。</p></td>
                            <td style={{ width: "220px" }}><p style={{ lineHeight: "2", letterSpacing: "2px", color: "#fff", fontSize: "20px", fontWeight: "550" }}>発見し、明確に言語化した課題を解決するための戦略を策定していきます。もちろんですが、お客様と綿密に打ち合わせを重ねていきます。</p></td>
                            <td style={{ width: "220px" }} > <p style={{ lineHeight: "2", letterSpacing: "2px", color: "#fff", fontSize: "20px", fontWeight: "550" }}>課題解決のために、システムにせよ、サービスにせよ、目に見えるデザインと、目に見えないデザインをどちらも究極まで詰め、仕上げます</p></td>
                            <td style={{ width: "240px" }}> <p style={{ lineHeight: "2", letterSpacing: "2px", color: "#fff", fontSize: "20px", fontWeight: "550", textAlign: "start" }}>システムであれば、最適なチームで迅速にシステムを構築し、事業開発であれば最適なチームと最速で実行に移します。スピードが重要です。</p></td>
                            <td style={{ width: "220px" }}><p style={{ lineHeight: "2", letterSpacing: "2px", color: "#fff", fontSize: "20px", fontWeight: "550", textAlign: "start" }}>商品やコンサルを納品して終わりではありません。無期限でお客様のサポートをさせていただきます。</p></td>
                        </tr>

                    </table>
                    {/* <div className="jpy_serviceWrapper2__card">
                        <div className="jpy_serviceWrapper2__card__circle">
                            <p>01</p>
                        </div>
                        <h3>ヒアリング</h3>
                        <p >まずは、お客様の持っていらっしゃる課題をとにかく深掘りします。課題を明確にし、解決をサポートできる最適なチームをセットします。</p>
                    </div>
                    <div className="jpy_serviceWrapper2__card">
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
                    <div data-aos="fade-up" className="jpy_serviceWrapper2__card ">
                        <div className="jpy_serviceWrapper2__card__circle">
                            <p>04</p>
                        </div>
                        <h3>開発・実行</h3>
                        <p>システムであれば、最適なチームで迅速にシステムを構築し、事業開発であれば最適なチームと最速で実行に移します。スピードが重要です。</p>
                    </div>
                    <div data-aos="fade-up" className="jpy_serviceWrapper2__card ">
                        <div className="jpy_serviceWrapper2__card__circle">
                            <p>05</p>
                        </div>
                        <h3>サポート</h3>
                        <p>商品やコンサルを納品して終わりではありません。無期限でお客様のサポートをさせていただきます。</p>
                    </div> */}
                </div>
            </div>
            {/* ANIMATION WAALA SERVICE- */}
            <div className="service__webpageDesigne">
                <div className="service__webpageDesigne__left">
                    <p onClick={reactNativeData} className='service__webpageDesigne__left__circle'><img src="images/jpy/web1.png" alt="" /></p>
                    <p onClick={webaPageData} className='service__webpageDesigne__left__circle'><img src="images/jpy/web2.png" alt="" /></p>
                    <p onClick={applicationData} className='service__webpageDesigne__left__circle'><img src="images/jpy/web3.png" alt="" /></p>
                    <p onClick={blockChainData} className='service__webpageDesigne__left__circle'><img src="images/jpy/web4.png" alt="" /></p>
                    <p onClick={web3Data} className='service__webpageDesigne__left__circle'><img src="images/jpy/web5.png" alt="" /></p>
                </div>
                <div className="service__webpageDesigne__rightBox">
                    {Webpage === 'activeBtn' && (

                        <div data-aos="zoom-in">
                            <h3>WEB PAGE</h3>
                            <p className='web' >ホームページやサービスページの作成は、一見簡単そうに見えて簡単ではありません。どういったユーザーをターゲトにするのか、何を目的にするのか。そういった重要な情報をもとに、デザインだけでなく、ウェブページの裏に仕込む仕組みが大きく変わってきます。<br />
                            そのため、繰り返しヒアリングさせていただき、御社に最適なランディングページやホームページを制作させていただきます。デザインにももちんこだわっています。</p>
                        </div>
                    )
                    }

                    {Reactnative === 'activeBtn' && (
                        <div data-aos="zoom-in"

                        >
                            <h3>REACT NATIVE</h3>
                            <p className='native' >非常に効率的な開発者とReactNativeプラットフォームを活用することができます。</p>
                        </div>

                    )
                    }

                    {webthree === 'activeBtn' && (

                        <div data-aos="zoom-in" >
                            <h3>WEB 3.O</h3>
                            <p className='webthree' >Web3ライブラリは、ブロックチェーンとのインターフェース、トランザクションの作成、スマートコントラクトとのやり取りに役立ちます。</p>
                        </div>

                    )
                    }

                    {Blockchain === 'activeBtn' && (
                        <div data-aos="zoom-in">
                            <h3>BLOCKCHAIN</h3>
                            <p className='blockchain' >
                                ブロックチェーンに関する開発から、コンサルティングまで幅広くサポートさせていただいております。<br />
                                どのようなサービスを作りたいのかなど、深くヒアリングさせていただき、弊社の経験豊富なブロックチェーンエンジニアが、併走させていただきます。
                            </p>
                        </div>

                    )
                    }

                    {application === 'activeBtn' && (
                        <div data-aos="zoom-in" data-aos-delay="50">
                            <h3>APPLICATON</h3>
                            <p className='application' >私たちは、スタートアップ、中小企業、大企業向けのトップクラスのiOSアプリを設計および開発しています。また、アンドロイド向けのアプリ開発に関しても、経験の豊富なエンジニアがサポートさせていただきます。</p>
                        </div>

                    )
                    }






                </div>
            </div>
        </div>
    )
}

export default Service2