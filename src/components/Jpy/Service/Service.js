import React from 'react'
import './Service.css'
import img1 from "../../../img/jpy/service2.png"
import Contact from '../Contact/Contact'

const Service = () => {
  return (
    <>
      <div className="service">
        <div className="jpy_serviceWrapper">
          <div className="jpy_serviceCard1">
            <h2>IT DEVELOPMENT</h2>
            <div className="jpy_serviceCard__para">
              <p>システム開発全般を経験豊富なエンジニアチームを駆使して、実行することが可能です。 AIからDX化のための複雑なシステムまで, さらに最新のWeb3関連の開発も可能です。 ヒアリングをベースに、お客様に最適な解決策をシステムで実現することができます。</p>
            </div>
          </div>
          <div className="jpy_serviceCard2__center">
            <div className="jpy_serviceCard2">
              <h2>BUSINESS CONSULTING</h2>
              <div className="jpy_serviceCard__para">
                <p>0から事業を作り上げるところから、既存の事業をさらに広い観点から成長させるところまで幅広くサポートさせていただくことができます。すでに多くの領域で事業展開をサポートしてきたコンサルタントが併走し、お客様の事業のさらなる成長をサポートします。</p>
              </div>
            </div>
          </div>
          <div className="jpy_serviceCard2__right">
            <div className="jpy_serviceCard3">
              <h2>GLOBAL BUSINESS</h2>
              <div className="jpy_serviceCard__para">
                <p>0から事業を作り上げるところから、既存の事業をさらに広い観点から成長させるところまで幅広くサポートさせていただくことができます。すでに多くの領域で事業展開をサポートしてきたコンサルタントが併走し、お客様の事業のさらなる成長をサポートします。</p>
              </div>
            </div>
          </div>
        </div>
        <div className="jpy_serviceWrapper2">
          <div className="jpy_serviceWrapper2__cards">
            <div className="jpy_serviceWrapper2__card">
              <div className="jpy_serviceWrapper2__card__circle">
                <p>01</p>
              </div>
              <h3>ヒアリング</h3>
              <p>まずは、お客様の持っていらっしゃる課題をとにかく深掘りします。課題を明確にし、解決をサポートできる最適なチームをセットします。</p>
            </div>
            <div className="jpy_serviceWrapper2__card">
              <div className="jpy_serviceWrapper2__card__circle">
                <p>02</p>
              </div>
              <h3>戦略策定</h3>
              <p>発見し、明確に言語化した課題を解決するための戦略を策定していきます。もちろんですが、お客様と綿密に打ち合わせを重ねていきます。</p>
            </div>
            <div className="jpy_serviceWrapper2__card">
              <div className="jpy_serviceWrapper2__card__circle">
                <p>03</p>
              </div>
              <h3>デザイン</h3>
              <p>課題解決のために、システムにせよ、サービスにせよ、目に見えるデザインと、目に見えないデザインをどちらも究極まで詰め、仕上げます</p>
            </div>
            <div className="jpy_serviceWrapper2__card">
              <div className="jpy_serviceWrapper2__card__circle">
                <p>04</p>
              </div>
              <h3>開発・実行</h3>
              <p>システムであれば、最適なチームで迅速にシステムを構築し、事業開発であれば最適なチームと最速で実行に移します。スピードが重要です。</p>
            </div>
            <div className="jpy_serviceWrapper2__card">
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
            <p className='service__webpageDesigne__left__circle'>😍</p>
            <p className='service__webpageDesigne__left__circle'>🤖</p>
            <p className='service__webpageDesigne__left__circle'>🤡</p>
            <p className='service__webpageDesigne__left__circle'>👺</p>
            <p className='service__webpageDesigne__left__circle'>😎</p>
          </div>
          <div className="service__webpageDesigne__rightBox">
            <h2>WEBPAGE DESIGN</h2>
            <p>ホームページやサービスページの作成は、一見簡単そうに見えて簡単ではありません。どういったユーザーをターゲトにするのか、何を目的にするのか。そういった重要な情報をもとに、デザインだけでなく、ウェブページの裏に仕込む仕組みが大きく変わってきます。 そのため、繰り返しヒアリングさせていただき、御社に最適なランディングページやホームページを制作させていただきます。デザインにももちんこだわっています。</p>
          </div>
        </div>
        <Contact/>
      </div>
    </>
  )
}

export default Service;