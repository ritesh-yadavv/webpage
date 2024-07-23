import React from 'react';
import './style_contact.css';

const Contact = () => {
    return(
        <section id="fancy-form">
            <div className="container">
                <div className="form-sections">
                    <div className="Form-left">
                    <div className='box'>
                    <h4>ADDRESS</h4>
                        <p>123, Main Street, New York 1001</p>
                        <br/>
                        <h4>PHONE</h4>
                        <span>(+1)123 456 7890</span>
                        <br /><br />
                        <h4>EMAIL</h4>
                        <span>Jhondoe@gmail.com</span>
                        <br />
                    </div>
                    </div>
                
                    {/* form right */}
                    <div class="Form-right">
                        <h1>Send Us Message</h1>
                        <form >
                            <h5>TELL US YOUR NAME *</h5>
                            <input type="text" /><br /><br />
                            <h5>ENTER YOUR EMAIL *</h5>
                            <input type="email" /><br /><br />
                            <h5>ENTER PHONE NUMBER </h5>
                            <input type="number" /><br /><br />
                            <h5> MESSAGE *</h5>
                            <textarea name="" id="" cols="50" rows="7"></textarea><br />
                            <button>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;