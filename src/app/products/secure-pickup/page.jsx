"use client";

import Link from "next/link";
import "./page.css";
import Footer from "../../../components/Footer";

export default function SecurePickupPage() {
    return (
        <div className="secure-page">

            {/* ================= HEADER ================= */}
            <header className="secure-header">
                <div className="secure-header-container">

                    <Link href="/" className="secure-logo">
                        <span className="secure-logo-circle">N</span>
                        <span>NAXENT</span>
                    </Link>

                    <Link href="/products" className="back-products">
                        ← Back to Products
                    </Link>

                </div>
            </header>
            {/* ================= HERO ================= */}
            <section className="secure-hero">

                <div className="secure-hero-container">

                    {/* LEFT CONTENT */}
                    <div className="secure-hero-content">

                        <span className="secure-label">
                            SECURE PICKUP
                        </span>

                        <h1>
                            Secure Every
                            <br />
                            Delivery & Pickup
                        </h1>

                        <p>
                            Next-generation verification for logistics.
                            Ensure every delivery and pickup is authorized
                            with instant OTP verification and photo evidence.
                        </p>

                        <div className="secure-hero-buttons">

                            {/* PLAY STORE */}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.naxent.geoattend"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="play-store-btn"
                            >
                                <span className="play-icon">▶</span>
                                Download on Play Store
                            </a>

                            {/* EXPLORE FEATURES */}
                            <a
                                href="#features"
                                className="secure-secondary-btn"
                            >
                                Explore Features →
                            </a>

                        </div>

                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="secure-hero-visual">

                        <div className="secure-image-card">

                            <img
                                src="/images/secure-pickup.png"
                                alt="Secure Pickup"
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= INTRO ================= */}
            <section className="secure-intro">

                <div className="secure-container">

                    <span className="secure-section-label">
                        WHY SECURE PICKUP
                    </span>

                    <h2>
                        Safer Deliveries.
                        <br />
                        Smarter Verification.
                    </h2>

                    <p className="secure-intro-text">
                        Secure Pickup helps businesses verify every handover
                        with real-time authentication, OTP verification and
                        visual proof — reducing delivery fraud and improving
                        customer confidence.
                    </p>

                </div>

            </section>


            {/* ================= FEATURES ================= */}
            <section
                className="secure-features"
                id="features"
            >

                <div className="secure-container">

                    <div className="secure-section-heading">

                        <span className="secure-section-label">
                            FEATURES
                        </span>

                        <h2>
                            Everything You Need
                            <br />
                            for Secure Handover
                        </h2>

                    </div>


                    <div className="secure-feature-grid">

                        {/* CARD 1 */}
                        <div className="secure-feature-card">

                            <div className="secure-feature-icon">
                                ✓
                            </div>

                            <h3>
                                OTP Verification
                            </h3>

                            <p>
                                Verify every delivery and pickup using
                                secure one-time passwords.
                            </p>

                        </div>


                        {/* CARD 2 */}
                        <div className="secure-feature-card">

                            <div className="secure-feature-icon">
                                ◉
                            </div>

                            <h3>
                                Photo Evidence
                            </h3>

                            <p>
                                Capture visual proof during handover
                                for complete delivery transparency.
                            </p>

                        </div>


                        {/* CARD 3 */}
                        <div className="secure-feature-card">

                            <div className="secure-feature-icon">
                                ⌖
                            </div>

                            <h3>
                                Location Verification
                            </h3>

                            <p>
                                Confirm that deliveries happen at the
                                correct location with real-time verification.
                            </p>

                        </div>


                        {/* CARD 4 */}
                        <div className="secure-feature-card">

                            <div className="secure-feature-icon">
                                ⚡
                            </div>

                            <h3>
                                Instant Verification
                            </h3>

                            <p>
                                Fast verification helps delivery teams
                                complete handovers without unnecessary delays.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= HOW IT WORKS ================= */}
            <section
                className="secure-how"
                id="how-it-works"
            >

                <div className="secure-container">

                    <div className="secure-section-heading">

                        <span className="secure-section-label">
                            HOW IT WORKS
                        </span>

                        <h2>
                            Simple. Secure. Verified.
                        </h2>

                    </div>


                    <div className="secure-steps">

                        {/* STEP 1 */}
                        <div className="secure-step">

                            <span className="secure-step-number">
                                01
                            </span>

                            <h3>
                                Start Delivery
                            </h3>

                            <p>
                                The delivery or pickup process begins
                                through the Secure Pickup system.
                            </p>

                        </div>


                        {/* STEP 2 */}
                        <div className="secure-step">

                            <span className="secure-step-number">
                                02
                            </span>

                            <h3>
                                Verify Customer
                            </h3>

                            <p>
                                The customer receives a secure OTP
                                for identity verification.
                            </p>

                        </div>


                        {/* STEP 3 */}
                        <div className="secure-step">

                            <span className="secure-step-number">
                                03
                            </span>

                            <h3>
                                Capture Evidence
                            </h3>

                            <p>
                                Capture photo evidence and required
                                delivery information.
                            </p>

                        </div>


                        {/* STEP 4 */}
                        <div className="secure-step">

                            <span className="secure-step-number">
                                04
                            </span>

                            <h3>
                                Complete Handover
                            </h3>

                            <p>
                                Verify the transaction and securely
                                complete the delivery or pickup.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= BENEFITS ================= */}
            <section className="secure-benefits">

                <div className="secure-container">

                    <div className="secure-benefits-grid">

                        <div>
                            <span className="secure-section-label">
                                BUILT FOR BUSINESS
                            </span>

                            <h2>
                                Protect Every
                                <br />
                                Customer Handover.
                            </h2>
                        </div>


                        <div className="secure-benefit-list">

                            <div className="secure-benefit-item">
                                <span>✓</span>
                                <p>Reduce delivery fraud</p>
                            </div>

                            <div className="secure-benefit-item">
                                <span>✓</span>
                                <p>Improve customer trust</p>
                            </div>

                            <div className="secure-benefit-item">
                                <span>✓</span>
                                <p>Maintain delivery evidence</p>
                            </div>

                            <div className="secure-benefit-item">
                                <span>✓</span>
                                <p>Improve operational visibility</p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="secure-cta">

                <div className="secure-cta-container">

                    <span className="secure-section-label secure-cta-label">
                        SECURE PICKUP
                    </span>

                    <h2>
                        Make Every Handover
                        <br />
                        Secure & Verified.
                    </h2>

                    <p>
                        Discover how Secure Pickup can improve
                        your delivery and pickup operations.
                    </p>

                    <Link
                        href="/contact"
                        className="secure-cta-btn"
                    >
                        Get Started →
                    </Link>

                </div>

            </section>


            {/* ================= FOOTER ================= */}
            <Footer />

        </div>
    );
}