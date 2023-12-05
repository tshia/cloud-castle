import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


export default function Home() {
  return (
    <main>
      <ul className='navbar'>
        <li><Link className="home-link home" href="/">Cloud Castle</Link></li>
        <li><Link className="about-link" href="#about">About</Link></li>
        <li><Link className="contact-link" href="/contact">Contact Us</Link></li>
        <li><Link className="login-link" href="/login">Login</Link></li>
      </ul>

      <div className="welcome">
        <div className="img"><Image src="/pcs.jpg" layout='fill' objectFit='cover' quality={100} alt="desk with laptops"/></div>
        <div className="message">
          <p className="heading text-5xl font-bold">Welcome to our web hosting service</p>
          <p className="heading p-2 text-2xl">Join our hosting family today and experience the power of seamless performance, top-notch security, and unbeatable affordability. Explore how our services can benefit you.</p>
          <button className="btn-plan">See Plans</button>
        </div>
      </div>
      
      <div className="packages">

        <div className='card'>
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
        
        <div className='card'>
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

        <div className='card'>
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
      
        <div className='card'>
          <p className="text-2xl p-1">Add-Ons 1</p>
          <span className="text-2xl p-1 font-bold">R180</span><span className="month font-bold">/per month</span>
          <p>1x SSL Certificate</p>
          <p>IP Addresses</p>
          <p>1x  Website Builder </p>
          <p>Backup Services</p>
          <p>Site security Audits</p>
          <p>SEO Optimization</p>
          <button className='btn-option'>Add On</button>
        </div>

        <div className='card'>
          <p className="text-2xl p-1">Add-Ons 2</p>
          <span className="text-2xl p-1 font-bold">R360</span><span className="month font-bold">/per month</span>
          <p>2x SSL Certificate</p>
          <p>2x IP Addresses</p>
          <p>3x  Website Builder </p>
          <p>Backup Services</p>
          <p>Site security Audits</p>
          <p>SEO Optimization</p>
          <p>Website Analytics</p>
          <button className='btn-option'>Add On</button>
        </div>
      </div>

      <div className="domain">
        <div>
          <p  className='register font-bold text-2xl'>DOMAIN REGISTRATION</p>
          <span className='text-2xl'>Create a unique identity on the internet by finding and registering a unique domain for your business with just a few simple steps.</span>
          <div><button className='btn-option'>Register</button></div>
        </div>
        <div className='img-2'><Image src='/corporate lady.jpg' width={900} height={700} alt='workspace'></Image></div>
        
      </div>

      <div className='business'>
        <div>
          <div className='text-2xl font-bold p-2 text-center'>BUSINESS SERVICE PRICING</div>
          <table className='table-auto'>
            <thead>
              <tr>
                <th>Company Profile</th>
                <th>Business Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='start-up' colSpan={2}>Start-Up</th>
              </tr>
              <tr>
                <td>R1000</td>
                <td>R1000</td>
              </tr>
              <tr>
                <th className='growth'colSpan={2}>Growth</th>
              </tr>
              <tr>
                <td>R1300</td>
                <td>R1500</td>
              </tr>
              <tr>
                <th className='executive' colSpan={2}>Executive</th>
              </tr>
              <tr>
                <td>R2000</td>
                <td>R2500</td>
              </tr>
              <tr>
                <td className='t-features'>
                  <ul className='features-list'>
                    <li>Logo</li>
                    <li>Slogan</li>
                    <li>Letterhead</li>
                    <li>Business Card Design</li>
                    <li>Welcome Board Design</li>
                    <li>Company Registration</li>
                  </ul>
                </td>
                <td className='t-features'>
                  <ul className='features-list'>
                      <li>Logo</li>
                      <li>Slogan</li>
                      <li>Letterhead</li>
                      <li>Business Card Design</li>
                      <li>Welcome Board Design</li>
                      <li>Company Registration</li>
                      <li>Business Plan Writing</li>
                      <li>Proposal</li>
                    </ul>
                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='business-desc'>
          <div>
            <p className='text-2xl'>Offering entrepreneurs with their small business an opportunity to draw up their business plan that include all the features listed to start their business.</p>
          </div>
          <div><button className='btn-option'>More</button></div>
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

      <div id='about'>
        <div>
          <div className='abt text-3xl text-center font-bold p-1'>About Cloud Castle</div>
          <p className='paragraph'>The digital world is growing faster than we expected. Some have joined it through a network full of possibilities while others ares still left out as they do not know where and how to start.</p>
          <p className='paragraph'>We at Cloud Castle are available to provide that bridge to cross the digital world. We believe everyone shouldn not be left behind just because they do not know how.</p>
          <p className='paragraph'>We are on a mission to connect African businesses for faster networking, to build and have strong African business power for future generations.</p>
        </div>
      </div>
      <div className='faq-section'>
        <div className='faqs text-3xl text-center font-bold'>Frequently Asked Questions</div>
        <div className='accordion'>
          
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
      
    </main>
  )
}
