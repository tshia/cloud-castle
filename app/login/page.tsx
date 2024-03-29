import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage(){
    return(
        <div>
            <div>
                <ul className='navbar'>
                    <li><Link className="home-link" href="/">Cloud Castle</Link></li>
                    <li><Link className="contact-link" href="/contact">Contact Us</Link></li>
                    <li><Link className="login-link active" href="/login">Login</Link></li>
                </ul>
            </div>
            
            <div className='login'>
                <div className='img-2'><Image src="/pcs.jpg" height={700} width={700} alt="desk with laptops"/></div>
                <div className="cred">
                    <div className='lbl'>
                        <label form="username" >Username:</label>
                        <input type="text" className='username'/>
                    </div>
                    <div className='lbl'>
                        <label form='password' >Password:</label>
                        <input type='password' className="pwd"/>
                    </div>
                    <div className="btn-cred">
                        <button className='btn-login'>Log In</button>
                    </div>
                    <div className="forgot-sign">
                        <span><Link href='/passwordreset' className="resetpwd p-2">Forgot Password</Link></span>
                        <span><Link href='/newuser' className="new-user p-2">Sign Up</Link> </span>
                    </div>
                    
                </div>
            </div>

            <div className='footer'>
                <div className='foot-logo'>
                <div className='text-3xl'>Cloud Castle</div>
                <p>Simplify Your Connection</p>
                <div className='socials'>
                    <Image className="inline p-1" src='/fbgold.png' width={40} height={40} alt='facebook'/>
                    <Image className="inline p-1" src='/iggold.png' width={40} height={40} alt='instagram'/>
                    <Image className="inline p-1" src='/ingold.png' width={40} height={40} alt='linkedin'/>
                    <Image className="inline p-1" src='/whatsappg.png' width={40} height={40} alt='whatsapp'/>
                </div>
                </div>
                
                <div className="extras">
                <div className='extra-1'>
                    <p className='font-bold'>PRODUCTS</p>
                    <p>Hosting Pricing Packages</p>
                    <p>Add-Ons Features</p>
                    <p>Business Service Pricing</p>
                </div>
                <div className='extra-2'>
                    <div className='font-bold'>ABOUT</div>
                    <div className='font-bold'>CONTACT US</div>
                    <div className='font-bold'>HELP</div>
                    <div className='font-bold'>FAQs</div>
                    <div className='font-bold'>RESOURCES</div>
                </div>
                
                </div>

                <hr></hr>

                <div className='copyright-stuff text-center p-1'>
                <div>Copyright &copy; - cloudcastle.africa - All Rights Reserved </div>
                <Link className='p-1' href='/terms'>Terms of service</Link><Link className='p-1' href='privacy'>Privacy Policy</Link>
                </div>
                
            </div>
        </div>
    )
}