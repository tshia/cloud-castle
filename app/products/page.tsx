import React from "react"
import Link from "next/link"

export default function ProductsPage(){
    return(
        <div>
            <ul>
                <li><Link className="home-link" href="/">Cloud Castle</Link></li>
                <li><Link className="product-link active" href="/products">Products</Link></li>
                <li><Link className="about-link" href="/about">About</Link></li>
                <li><Link className="contact-link" href="/contact">Contact Us</Link></li>
                <li><Link className="login-link" href="/login">Login</Link></li>
            </ul>
        </div>
    )
}