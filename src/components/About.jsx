import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <div class="container-fluid header headerinner">
            <div class="container">
                <div class="row">
                   {/* Logo */}
                    <div class="col-md-6 col-4">
                        
                        <Link to={"/"} className='logo'>
                            <img src="./assets/images/logo.png" class="img-fluid" alt="" />
                        </Link>
                    </div>
                    {/* Buttons */}
                    <div class="col-md-6 col-8">
                         {/* <a href="" class="btn">Log out</a> */}
                        {/* <a href="" class="btn">Sign up</a> */}
                    </div>
                </div>
            </div>
        </div>
        {/* Header end */}

        {/* Chat box */}
        <div class="container-fluid innercontent chatbox">
            <div class="container">
                <div class="row">
                    <div class="col-10 mx-auto">
                        {/* <img src="/images/about.jpg" class="img-fluid" alt="">*/}
                        <img src="./assets/images/about.jpg" class="img-fluid" alt=""/>
                        <h2>About Chatsappo</h2>
                        <p>Welcome to Chatsappo, we're passionate about transforming how people use technology to communicate with one another. Our platform is committed to using artificial intelligence to provide cutting-edge solutions that improve user experience, increase productivity, and speed up activities. To use the Chatsappo WhatsApp bot, user have an active WhatsApp account, and add the bot's phone number as a contact.AI in whatsapp provides a wide range of benefits for users. The possibilities are endless, ranging from AI-powered chatbots that provide immediate customer care to customized suggestions based on each user's interests. This process allows for seamless communication between users on WhatsApp and the chatbot, enabling natural language interactions and responses powered by ChatGPT's AI capabilities. </p>
                    </div>
                </div>
            </div>
        </div>
       {/* Chat box end */}

    {/* Footer */}
    <div class="container-fluid footer">
        <div class="container">
            <div class="row">
                <div class="col-md-10 mx-auto">
                    <div class="row">
                        {/* Footer Logo */}
                <div class="col-md-4 col-12">
                    
                    <Link to={"/"}>
                        <img src="./assets/images/logo.png" class="img-fluid" alt=""/>
                    </Link>
                </div>
                {/* Menu */}
                <div class="col-md-8 col-12">
                    <ul class="main">
                        <li>
                            <Link to={"/about"}>About us</Link>
                        </li>
                        <li>
                            
                            <Link to={"/privacy"}>Privacy policy</Link>
                        </li>
                        <li>
                            <Link to={"/terms"}>Terms & conditions</Link>
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

export default About