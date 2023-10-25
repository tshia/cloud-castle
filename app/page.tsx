import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  return (
    <main>
      <ul>
        <li><Link className="home-link home" href="/">Cloud Castle</Link></li>
        <li><Link className="product-link" href="/products">Products</Link></li>
        <li><Link className="about-link" href="/about">About</Link></li>
        <li><Link className="contact-link" href="/contact">Contact Us</Link></li>
        <li><Link className="login-link" href="/login">Login</Link></li>
      </ul>

      <div className="welcome">
        <div className="message">
          <p className="heading text-5xl font-bold">Welcome to our web hosting service</p>
          <p className="heading p-2">Join our hosting family today and experience the power of seamless performance, top-notch security, and unbeatable affordability. Explore how our services can benefit you</p>
          <button className="btn-plan">See Plans</button>
        </div>
        <div id="img"><Image src="/pcs.jpg" width={600} height={500} alt="desk with laptops"/></div>
      </div>
      

      <div className="packages">

        <div className='content-creator'>
          <p className="text-2xl p-1">Content Creators</p>
          <span className="text-2xl p-1 font-bold">R150</span><span className="month font-bold">/per month</span>
          <p>20GB SSD Storage</p>
          <p>100 Email Accounts</p>
          <p>Host 2 Domains</p>
          <p>50 Subdomains</p>
          <p>Unlimited Web Traffic</p>
          <p>5 MySQL Databases</p>
          <p>1GB RAM</p>
          <p>Free Setup</p>
          <p>25/7 Support Service</p>
          <p>Secure Security</p>
          <button className='btn-option'>Get Started</button>
        </div>
        
        <div className='small-medium'>
          <p className="text-2xl p-1">Small Medium Business</p>
          <span className="text-2xl p-1 font-bold">R200</span><span className="month font-bold">/per month</span>
          <p>40GB SSD Storage</p>
          <p>500 Email Accounts</p>
          <p>Host 5 Domains</p>
          <p>100 Subdomains</p>
          <p>Unlimited Web Traffic</p>
          <p>50 MySQL Databases</p>
          <p>1GB RAM</p>
          <p>Free Setup</p>
          <p>25/7 Support Service</p>
          <p>Secure Security</p>
          <button className='btn-option'>Get Started</button>
        </div>

        <div className='web-developer'>
          <p className="text-2xl p-1">Web Developers</p>
          <span className="text-2xl p-1 font-bold">R300</span><span className="month font-bold">/per month</span>
          <p>100GB SSD Storage</p>
          <p>Unlimited Email Accounts</p>
          <p>Host 10 Domains</p>
          <p>500 Sub Domains</p>
          <p>Unlimited Web Traffic</p>
          <p>Unlimited MySQL Databases</p>
          <p>2GB RAM</p>
          <p>Free Setup</p>
          <p>25/7 Support Service</p>
          <p>Secure Security</p>
          <button className='btn-option'>Get Started</button>
        </div>
      </div>

      <div className='features'>
        <div id='storage'>
          <Image className='image' src='/hardisk.png' width={80} height={80} alt='storage'/>
          <p className='text font-bold p-2'>SSD Storage</p>
          <p className='describe'>Website storage gives you convenience on a place to store your information including cookies</p>
        </div>
        <div id='email'>
          <Image className='image' src='/mail.png' width={80} height={80} alt='email'/>
          <p className='text font-bold p-2'>Email Configuration</p>
          <p className='describe'>Provides administration for all the email accounts you can create to manage your business</p>
        </div>
        <div id='domain'>
          <Image className='image' src='/browser_1311780.png' width={80} height={80} alt='domain'/>
          <p className='text font-bold p-2'>Domain Registration</p>
          <p className='describe'>Takes care of domains you create and register to the website, which include .co.za, .com, .africa etc.</p>
        </div>
        <div id='database'>
          <Image className='image' src='/database_2609224.png' width={80} height={80} alt='database'/>
          <p className='text font-bold p-2'>Database Storage</p>
          <p className='describe'>Enables you to create database schemas, store information including documents and downloads</p>
        </div>
        <div id='security'>
          <Image className='image' src='/security.png' width={80} height={80} alt='security'/>
          <p className='text font-bold p-2'>Secure Security</p>
          <p className='describe'>With our team we protect the client and customer information to guarantee safety browsing</p>
        </div>
        <div id='support'>
          <Image className='image' src='/customer.png' width={80} height={80} alt='customer'/>
          <p className='text font-bold p-2'>Customer Support</p>
          <p className='describe'>Provides 25/7 customer support which includes customer enquiries, resources provision and technical support </p>
        </div>
      </div>

      <div className='faq-section'>
        <div className='faqs text-3xl text-center font-bold'>Frequently Asked Questions</div>
        <div className='q1'>
          <button className='btn-faq'>1. What is Web Hosting?</button>
          <p className='p2'>Web Hosting is an internet service that allows for your website to be accessible by the public.</p>
        </div>
        <div className='q2'>
          <button className='btn-faq'>2. What kind of web hosting do I need?</button>
          <p className='p2'>The type of web hosting you need depends on what you want to do with your site, whether you are running a small business or for content creation.</p>
        </div>
        <div className='q3'>
          <button className='btn-faq'>3. Can I host multiple domain names with my hosting account?</button>
          <p className='p2'>Our Business Web Hosting plan allows you to host multiple websites. You can also use these plans to set up various names for your site and direct visitors to specific pages.</p>
        </div>
        <div className='q4'>
          <button className='btn-faq'>4. I purchased a hosting package. What now?</button>
          <p className='p2'>You will receive a welcome e-mail with your login credentials. You can also access your account information through the client login here on our site.</p>
        </div>
        <div className='q5'>
          <button className='btn-faq'>5. Who will have the domain ownership if I register a domain name with you?</button>
          <p className='p2'>When you register a domain name with us, you will have full ownership of your domain name.</p>
        </div>
        <div className='q6'>
          <button className='btn-faq'>6. How do I upgrade my web hosting package?</button>
          <p className='p2'>If you need more storage, data transfer capability, or multiple file transfer accounts, log into your account and choose the hosting package to which you would like to upgrade.</p>
        </div>
        <div className='q7'>
          <button className='btn-faq'>7. If I already have a website, can I transfer it to your web hossting?</button>
          <p className='p2'>Relocating your website to Cloud Castle is a simple process. Our support team can help you with this transition should you have any questions or if you encounter any difficulties.</p>
        </div>
      </div>

      <div className='footer'>
        <div className='foot-logo'>
          <div className='text-3xl'>Cloud Castle</div>
          <p>Simplify Your Connection</p>
          <div className='socials'>
            <Image className="inline p-1" src='/fbgold.png' width={30} height={30} alt='facebook'/>
            <Image className="inline p-1" src='/iggold.png' width={30} height={30} alt='instagram'/>
            <Image className="inline p-1" src='/ingold.png' width={30} height={30} alt='linkedin'/>
            <Image className="inline p-1" src='/whatsappg.png' width={30} height={30} alt='whatsapp'/>
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
          <span>Terms of service</span><span>Privacy Policy</span>
        </div>
        
      </div> 
      
    </main>
  )
}
