import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='container'>
            <div className='form-container'>
                <form >
                    <h1><span>Contact</span>Us</h1>
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder='Enter Your name' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="Email" placeholder='Enter Your email' />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea  rows="10" placeholder='Type here'/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
