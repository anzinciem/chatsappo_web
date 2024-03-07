import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <div>
       {/* Header */}
    <div class="container-fluid header">
        <div class="container">
            <div class="row">
                {/* Logo  */}
                <div class="col-md-6 col-6">
                    <div class="row">
                        
                        <Link to={"/"} className='logo'>
                            <img src="./assets/images/logo.png" className='img-fluid' alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Header end  */}

    {/* Hero */}
    <div class="container-fluid hero">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1>You can now connect with your favourite<br/><span>AI Assistant</span> using WhatsApp!</h1>
                    <h2>Using ChatGPT, our WhatsApp chatbot provides instant access to a wealth of information and assistance via your preferred messaging application.</h2>
                </div>
                {/* Whatsapp chat */}
                <div class="col-md-12 col-12 halfbox">
                       
                        <a href="https://api.whatsapp.com/send?phone=+1618328-5200&text=Hi." target="_blank" class="btn mx-auto whatsappchat"><img src="./assets/images/whatsapp.png" class="img-fluid" alt=""/>Get Started!</a>
                </div>
               {/* Whatsapp chat end */}
            </div>
        </div>
    </div>
   {/* Hero end */}

  {/* How its works */}
    <div class="container-fluid works">
        <div class="container">
            <div class="row">
                <div class="col-md-10 mx-auto">
                    <h2>How it's work?</h2>
                    <p>To use the Chatsappo WhatsApp bot, user have an active WhatsApp account, and add the bot's phone number as a contact. Users can easily obtain the necessary information by opening WhatsApp and initiating a conversation with the bot. Chatsappo can personalise the chatbot's responses and provide more relevant information.</p>
                    
                </div>
            </div>
        </div>
    </div>
    {/* How its works end */}

    {/* Footer */}
    <div class="container-fluid footer">
        <div class="container">
            <div class="row">
                <div class="col-md-10 mx-auto">
                    <div class="row">
                         {/* Footer Logo */}
                <div class="col-md-4 col-12">
                    
                    <Link to={'/'}>
                        <img src="./assets/images/logo.png" class="img-fluid" alt=""/>
                    </Link>
                </div>
                {/* Menu */}
                <div class="col-md-8 col-12">
                    <ul class="main">
                        <li>
                            {/* <a href="./about.html">About us</a> */}
                            <Link to="/about">About us</Link>
                        </li>
                        <li>
                            {/* <a href="./privacy_policy.html">Privacy policy</a> */}
                            <Link to="/privacy">Privacy policy</Link>
                        </li>
                        <li>
                            {/* <a href="./terms_conditions.html">Terms & conditions</a> */}
                            <Link to="/terms">Terms & conditions</Link>
                        </li>
                    </ul>
                </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
    {/* Footer end */}

     {/* Copy right */}
    <div class="container-fluid copyright">
        <div class="container">
            <div class="row">
                <div class="col-md-10 mx-auto">
                    <p>&copy; 2023. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>


    </div>
    
  )
}

export default Index