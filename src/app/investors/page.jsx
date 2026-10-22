"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./page.css";

export default function InvestorsPage() {
    return (
        <>
            <Header />

            <main className="investors-page">

                {/* =====================================================
                    INVESTOR HERO
                ===================================================== */}
                <section className="investor-hero">

                    {/* Background decorations */}
                    <div className="investor-bg investor-bg-one"></div>
                    <div className="investor-bg investor-bg-two"></div>

                    <div className="investor-container">

                        {/* =================================================
                            LEFT CONTENT
                        ================================================= */}
                        <div className="investor-content">

                            <div className="investor-eyebrow">
                                <span className="investor-eyebrow-line"></span>
                                <span>INVESTORS</span>
                            </div>

                            <h1 className="investor-title">
                                Building Long-Term
                                <span>Value for Our Investors</span>
                            </h1>

                            <p className="investor-description">
                                At Naxent, we are committed to sustainable growth,
                                operational excellence and creating long-term value
                                for our shareholders. Explore our financial
                                performance, reports and latest investor updates.
                            </p>

                            <a
                                href="#investor-relations"
                                className="investor-button"
                            >
                                <span>View Investor Relations</span>
                                <span className="investor-button-arrow">
                                    →
                                </span>
                            </a>

                        </div>


                        {/* =================================================
                            RIGHT INVESTOR VISUAL
                        ================================================= */}
                        <div className="investor-visual">

                            <div className="visual-circle"></div>

                            {/* Dots */}
                            <div className="visual-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>


                            {/* =================================================
                                GROWTH ARROW
                            ================================================= */}
                            <svg
                                className="growth-arrow"
                                viewBox="0 0 520 330"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <defs>
                                    <linearGradient
                                        id="growthGradient"
                                        x1="0"
                                        y1="1"
                                        x2="1"
                                        y2="0"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#63B9FF"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="#087CF5"
                                        />
                                    </linearGradient>
                                </defs>

                                <path
                                    d="M25 290
                                    C105 285 125 255 185 225
                                    C250 193 290 185 335 135
                                    C380 87 415 60 480 18"
                                    fill="none"
                                    stroke="url(#growthGradient)"
                                    strokeWidth="9"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M444 20
                                    L482 16
                                    L477 55"
                                    fill="none"
                                    stroke="#087CF5"
                                    strokeWidth="9"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>


                            {/* =================================================
                                BAR CHART
                            ================================================= */}
                            <div className="growth-chart">

                                <div className="growth-bar growth-bar-one">
                                    <span></span>
                                </div>

                                <div className="growth-bar growth-bar-two">
                                    <span></span>
                                </div>

                                <div className="growth-bar growth-bar-three">
                                    <span></span>
                                </div>

                                <div className="growth-bar growth-bar-four">
                                    <span></span>
                                </div>

                                <div className="growth-bar growth-bar-five">
                                    <span></span>
                                </div>

                            </div>


                            {/* =================================================
                                LEFT COINS
                            ================================================= */}
                            <div className="coin-stack coin-stack-left">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>


                            {/* =================================================
                                RIGHT COINS
                            ================================================= */}
                            <div className="coin-stack coin-stack-right">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>


                            {/* =================================================
                                PLANT
                            ================================================= */}
                            <div className="investor-plant">

                                <div className="plant-stem"></div>

                                <div className="plant-leaf plant-leaf-one"></div>
                                <div className="plant-leaf plant-leaf-two"></div>
                                <div className="plant-leaf plant-leaf-three"></div>
                                <div className="plant-leaf plant-leaf-four"></div>
                                <div className="plant-leaf plant-leaf-five"></div>

                                <div className="plant-pot">
                                    <div className="pot-top"></div>
                                    <div className="pot-body"></div>
                                </div>

                            </div>


                            {/* =================================================
                                NAXENT COIN
                            ================================================= */}
                            <div className="naxent-investor-coin">

                                <div className="coin-inner">
                                    <span>N</span>
                                </div>

                            </div>


                            {/* =================================================
                                SUSTAINABLE GROWTH CARD
                            ================================================= */}
                            <div className="growth-card">

                                <div className="growth-card-icon">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 18L10 13L13 16L20 8"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                        <path
                                            d="M15 8H20V13"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                <div className="growth-card-text">
                                    <span>Sustainable</span>
                                    <strong>Growth</strong>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    WHY INVEST IN US
                ===================================================== */}
                <section
                    className="why-invest-section"
                    id="investor-relations"
                >

                    <div className="why-invest-top-shape"></div>
                    <div className="why-invest-bottom-shape"></div>

                    <div className="why-invest-container">

                        <div className="why-invest-heading">

                            <h2>
                                Why <span>Invest</span> in Us?
                            </h2>

                            <div className="why-invest-line">
                                <span></span>
                            </div>

                        </div>


                        <div className="why-invest-content">

                            {/* ITEM 01 */}
                            <div className="why-invest-item">

                                <div className="why-invest-icon">

                                    <svg
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M24 7C17.4 7 12 12.4 12 19C12 23.1 14.1 26.7 17.3 28.8C19.1 30 20 31.9 20 34H28C28 31.9 28.9 30 30.7 28.8C33.9 26.7 36 23.1 36 19C36 12.4 30.6 7 24 7Z"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />

                                        <path
                                            d="M20 39H28"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M21 43H27"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M24 13V24"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M19 18L24 23L29 18"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                </div>

                                <div className="why-invest-text">
                                    <p>
                                        At Naxent, we're not just creating two
                                        innovative products and providing services —
                                        we're building the foundation for a scalable,
                                        long-term financial ecosystem.
                                    </p>
                                </div>

                            </div>


                            {/* ITEM 02 */}
                            <div className="why-invest-item">

                                <div className="why-invest-icon">

                                    <svg
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="17"
                                            cy="17"
                                            r="6"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                        />

                                        <circle
                                            cx="31"
                                            cy="17"
                                            r="6"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                        />

                                        <path
                                            d="M5 37C5 30.9 10 27 17 27C24 27 29 30.9 29 37"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M25 28C26.8 27.3 28.8 27 31 27C38 27 43 30.9 43 37"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>

                                </div>

                                <div className="why-invest-text">
                                    <p>
                                        Our mission is to empower millions of small
                                        merchants and gold investors across India
                                        with transparent, digital-first financial
                                        solutions. With a bold, forward-looking
                                        roadmap, we're positioned for sustainable
                                        growth and meaningful impact.
                                    </p>
                                </div>

                            </div>


                            {/* ITEM 03 */}
                            <div className="why-invest-item">

                                <div className="why-invest-icon">

                                    <svg
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="24"
                                            cy="24"
                                            r="15"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                        />

                                        <circle
                                            cx="24"
                                            cy="24"
                                            r="7"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                        />

                                        <circle
                                            cx="24"
                                            cy="24"
                                            r="2.5"
                                            fill="currentColor"
                                        />

                                        <path
                                            d="M24 9V4"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M39 24H44"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M24 39V44"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M9 24H4"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>

                                </div>

                                <div className="why-invest-text">
                                    <p>
                                        If you believe in the future of real-world
                                        fintech and want to be part of a
                                        transformative journey —
                                        <a href="#investor-contact">
                                            {" "}we'd be excited to have you on board.
                                        </a>
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    INVESTOR CONTACT
                ===================================================== */}
                <section
                    className="investor-contact-section"
                    id="investor-contact"
                >

                    <div className="investor-contact-wrapper">

                        {/* LEFT */}
                        <div className="investor-contact-info">

                            <div className="investor-contact-logo">
                                <img
                                    src="/nlogo.png"
                                    alt="Naxent"
                                />
                                <span>Naxent</span>
                            </div>


                            <div className="investor-contact-eyebrow">
                                <span>GET IN TOUCH</span>
                                <i></i>
                            </div>


                            <h2>
                                Let’s Build a
                                <br />
                                <span>Better</span>
                                <br />
                                <span>Tomorrow</span>
                            </h2>


                            <p className="investor-contact-description">
                                We’d love to hear from you. Whether you’re an
                                investor, partner, or just want to know more
                                about Naxent — get in touch with us.
                            </p>


                            <div className="investor-contact-details">

                                {/* EMAIL */}
                                <div className="investor-contact-item">

                                    <div className="investor-contact-icon">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        >
                                            <rect
                                                x="3"
                                                y="5"
                                                width="18"
                                                height="14"
                                                rx="2"
                                            />
                                            <path d="m3 7 9 6 9-6" />
                                        </svg>
                                    </div>

                                    <div>
                                        <strong>Email Us</strong>
                                        <span>investors@naxent.in</span>
                                    </div>

                                </div>


                                {/* PHONE */}
                                <div className="investor-contact-item">

                                    <div className="investor-contact-icon">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.07 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>

                                    <div>
                                        <strong>Call Us</strong>
                                        <span>+91 1800 123 4567</span>
                                    </div>

                                </div>


                                {/* OFFICE */}
                                <div className="investor-contact-item">

                                    <div className="investor-contact-icon">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        >
                                            <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
                                            <circle
                                                cx="12"
                                                cy="9"
                                                r="2.5"
                                            />
                                        </svg>
                                    </div>

                                    <div>
                                        <strong>Our Office</strong>
                                        <span>Naxent Technologies Pvt. Ltd.</span>
                                        <span>Chennai, Tamilnadu, India</span>
                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* RIGHT FORM */}
                        <div className="investor-contact-form-card">

                            <h3>
                                Let’s start with your personal details
                            </h3>

                            <form>

                                <div className="investor-form-row">

                                    <div className="investor-form-group">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </div>

                                    <div className="investor-form-group">
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>

                                </div>


                                <div className="investor-form-row">

                                    <div className="investor-form-group">
                                        <input
                                            type="email"
                                            placeholder="Email address"
                                        />
                                    </div>

                                    <div className="investor-form-group">
                                        <input
                                            type="tel"
                                            placeholder="Phone number"
                                        />
                                    </div>

                                </div>


                                <h4>Where do you work?</h4>

                                <div className="investor-form-row">

                                    <div className="investor-form-group">
                                        <input
                                            type="text"
                                            placeholder="Company"
                                        />
                                    </div>

                                    <div className="investor-form-group">
                                        <input
                                            type="text"
                                            placeholder="Job Title"
                                        />
                                    </div>

                                </div>


                                <h4>
                                    Please provide details on your interest
                                </h4>

                                <div className="investor-form-message">
                                    <textarea
                                        placeholder="Your message"
                                        rows="4"
                                    ></textarea>
                                </div>


                                <button
                                    type="submit"
                                    className="investor-submit-btn"
                                >
                                    <span>Submit</span>
                                    <span>→</span>
                                </button>


                                <div className="investor-form-footer">

                                    <div className="investor-footer-line"></div>

                                    <span>
                                        ✉ mail to:
                                        <a href="mailto:investors@naxent.in">
                                            investors@naxent.in
                                        </a>
                                    </span>

                                    <div className="investor-footer-line"></div>

                                </div>

                            </form>

                        </div>

                    </div>


                    <div className="investor-contact-curve"></div>

                </section>

            </main>

            <Footer />
        </>
    );
}