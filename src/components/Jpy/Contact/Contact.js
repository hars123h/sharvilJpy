import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <div id='contact' className='jpyContact__container'>
            <div className="jpyContact">
                <h2>CONTACT</h2>
                <form>
                    <div className="jpyContact__input">
                        <h3>貴社名</h3>
                        <input className='jpyContact__input1' type="text" />
                    </div>
                    <div className="jpyContact__input">
                        <h3>ご担当者名</h3>
                        <input className='jpyContact__input2' type="text" />
                    </div>
                    <div className="jpyContact__input">
                        <h3>電話番号</h3>
                        <input className='jpyContact__input3' type="text" />
                    </div>
                    <div className="jpyContact__input">
                        <h3>メールアドレス</h3>
                        <input className='jpyContact__input4' type="email" />
                    </div>
                    <div className="jpyContact__input">
                        <h3>お問い合わせ内容</h3>
                        <textarea style={{
                            flex: ".5",
                            width: "100%",
                            background: "white",
                            boxShadow: " 5px 5px 5px #00000029",
                            borderRadius: "17px",
                            border: "none",
                            outline: "none",
                            padding: " 5px"
                        }} type="text"></textarea>
                    </div>
                </form>
            </div>
            <div className="jpyBottomNav">

                <ul className=" "  >
                    <li >
                        <a className="nav-link  pagescroll" href="#home">Home</a>
                    </li>
                    <li >
                        <a className="nav-link pagescroll scrollupto" href="#about">About Us</a>
                    </li>

                    <li >
                        <a className="nav-link pagescroll" href="#portfolio">Portfolio</a>
                    </li>

                    <li >
                        <a className="nav-link pagescroll" href="#contact">Contact Us</a>
                    </li>
                </ul>

            </div>

        </div >
    )
}

export default Contact