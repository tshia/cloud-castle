import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function ContactUs(){
    return(
        <div>
            <div>
                <ul className='navbar'>
                    <li><Link className="home-link" href="/">Cloud Castle</Link></li>
                    <li><Link className="contact-link active" href="/contact">Contact Us</Link></li>
                    <li><Link className="login-link" href="/login">Login</Link></li>
                </ul>
            </div>
            <div className='contact'>
                <Image className='contact-image'src="/pcs.jpg" layout='fill' objectFit='cover' quality={100} alt="desk with laptops"/>
                <div className="contact-heading">
                    <div className=" contact-us text-5xl font-bold m-1">Contact Us</div>
                    <div className="text-2xl">Get in touch with us. Your feedback, questions and suggestions are important to us.</div>
                    <div className="text-2xl">Please feel free to contact us or submit any inquiries through the following channels.</div>
                </div> 
                

                <div className="contact-section">
                    <div className="contact-details">
                        <div className="contact-whatsapp">
                            <div><Image className="inline m-1 p-1" src='/whatsappg.png' width={40} height={40} alt='whatsapp'/></div>
                            <div>
                                <div className="font-bold">Whatsapp</div>
                                <div>+27825777887</div>
                                <div>+27719338875</div>
                            </div>
                        </div>
                        
                        <div className="contact-email">
                            <div><Image className="inline m-1 p-1" src='/email.png'width={40} height={40} alt='email'/></div>
                            <div>
                                <div className="font-bold">Email</div>
                                <div>cloudcastle@bizania.africa</div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="contact-submit">
                        <div>
                            <input type="text" className='name' placeholder="Full name"/> 
                        </div>
                        <div>
                            <input type='email' className="email" placeholder="Email"/> 
                        </div>
                        <div>
                            <textarea name='message' rows={4} placeholder="Type message"/>
                        </div>
                        <div id='send'>
                            <button className='btn-send'>Send</button>
                        </div>
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