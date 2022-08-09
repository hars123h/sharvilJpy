import React, { useState } from 'react'
import "./Contact.css";
import axios from "axios";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Contact() {

    const [formObj, setFormObj] = useState({
        companyName: "",
        name: "",
        email: "",
        phone: "",
        message: "",
    })
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const sendContactMail = async (e) => {
        e.preventDefault()
        if (!isValidEmail(formObj.email)) {
            toast.error("Please enter a valid email address")
        }
        else {
            const response = await axios({
                method: "post",
                url: "https://formspree.io/f/mzboynnq",
                data: {
                    ...formObj
                }
            })

            if (response.status === 200) {
                setFormObj({ companyName: "", name: "", email: '', phone: '', message: "" })
                toast.success("Your mail is sent. We will contact you as soon as possible.")
                console.log("Your mail is sent. We will contact you as soon as possible.")
            }
            else {
                toast.error("Oops. Something went wrong")
                console.log("Oops. Something went wrong")

            }
        }

    }

    const handleChange = event => {
        // if (!isValidEmail(event.target.value)) {
        //     toast.error("Not a ValidEmail")
        // } 

        setFormObj({ ...formObj, email: event.target.value })
    };
    return (
        <div id='contact' className='jpyContact__container'>
            <ToastContainer
                theme='colored'
            />
            <div className="jpyContact">

                <form >
                    <h2>CONTACT</h2>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">貴社名</label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                placeholder='貴社名'
                                name="companyName"
                                value={formObj.companyName}
                                onChange={e => setFormObj({ ...formObj, companyName: e.target.value })}
                                readonly class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">ご担当者名</label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                placeholder='ご担当者名'
                                name="name"
                                value={formObj.name}
                                onChange={e => setFormObj({ ...formObj, name: e.target.value })}
                                class="form-control"
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">電話番号</label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                placeholder='電話番号'
                                name="phone"
                                value={formObj.phone}
                                onChange={e => setFormObj({ ...formObj, phone: e.target.value })}
                                class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-email">メールアドレス</label>
                        <div class="col-sm-10">
                            <input
                                type="email"
                                placeholder='メールアドレス'
                                name="email"
                                value={formObj.email}
                                onChange={handleChange}
                                class="form-control"
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">お問い合わせ内容</label>
                        <div class="col-sm-10">
                            <textarea
                                type="text"
                                placeholder='お問い合わせ内容'
                                name="message"
                                value={formObj.message}
                                onChange={e => setFormObj({ ...formObj, message: e.target.value })}
                                class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row jpyContact__button">
                        <label class="col-sm-2 col-form-label"></label>
                        <div class="col-sm-10">
                            <button onClick={sendContactMail}>送信</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="jpyBottomNav">

                <ul>
                    <li className="nav-item">
                        <a className="nav-link  pagescroll" href="#heroSection">Home</a>
                    </li>
                    <li >
                        <a className="nav-link pagescroll scrollupto" href="#about">About Us</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link pagescroll" href="#process">Process</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link pagescroll" href="#contact">Contact Us</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link pagescroll" href="#service">Services</a>
                    </li>
                  
                </ul>

            </div>

        </div >
    )
}

export default Contact