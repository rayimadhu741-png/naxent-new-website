"use client";
import { useState } from "react";
import Image from "next/image";
import "./Footer.css";

export default function Footer() {
    const [open, setOpen] = useState(null);
    const toggle = (i) => setOpen(open === i ? null : i);

    return (
        <footer className="naxent-footer">
            <div className="footer-top">

                {/* BRAND */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <Image src="/nlogo.png" alt="Naxent" width={42} height={42} />
                        <span>NAXENT</span>
                    </div>
                    <h3>Technology for a more <span className="blue-text">inclusive India.</span></h3>
                    <p className="footer-desc">
                        Building digital financial solutions that empower individuals, businesses and communities across India.
                    </p>
                    <div className="socials">
                        <a href="#">in</a>
                        <a href="#">𝕏</a>
                        <a href="#">f</a>
                        <a href="#">◎</a>
                        <a href="#">▶</a>
                    </div>
                </div>

                {/* COMPANY */}
                <div className={`footer-col ${open === 0 ? "open" : ""}`}>
                    <div className="col-head" onClick={() => toggle(0)}>
                        <span className="head-icon">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm4 8H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2z" /></svg>
                        </span>
                        <div className="head-title"><h4>Company</h4><span className="uline"></span></div>
                        <span className="arrow">⌄</span>
                    </div>
                    <div className="links-wrap">
                        <a href="#">About Us</a><a href="#">Why Naxent</a><a href="#">Careers</a><a href="#">Newsroom</a><a href="#">Blog</a><a href="#">Contact</a>
                    </div>
                </div>

                {/* PRODUCTS */}
                <div className={`footer-col ${open === 1 ? "open" : ""}`}>
                    <div className="col-head" onClick={() => toggle(1)}>
                        <span className="head-icon">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M21 16V8l-10-6L1 8v8l10 6 10-6zm-10 2.5L4.5 14 3 15l8 4.5L21 14l-1.5-1L11 18.5zM11 12L3 7l8-4.5L19 7l-8 5z" /></svg>
                        </span>
                        <div className="head-title"><h4>Products</h4><span className="uline"></span></div>
                        <span className="arrow">⌄</span>
                    </div>
                    <div className="links-wrap">
                        <a href="#">Naxent Money</a><a href="#">Naxent Gold</a><a href="#">Naxent Pay</a><a href="#">Naxent Shield</a>
                    </div>
                </div>

                {/* SERVICES */}
                <div className={`footer-col ${open === 2 ? "open" : ""}`}>
                    <div className="col-head" onClick={() => toggle(2)}>
                        <span className="head-icon">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58-1.97-3.4-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81H9.6l-.46 2.28c-.59.24-1.13.57-1.62.94l-2.39-.96-1.97 3.4 2.03 1.58C4.84 10.47 4.8 11.19 4.8 12s.04.53.06.94l-2.03 1.58 1.97 3.4 2.39-.96c.5.38 1.03.7 1.62.94L9.6 21.19h4.8l.46-2.28c.59-.24 1.13-.56 1.62-.94l2.39.96 1.97-3.4-2.03-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" /></svg>
                        </span>
                        <div className="head-title"><h4>Services</h4><span className="uline"></span></div>
                        <span className="arrow">⌄</span>
                    </div>
                    <div className="links-wrap">
                        <a href="#">Strategy & Research</a><a href="#">Design & UX</a><a href="#">Technology</a><a href="#">Fintech Consulting</a><a href="#">Managed Services</a>
                    </div>
                </div>

                {/* RESOURCES */}
                <div className={`footer-col ${open === 3 ? "open" : ""}`}>
                    <div className="col-head" onClick={() => toggle(3)}>
                        <span className="head-icon">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /></svg>
                        </span>
                        <div className="head-title"><h4>Resources</h4><span className="uline"></span></div>
                        <span className="arrow">⌄</span>
                    </div>
                    <div className="links-wrap">
                        <a href="#">Insights</a><a href="#">Documentation</a><a href="#">Help Center</a><a href="#">FAQs</a><a href="#">Support</a>
                    </div>
                </div>

                {/* RIGHT CARD - IMAGE LA */}
                <div className="footer-contact-card">
                    <div className="contact-top">
                        <span className="c-icon big">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                        </span>
                        <div>
                            <p className="small-blue">LET'S CONNECT</p>
                            <h5>Get in Touch</h5>
                        </div>
                    </div>
                    <p className="contact-desc">We're here to help. Reach out to us anytime, anywhere.</p>

                    <div className="contact-item">
                        <span className="c-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg></span>
                        <div><a href="tel:+917569381284">+91 7569 381284</a><p>Call us</p></div>
                    </div>
                    <div className="contact-item">
                        <span className="c-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg></span>
                        <div><a href="mailto:hello@naxent.in">hello@naxent.in</a><p>Email us</p></div>
                    </div>
                    <div className="contact-item">
                        <span className="c-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg></span>
                        <div><span>Chennai, India</span><p>Our Office</p></div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Naxent Financial Technologies Pvt. Ltd. All rights reserved.</p>
                <div className="bottom-links"><a href="#">Privacy Policy</a><span>|</span><a href="#">Terms of Use</a><span>|</span><a href="#">Grievance</a></div>
            </div>
        </footer>
    );
}