import React from 'react'
import { Link } from 'react-router-dom'

function TermsConditions() {
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
                        <h2>Terms & Conditions</h2>
                        <ol>
                            <li>
                                <h2>Introduction
                                </h2>
                                <p>These terms and conditions govern your use of the chatsappo service provided by Inciem, hereafter referred to as "the Service," which integrates with WhatsApp messaging platform, powered by ChatGPT, a product of OpenAI. By accessing or using the Service, you agree to be bound by these terms and conditions. </p>
                            </li>
                            <li>
                                <h2>User Responsibilities
                                </h2>
                                <p>
                                    <ul>
                                        <li>You agree to use the Service in compliance with all applicable laws and regulations. </li>
                                        <li>You will not use the Service for any unlawful or unauthorized purposes. </li>
                                        <li>You are responsible for maintaining the security of your WhatsApp account and any interactions with the chatbot initiated from your account.</li>
                                    </ul>
                                </p>
                            </li>
                            <li>
                                <h2>Privacy Policy
                                </h2>
                                <p>Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and disclose your personal information in connection with the Service. </p>
                            </li>
                            <li>
                                <h2>Modifications to the Service
                                </h2>
                                <p>we reserves the right to modify, suspend, or discontinue the Service at any time without prior notice. </p>
                            </li>
                            <li>
                                <h2>Contact Information </h2>
                                <p>If you have any questions about these terms and conditions, please contact us at [Your Contact Information]. </p>
                            </li>
                            <li>
                                <h2>Acceptance of Terms
                                </h2>
                                <p>By accessing or using the Service, you agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, you may not use the Service. </p>
                            </li>
                        </ol>
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

export default TermsConditions