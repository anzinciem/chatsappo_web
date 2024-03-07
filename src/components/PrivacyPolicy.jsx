import React from 'react'
import { Link } from 'react-router-dom'

function PrivacyPolicy() {
  return (
    <div>
        {/* Header */}
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
                        {/* <a href="" class="btn">Log out</a>
                   <a href="" class="btn">Sign up</a> */}
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
                        <h2>Privacy Policy</h2>
                        <p>we take your privacy seriously. This Privacy Policy outlines the types of personal information we collect and how we use it. </p>
                        <h2>Information we collect</h2>
                        <ol>
                            <li>
                                <p>Personal Information
                                    : The chatbot may collect personal information provided by users, such as names and age, to personalize interactions and maintain a record of conversations. </p>
                            </li>
                            <li>
                                <p>Messaging Data
                                    : All messages exchanged between the user and the chatbot may be logged for analysis and improvement of the chatbot's performance. </p>
                            </li>
                            <li>
                                <p>Usage Data
                                    : The chatbot may collect data on user interactions, such as date and, session duration. </p>
                            </li>
                        </ol>
                        <h2>How We Use Information</h2>
                        
                           <h5>Service Improvement:</h5>
                        <p>Conversation data collected may be analysed to improve the functionality and performance of our chatbot service. This analysis helps us understand user behaviour and preferences, allowing us to optimize the chatbot's responses and capabilities. 
                        </p>

                        <h2>Data Storage</h2>
                        <p>User data collected during interactions with the chatbot is stored on secure servers hosted by reputable cloud service providers. </p>
                       
                        <h2>Changes to This Privacy Policy 
                            Updates</h2>
                        <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy. </p>
                    
                        <h2>Contact Us </h2>
                        <p>If you have any questions or concerns about this Privacy Policy or our practices, please contact us at <a href='Info@chatsappo.com'>Info@chatsappo.com</a>.</p> 
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
    {/* Copy right end */}
    </div>
  )
}

export default PrivacyPolicy