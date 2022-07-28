import React, { useState } from 'react'
import './Service.css'
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
              <h2>GLOBAL BUSINESS</h2>
              <div className="jpy_serviceCard__para">
                <p>弊社の世界中に広がる強いネットワークを活用し、御 社の既存事業を世界各地に広げることをサポートさせ ていただきます。UAEからEU,またはアジア地域での さらなる顧客獲得をお手伝いいたします。言語に関し ても、全く問題なく世界中お客様の事業を広げます。</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default Service;