"use client";

import Link from "next/link";
import "./page.css";
import Footer from "../../../components/Footer";

export default function NaxentGoldPage() {
    return (
        <main className="gold-page">

            {/* =====================================================
                HEADER
            ===================================================== */}
            <header className="gold-header">

                <div className="gold-header-inner">

                    {/* LOGO */}
                    <Link href="/" className="gold-logo">

                        <div className="gold-logo-circle">
                            N
                        </div>

                        <span>
                            NAXENT
                        </span>

                    </Link>


                    {/* BACK TO PRODUCTS */}
                    <Link
                        href="/products"
                        className="back-products"
                    >
                        ← Back to Products
                    </Link>

                </div>

            </header>


            {/* =====================================================
                HERO SECTION
            ===================================================== */}
            <section className="gold-hero">

                <div className="gold-hero-container">

                    {/* LEFT CONTENT */}
                    <div className="gold-content">

                        <span className="gold-label">
                            NAXENT GOLD
                        </span>

                        <h1>
                            Build Your Wealth
                            <br />
                            With Digital Gold
                        </h1>

                        <p>
                            Invest in 24K, 99.9% pure digital gold
                            with a simple, secure and transparent
                            experience designed for modern investors.
                        </p>


                        {/* BUTTONS */}
                        <div className="gold-buttons">

                            <button
                                type="button"
                                className="gold-primary-btn"
                            >
                                Get Early Access
                                <span>→</span>
                            </button>


                            <a
                                href="#features"
                                className="gold-secondary-btn"
                            >
                                Explore Features
                            </a>

                        </div>

                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="gold-image-wrapper">

                        <div className="gold-image-card">

                            <img
                                src="/images/naxent-gold.png"
                                alt="Naxent Gold"
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHY NAXENT GOLD
            ===================================================== */}
            <section className="gold-intro">

                <div className="gold-section-heading">

                    <span>
                        WHY NAXENT GOLD
                    </span>

                    <h2>
                        Gold investing,
                        <strong> made simple.</strong>
                    </h2>

                    <p>
                        A modern digital gold experience that makes
                        buying, tracking and selling gold simple.
                    </p>

                </div>


                {/* FEATURES */}
                <div
                    className="gold-features"
                    id="features"
                >

                    {/* FEATURE 01 */}
                    <div className="gold-feature-card">

                        <div className="feature-number">
                            01
                        </div>

                        <h3>
                            24K Pure Gold
                        </h3>

                        <p>
                            Invest in 99.9% pure gold with
                            complete transparency.
                        </p>

                    </div>


                    {/* FEATURE 02 */}
                    <div className="gold-feature-card">

                        <div className="feature-number">
                            02
                        </div>

                        <h3>
                            Secure Investment
                        </h3>

                        <p>
                            Your digital gold is securely managed
                            with a reliable investment experience.
                        </p>

                    </div>


                    {/* FEATURE 03 */}
                    <div className="gold-feature-card">

                        <div className="feature-number">
                            03
                        </div>

                        <h3>
                            Real-Time Pricing
                        </h3>

                        <p>
                            Stay informed with transparent
                            and up-to-date gold pricing.
                        </p>

                    </div>


                    {/* FEATURE 04 */}
                    <div className="gold-feature-card">

                        <div className="feature-number">
                            04
                        </div>

                        <h3>
                            Easy Sell-Back
                        </h3>

                        <p>
                            Sell your digital gold easily when
                            you are ready.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                HOW IT WORKS
            ===================================================== */}
            <section className="gold-how">

                <div className="gold-section-heading">

                    <span>
                        HOW IT WORKS
                    </span>

                    <h2>
                        Start your gold journey
                        <strong> in four steps.</strong>
                    </h2>

                </div>


                <div className="gold-steps">

                    {/* STEP 01 */}
                    <div className="gold-step">

                        <span>
                            01
                        </span>

                        <h3>
                            Create Account
                        </h3>

                        <p>
                            Create your account and get started.
                        </p>

                    </div>


                    {/* STEP 02 */}
                    <div className="gold-step">

                        <span>
                            02
                        </span>

                        <h3>
                            Buy Gold
                        </h3>

                        <p>
                            Choose the amount of digital gold
                            you want to purchase.
                        </p>

                    </div>


                    {/* STEP 03 */}
                    <div className="gold-step">

                        <span>
                            03
                        </span>

                        <h3>
                            Track Investment
                        </h3>

                        <p>
                            Monitor your gold investment
                            whenever you want.
                        </p>

                    </div>


                    {/* STEP 04 */}
                    <div className="gold-step">

                        <span>
                            04
                        </span>

                        <h3>
                            Sell Gold
                        </h3>

                        <p>
                            Sell your digital gold with ease.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA SECTION
            ===================================================== */}
            <section className="gold-cta">

                <div>

                    <span>
                        NAXENT GOLD
                    </span>

                    <h2>
                        Ready to start
                        <br />
                        your gold journey?
                    </h2>

                    <p>
                        Experience a simpler way to invest
                        in digital gold.
                    </p>


                    <button
                        type="button"
                        className="gold-primary-btn"
                    >
                        Get Early Access
                        <span>→</span>
                    </button>

                </div>

            </section>


            {/* =====================================================
                COMMON WEBSITE FOOTER
            ===================================================== */}

            <Footer />

        </main>
    );
}