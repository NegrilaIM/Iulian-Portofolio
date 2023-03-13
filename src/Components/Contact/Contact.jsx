import React, { useState } from 'react'
import contact1 from '../../Assets/contact1.png'
import "./Contact.css"

const Contact = () => {

    const [data, setData] = useState({
        fillname: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    })

    const InputEvent = (event) => {
        const {name,value} = event.target

        setData((preVal) => {
            return {
                ...preVal,
                [name]:value,
            }
        })
    }
  
    const formSubmit = (event) => {
        event.preventDefault()
        alert(
        `My name is ${data.fullname}. 
        My phone number is ${data.phone}. 
        My email address is ${data.email}. 
        My Subject on  ${data.subject}. 
        Here is my message I want to say : ${data.message}. 
        `
        )
      }


  return (
    <div>
        <section className="Contact" id='contact'>
            <div className="container top">
                <div className="heading text-center">
                    <h4>CONTACT</h4>
                    <h1>Contact With Me</h1>
                </div>
                <div className="content d_flex">
                    <div className="left">
                        <div className="box box_shadow">
                            <div className="img">
                                <img src={contact1} alt="" />
                            </div>
                            <div className="details text-center">
                                <h1>Negrila Iulian</h1>
                                <p>I'm available for work.</p>
                                <p>Phone: +40731689359</p>
                                <p>Email: negrilaim@gmail.com</p><br />
                                <p className='text-center'>OR FIND ME AT:</p><br />
                                <div className="button f_flex f_flex_center">
                                    <button className='btn_shadow'>
                                        <i className='fab fa-facebook-f'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-instagram'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-linkedin-in'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right box_shadow">
                        <form onSubmit={formSubmit}>
                            <div className="f_flex">
                                <div className="input row">
                                    <span>Your Name</span>
                                    <input type="text" name='fullname' value={data.fullname} onChange={InputEvent} />
                                </div>
                                <div className="input row">
                                    <span>Phone Number</span>
                                    <input type="text" name='phone' value={data.phone} onChange={InputEvent} />
                                </div>
                            </div> 
                                <div className="input ">
                                    <span>Email</span>
                                    <input type="email" name='email' value={data.email} onChange={InputEvent} />
                                </div>
                                <div className="input ">
                                    <span>Subject</span>
                                    <input type="text" name='subject' value={data.subject} onChange={InputEvent} />
                                </div>
                                <div className="input ">
                                    <span>Your Message</span>
                                    <textarea name="message" cols="30" rows="7" value={data.message} onChange={InputEvent}></textarea>
                                </div>
                                <button className='btn_shadow'>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact