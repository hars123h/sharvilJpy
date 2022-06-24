import React,{useState} from 'react'
import './Contact.css'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
    const [formObj,setFormObj]=useState({
        name:"",
        email:"",
        phone:"",
        message:"",
    })

    const sendContactMail=async(e)=>{
        e.preventDefault()
        const response=await axios({
            method:"post",
            url:"https://formspree.io/f/mzboynnq",
            data:{
                ...formObj
            }
        })
        if(response.status===200){
            setFormObj({name:"",email:'', phone: '', message:""})
            toast.success("Your mail is sent. We will contact you as soon as possible.")
            console.log("Your mail is sent. We will contact you as soon as possible.")
        }else{
            toast.error("Oops. Something went wrong")
            console.log("Oops. Something went wrong")

        }
    }

    return (
        <>
            <section id="contact" className="contactSection contactSection-center-bg dtr-py-100" >
            <ToastContainer
        theme='colored'
      />

                <div className="container">


                    <div className="row">
                        <h2 className="text-center my-3">FAQ</h2>

                       
                        <div className="row dtr-mt-100">
                            <div className="col-12 col-lg-6 ">
                                <div className="dtr-small-box dtr-rounded bg-red">
                                    <h3 className="color-white mb-3">Contact Us</h3>

                                    <form id="contactform">
                                        <fieldset>
                                            <div className="mb-3">

                                                <input type="text" 
                                                className="form-control inputBg"
                                                placeholder="Name"

                                                name="name"
                                                value={formObj.name}
                                                  onChange={e=>setFormObj({...formObj,name:e.target.value})}
                                                 
                                                  />

                                            </div>
                                            <div className="mb-3">

                                                <input type="email"
                                                 className="form-control inputBg"
                                                  placeholder="Email" 
                                                      
                                                name="email"
                                                value={formObj.email}
                                                  onChange={e=>setFormObj({...formObj,email:e.target.value})}
                                                  />

                                            </div>
                                            <div className="mb-3">

                                                <input type="text"
                                                 className="form-control inputBg" 
                                                 placeholder="Phone"
                                                 
                                                name="phone"
                                                value={formObj.phone}
                                                  onChange={e=>setFormObj({...formObj,phone:e.target.value})}
                                                  />

                                            </div>

                                            <div className="mb-3">

                                                <textarea 
                                                className="form-control inputBg"
                                                 placeholder="Message..." rows="3"
                                                 
                                                name="message"
                                                value={formObj.message}
                                                  onChange={e=>setFormObj({...formObj,message:e.target.value})}
                                                 
                                                 >

                                                 </textarea>

                                            </div>

                                            <p>
                                                <button className="btn btnCustom" onClick={sendContactMail}>Request A Callback</button>
                                            </p>
                                            <div id="contactresult"></div>
                                        </fieldset>
                                    </form>





                                    <p className="text-size-sm color-white dtr-mt-10">*Your information is protected by Sharvil <a href="#" className="text-decoration-underline">Privacy Policy</a>.</p>
                                </div>


                            </div>
                            <div className="col-12 col-lg-6">
                              
                                <div >

                                    <p className="dtr-tagline color-red">Commonly Asked Questions</p>
                                    {/* <h2 className="contactSection-heading"></h2> */}


                                    <div className="dtr-accordion accordion dtr-mt-30" id="accordion1">


                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Can you help my current site look more professional?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                   
                                                Yes. Give us your requirements and we have experienced expertise to help you give a new professional look that really whistles!
                                                </div>
                                            </div>
                                        </div>
                                       


                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="accordion1-headingTwoone">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion1-collapseTwo2" aria-expanded="false" aria-controls="accordion1-collapseTwo2">
                                                What If I am not satisfied by your service?
                                                 </button>
                                            </h2>
                                            <div id="accordion1-collapseTwo2" className="accordion-collapse collapse" aria-labelledby="accordion1-headingTwoone" data-bs-parent="#accordion1">
                                                <div className="accordion-body">
                                                Oh No! We really don’t hope for that. But as per our business agreement and policy, the unsatisfied customer will be paid off within 90 days(It normally takes that time to get our accounts set right and return the funds to you).
                                            </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="accordion1-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion1-collapseTwo" aria-expanded="false" aria-controls="accordion1-collapseTwo">
                                                Why should I hire a professional web development company like Sharvil ?
                                                 </button>
                                            </h2>
                                            <div id="accordion1-collapseTwo" className="accordion-collapse collapse" aria-labelledby="accordion1-headingTwo" data-bs-parent="#accordion1">
                                                <div className="accordion-body">
                                                With the tools and development kits available in the web, anyone with little or no knowledge about web development could create a website and have it up and running in minutes. So, what is it that the professional web development companies offer?

These companies provide best-in-class web development solutions, adopting the latest development tools
 and strategies to ensure that the look-and-feel of your website not only attracts more visitors but also allures them to pay a visit often. The web development professionals have the ability of transforming your business ideas into innovative and intuitive websites that helps you reach out to your 
customers in the perfect way.
                                                 </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="accordion1-headingThree">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion1-collapseThree" aria-expanded="false" aria-controls="accordion1-collapseThree">
                                                What is your response turnaround time?
                                                </button>
                                            </h2>
                                            <div id="accordion1-collapseThree" className="accordion-collapse collapse" aria-labelledby="accordion1-headingThree" data-bs-parent="#accordion1">
                                                <div className="accordion-body">We will respond to all the emails quickly. Approximately the first response can be expected within 90 minutes in our working hours. Within 24 hours all the first responses will be executed.
                                                
                                                </div>
                                            </div>
                                        </div>





                                    </div>


                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact
