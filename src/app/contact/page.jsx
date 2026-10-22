"use client";
import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./page.css";
import {
    FiMapPin, FiGrid, FiMail, FiPhone, FiUser,
    FiBriefcase, FiMessageSquare, FiArrowRight,
} from "react-icons/fi";

export default function ContactPage() {

    useEffect(() => {
        // Auto scroll animation ni kill chestundi
        document.documentElement.style.scrollBehavior = "auto";
        window.history.scrollRestoration = "manual";
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <main className="contact-page">
                <section className="contact-hero">
                    <div className="contact-left">
                        <div className="contact-eyebrow"><span></span>CONTACT US</div>
                        <h1 className="contact-title">Let’s Build Something<strong>Great Together</strong></h1>
                        <p className="contact-description">We’re here to help! Whether you have a question about Naxent, Naxent Gold, or need support — we’re just a message away.</p>
                        <div className="contact-details">
                            <div className="contact-info-card">
                                <div className="contact-icon"><FiMapPin /></div>
                                <div className="contact-info-content"><h3>Corporate Office</h3><p>#4/608, G1, VC Street,<br />Desk # 240, Kottivakkam,<br />Perungudi, OMR,<br />Chennai, TN - 600041.</p></div>
                                <span className="contact-arrow"><FiArrowRight /></span>
                            </div>
                            <div className="contact-info-card">
                                <div className="contact-icon"><FiGrid /></div>
                                <div className="contact-info-content"><h3>Development Center</h3><p>Plot No: 897, No: 9,<br />10th Cross, "H" Block,<br />Anna Nagar West,<br />Chennai, TN - 600040.</p></div>
                                <span className="contact-arrow"><FiArrowRight /></span>
                            </div>
                            <div className="contact-info-card compact">
                                <div className="contact-icon"><FiMail /></div>
                                <div className="contact-info-content"><h3>Email</h3><p>contact@naxent.in</p></div>
                                <span className="contact-arrow"><FiArrowRight /></span>
                            </div>
                            <div className="contact-info-card compact">
                                <div className="contact-icon"><FiPhone /></div>
                                <div className="contact-info-content"><h3>Phone</h3><p>+91-96772 76441</p></div>
                                <span className="contact-arrow"><FiArrowRight /></span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-card">
                        <div className="form-eyebrow"><span></span>SEND US A MESSAGE</div>
                        <h2>Let’s Talk</h2>
                        <p className="form-description">Complete the form below — we’ll get back to you within 24 hours.</p>
                        <form className="contact-form" autoComplete="off">
                            <div className="form-row">
                                <div className="form-field"><span><FiUser /></span><input type="text" placeholder="Your Name *" autoComplete="off" /></div>
                                <div className="form-field"><span><FiMail /></span><input type="email" placeholder="Your Email *" autoComplete="off" /></div>
                            </div>
                            <div className="form-row">
                                <div className="form-field"><span><FiPhone /></span><input type="tel" placeholder="Phone Number *" autoComplete="off" /></div>
                                <div className="form-field"><span><FiBriefcase /></span><input type="text" placeholder="Company Name" autoComplete="off" /></div>
                            </div>
                            <div className="form-field message-field"><span><FiMessageSquare /></span><textarea placeholder="Your Message *" rows="5"></textarea></div>
                            <button type="submit" className="contact-submit">Submit<span><FiArrowRight /></span></button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}