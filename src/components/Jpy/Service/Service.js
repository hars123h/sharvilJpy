import React, { useState } from 'react'
import './Service.css'
import "../../../pages/Jpy/Jpy.css"
import img1 from "../../../img/jpy/service2.png"
import Contact from '../Contact/Contact'
import { CSSTransition } from 'react-transition-group';
import webPagedata from "./Webdata.js"


const Service = () => {
  const [calssName, setClassName] = useState("dataHidden")
  const [WebData, setWebData] = useState(webPagedata[0])
  console.log(WebData.para);
  return (
    <>
      <div className="shadow">

      </div>
      <div className="service">
        <div className="jpy_serviceWrapper">
          <div data-aos="slide-right" className="jpy_serviceCard1">
            <h2>IT DEVELOPMENT</h2>
            <div className="jpy_serviceCard__para">
              <p>システム開発全般を経験豊富なエンジニアチ<br />ームを駆使して、実行することが可能です。<br /> AIからDX化のための複雑なシステムまで, <br /> さらに最新のWeb3関連の開発も可能です。<br /> ヒアリングをベースに、お客様に最適な解決 <br /> 策 をシステムで実現することができます。</p>
            </div>
          </div>
          <div data-aos="fade-up" className="jpy_serviceCard2__center">
            <div className="jpy_serviceCard2">
              <h2>BUSINESS CONSULTING</h2>
              <div className="jpy_serviceCard__para">
                <p>0から事業を作り上げるところから、既存の<br /> 事業をさらに広い観点から成長させるところ <br /> まで幅広くサポートさせていただくことがで <br /> きます。すでに多くの領域で事業展開をサポ <br /> ートしてきたコンサルタントが併走し、お客 <br /> 様の事業のさらなる成長をサポートします。</p>
              </div>
            </div>
          </div>
          <div data-aos="slide-left" className="jpy_serviceCard2__right">
            <div className="jpy_serviceCard3">
              <h2>{}</h2>
              <div className="jpy_serviceCard__para">
                <p>弊社の世界中に広がる強いネットワークを活用し、御 社の既存事業を世界各地に広げることをサポートさせ ていただきます。UAEからEU,またはアジア地域での さらなる顧客獲得をお手伝いいたします。言語に関し ても、全く問題なく世界中お客様の事業を広げます。</p>
              </div>
            </div>
          </div>
        </div>
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
        <Contact />
      </div>
    </>
  )
}

export default Service;