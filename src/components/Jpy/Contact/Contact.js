import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <div id='contact' className='jpyContact__container'>

            <div className="jpyContact">

                <form >
                    <h2>CONTACT</h2>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">貴社名</label>
                        <div class="col-sm-10">
                            <input type="text" placeholder='貴社名' readonly class="form-control-plaintext"   />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label  class="col-sm-2 col-form-label">ご担当者名</label>
                        <div class="col-sm-10">
                            <input type="text" placeholder='ご担当者名' class="form-control"   />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label  class="col-sm-2 col-form-label">電話番号</label>
                        <div class="col-sm-10">
                            <input type="text" placeholder='電話番号' class="form-control"   />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">メールアドレス</label>
                        <div class="col-sm-10">
                            <input type="Email" placeholder='メールアドレス' class="form-control"  />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label  class="col-sm-2 col-form-label">お問い合わせ内容</label>
                        <div class="col-sm-10">
                            <textarea type="text" placeholder='お問い合わせ内容' class="form-control"  />
                        </div>
                    </div>
                    <div class="form-group row jpyContact__button">
                        <label  class="col-sm-2 col-form-label"></label>
                        <div class="col-sm-10">
                            <button>送信</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="jpyBottomNav">

                <ul>
                    <li className="nav-item">
                        <a className="nav-link  pagescroll" href="#home">Home</a>
                    </li>
                    <li >
                        <a className="nav-link pagescroll scrollupto" href="#about">About Us</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link pagescroll" href="#portfolio">Portfolio</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link pagescroll" href="#contact">Contact Us</a>
                    </li>
                </ul>

            </div>

        </div >
    )
}

export default Contact