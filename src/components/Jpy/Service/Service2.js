import React, { useState } from 'react'
import "./Service2.css"
import webPagedata from "./Webdata.js"

function Service2() {
    // const [WebData, setWebData] = useState(webPagedata[0])
    const [Webpage, setWebpage] = useState('dataHidden')
    const [Reactnative, setReactNative] = useState('datashow')
    const [Blockchain, setBlockchain] = useState('dataHidden')
    const [application, setApplication] = useState('dataHidden')
    const [webthree, setWebthree] = useState('dataHidden')
    const webaPageData = () => {
        setWebpage('datashow');
        setReactNative('dataHidden')
    }
    const reactNativeData = () => {
        setWebpage('dataHidden');
        setReactNative('datashow')
    }
    return (
        <div>

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
                            <td className="jpy_serviceWrapper2__card__circle">
                                <p>04</p>
                            </td>
                            <td className="jpy_serviceWrapper2__card__circle">
                                <p>05</p>
                            </td>
                        </tr>
                        <tr  data-aos="fade-up" className='tabletitle'>
                            <td><h3 style={{color:"#fff"}}>ヒアリング</h3></td>
                            <td><h3 style={{color:"#fff"}}>戦略策定</h3></td>
                            <td><h3 style={{color:"#fff"}}>デザイン</h3></td>
                            <td><h3 style={{color:"#fff"}}>開発・実行</h3></td>
                            <td> <h3 style={{color:"#fff"}}>サポート</h3></td>
                        </tr>
                        <tr className='dataRow' data-aos="fade-up">
                            <td style={{width:"170px"}}> <p style={{lineHeight: "2", letterSpacing: "2px",color:"#fff"}}>まずは、お客様の持っていらっしゃる課題をとにかく深掘りします。課題を明確にし、解決をサポートできる最適なチームをセットします。</p></td>
                            <td style={{width:"170px"}}><p style={{lineHeight: "2", letterSpacing: "2px",color:"#fff"}}>発見し、明確に言語化した課題を解決するための戦略を策定していきます。もちろんですが、お客様と綿密に打ち合わせを重ねていきます。</p></td>
                            <td style={{width:"170px"}} > <p style={{lineHeight: "2", letterSpacing: "2px",color:"#fff"}}>課題解決のために、システムにせよ、サービスにせよ、目に見えるデザインと、目に見えないデザインをどちらも究極まで詰め、仕上げます</p></td>
                            <td style={{width:"170px"}}> <p style={{lineHeight: "2", letterSpacing: "2px",color:"#fff"}}>システムであれば、最適なチームで迅速にシステムを構築し、事業開発であれば最適なチームと最速で実行に移します。スピードが重要です。</p></td>
                            <td style={{width:"170px"}}><p style={{lineHeight: "2", letterSpacing: "2px",color:"#fff"}}>商品やコンサルを納品して終わりではありません。無期限でお客様のサポートをさせていただきます。</p></td>
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
            <div className="service__webpageDesigne">
                <div className="service__webpageDesigne__left">
                    <p onClick={webaPageData} className='service__webpageDesigne__left__circle'><img src="images/jpy/web1.png" alt="" /></p>
                    <p onClick={reactNativeData} className='service__webpageDesigne__left__circle'><img src="images/jpy/web2.png" alt="" /></p>
                    <p onClick={() => { setWebpage('dataHidden'); setWebthree('dataHidden'); setApplication('datashow'); setBlockchain('dataHidden'); setReactNative('dataHidden') }} className='service__webpageDesigne__left__circle'><img src="images/jpy/web3.png" alt="" /></p>
                    <p onClick={() => { setWebpage('dataHidden'); setWebthree('dataHidden'); setApplication('dataHidden'); setBlockchain('datashow'); setReactNative('dataHidden') }} className='service__webpageDesigne__left__circle'><img src="images/jpy/web4.png" alt="" /></p>
                    <p onClick={() => { setWebpage('dataHidden'); setWebthree('datashow'); setApplication('dataHidden'); setBlockchain('dataHidden'); setReactNative('dataHidden') }} className='service__webpageDesigne__left__circle'><img src="images/jpy/web5.png" alt="" /></p>
                </div>
                <div className="service__webpageDesigne__rightBox">

                    <div data-aos="fade-up" className={`${Reactnative}`}>
                        <h3>REACT NATIVE</h3>
                        <p className='' >ホームページやサービスページの作成は、一見簡単そうに見えて簡単ではありません。どういったユーザーをターゲトにするのか、何を目的にするのか。そういった重要な情報をもとに、デザインだけでなく、ウェブページの裏に仕込む仕組みが大きく変わってきます。そのため、繰り返しヒアリングさせていただき、御社に最適なランディングページやホームページを制作させていただきます。デザインにももちんこだわっています。</p>
                    </div>
                    <div data-aos="fade-up" className={`${Webpage}`}>
                        <h3>WEB PAGE</h3>
                        <p className='' >ホームページやサービスページの作成は、一見簡単そうに見えて簡単ではありません。どういったユーザーをターゲトにするのか、何を目的にするのか。そういった重要な情報をもとに、デザインだけでなく、ウェブページの裏に仕込む仕組みが大きく変わってきます。そのため、繰り返しヒアリングさせていただき、御社に最適なランディングページやホームページを制作させていただきます。デザインにももちんこだわっています。</p>
                    </div>
                    {/* <div data-aos="fade-up" className={`${application}`}>
                        <h3>APPLICATON</h3>
                        <p className='' >ホームページやサービスページの作成は、一見簡単そうに見えて簡単ではありません。どういったユーザーをターゲトにするのか、何を目的にするのか。そういった重要な情報をもとに、デザインだけでなく、ウェブページの裏に仕込む仕組みが大きく変わってきます。そのため、繰り返しヒアリングさせていただき、御社に最適なランディングページやホームページを制作させていただきます。デザインにももちんこだわっています。</p>
                    </div>
                    <div data-aos="fade-up" className={`${Blockchain}`}>
                        <h3>BLOCKCHAIN</h3>
                        <p className='' >ホームページやサービスページの作成は、一見簡単そうに見えて簡単ではありません。どういったユーザーをターゲトにするのか、何を目的にするのか。そういった重要な情報をもとに、デザインだけでなく、ウェブページの裏に仕込む仕組みが大きく変わってきます。そのため、繰り返しヒアリングさせていただき、御社に最適なランディングページやホームページを制作させていただきます。デザインにももちんこだわっています。</p>
                    </div>
                    <div data-aos="fade-up" className={`${webthree}`}>
                        <h3>WEB 3.O</h3>
                        <p className='' >ホームページやサービスページの作成は、一見簡単そうに見えて簡単ではありません。どういったユーザーをターゲトにするのか、何を目的にするのか。そういった重要な情報をもとに、デザインだけでなく、ウェブページの裏に仕込む仕組みが大きく変わってきます。そのため、繰り返しヒアリングさせていただき、御社に最適なランディングページやホームページを制作させていただきます。デザインにももちんこだわっています。</p>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Service2