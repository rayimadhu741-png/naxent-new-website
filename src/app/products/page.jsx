"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./page.css";
import Link from "next/link";

export default function ProductPage() {
    return (
        <>
            {/* =====================================================
                HEADER
            ===================================================== */}
            <Header />

            <main>

                {/* =====================================================
                    PRODUCT HERO SECTION
                ===================================================== */}
                <section className="product-hero">

                    <div className="product-hero-inner">

                        {/* =================================================
                            LEFT CONTENT
                        ================================================= */}
                        <div className="product-hero-content">

                            <div className="product-eyebrow">
                                <span className="eyebrow-dot"></span>
                                OUR PRODUCTS
                            </div>

                            <h1>
                                Financial tools
                                <br />
                                built for
                                <br />
                                <span>real India.</span>
                            </h1>

                            <p className="product-description">
                                From business credit to digital gold and instant
                                payments — every Naxent product is designed around
                                the way people in Bharat actually live, work and grow.
                            </p>

                            {/* =================================================
                                HERO ACTIONS
                            ================================================= */}
                            <div className="product-actions">

                                <a
                                    href="#products"
                                    className="primary-btn"
                                >
                                    Explore products
                                    <span>→</span>
                                </a>

                                <a
                                    href="#contact"
                                    className="secondary-btn"
                                >
                                    <span className="play-icon">
                                        ▶
                                    </span>

                                    Talk to our team
                                </a>

                            </div>

                            {/* =================================================
                                BENEFITS
                            ================================================= */}
                            <div className="product-benefits">

                                {/* BENEFIT 01 */}
                                <div className="benefit-item">

                                    <div className="benefit-icon">
                                        ✓
                                    </div>

                                    <div className="benefit-text">
                                        <strong>
                                            Safe &amp; Secure
                                        </strong>

                                        <small>
                                            Your trust, our priority
                                        </small>
                                    </div>

                                </div>

                                <div className="benefit-divider"></div>

                                {/* BENEFIT 02 */}
                                <div className="benefit-item">

                                    <div className="benefit-icon">
                                        ϟ
                                    </div>

                                    <div className="benefit-text">
                                        <strong>
                                            Fast &amp; Simple
                                        </strong>

                                        <small>
                                            Built for everyone
                                        </small>
                                    </div>

                                </div>

                                <div className="benefit-divider"></div>

                                {/* BENEFIT 03 */}
                                <div className="benefit-item">

                                    <div className="benefit-icon">
                                        ♙
                                    </div>

                                    <div className="benefit-text">
                                        <strong>
                                            Inclusive Growth
                                        </strong>

                                        <small>
                                            For a stronger India
                                        </small>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* =================================================
                            HERO IMAGE
                        ================================================= */}
                        <div className="product-image-wrapper">

                            <img
                                src="/hero.png"
                                alt="Naxent financial technology"
                                className="product-main-image"
                            />

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    FEATURED PRODUCTS SECTION
                ===================================================== */}
                <section
                    id="products"
                    className="products-section"
                >

                    <div className="products-section-inner">

                        {/* =================================================
                            SECTION HEADING
                        ================================================= */}
                        <div className="products-heading">

                            <div className="products-eyebrow">
                                <span></span>
                                OUR PRODUCTS
                                <span></span>
                            </div>

                            <h2>
                                Featured <strong>Products</strong>
                            </h2>

                            <p>
                                High-impact solutions designed to simplify,
                                secure and transform the way you work.
                            </p>

                        </div>


                        {/* =================================================
                            PRODUCT GRID
                        ================================================= */}
                        <div className="products-grid">

                            {/* =================================================
                                PRODUCT 01 — GEOCHECKIN
                            ================================================= */}
                            <article className="product-card product-card-blue">

                                <div className="product-card-image">

                                    <span className="product-card-number">
                                        01
                                    </span>

                                    <span className="product-card-label">
                                        FIELD OPERATIONS
                                    </span>

                                    <img
                                        src="/images/geocheckin.png"
                                        alt="GeoCheckIn product"
                                    />

                                </div>

                                <div className="product-card-content">

                                    <h3>
                                        GeoCheckIn
                                    </h3>

                                    <p>
                                        Smart attendance tracking with precise
                                        geofencing. Ideal for field teams and
                                        multi-location workforce management.
                                    </p>

                                    <Link
                                        href="/products/geocheckin"
                                        aria-label="Learn more about GeoCheckIn"
                                    >
                                        Learn More
                                        <span>→</span>
                                    </Link>
                                </div>

                            </article>


                            {/* =================================================
                                PRODUCT 02 — NAXENT GOLD
                            ================================================= */}
                            <article className="product-card product-card-gold">

                                <div className="product-card-image">

                                    <span className="product-card-number">
                                        02
                                    </span>

                                    <span className="product-card-label">
                                        DIGITAL GOLD
                                    </span>

                                    <img
                                        src="/images/naxent-gold.png"
                                        alt="Naxent Gold product"
                                    />

                                </div>

                                <div className="product-card-content">

                                    <h3>
                                        Naxent Gold
                                    </h3>

                                    <p>
                                        Secure digital gold investment platform.
                                        Save in 24K gold with real-time market
                                        rates and instant sell-back.
                                    </p>

                                    <a
                                        href="/products/naxent-gold"
                                        className="learn-more-btn"

                                        aria-label="Learn more about Naxent Gold"
                                    >
                                        Learn More
                                        <span>→</span>
                                    </a>

                                </div>

                            </article>


                            {/* =================================================
                                PRODUCT 03 — SECURE PICKUP
                            ================================================= */}
                            <article className="product-card product-card-teal">

                                <div className="product-card-image">

                                    <span className="product-card-number">
                                        03
                                    </span>

                                    <span className="product-card-label">
                                        SECURE DELIVERY
                                    </span>

                                    <img
                                        src="/images/secure-pickup.png"
                                        alt="Secure Pickup product"
                                    />

                                </div>

                                <div className="product-card-content">

                                    <h3>
                                        Secure Pickup
                                    </h3>

                                    <p>
                                        OTP-verified delivery and pickup service.
                                        Ensuring your packages reach the right
                                        hands with total transparency.
                                    </p>

                                    <a
                                        href="/products/secure-pickup"
                                        aria-label="Learn more about Secure Pickup"
                                    >
                                        Learn More
                                        <span>→</span>
                                    </a>

                                </div>

                            </article>

                        </div>


                        {/* =================================================
                            BOTTOM CTA
                        ================================================= */}
                        <div className="products-bottom-cta">

                            <p>
                                Explore the Naxent ecosystem and discover
                                technology built around real-world needs.
                            </p>

                            <a href="#contact">
                                Talk to our team
                                <span>→</span>
                            </a>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    COMING SOON SECTION
                ===================================================== */}
                <section
                    className="coming-soon-section"
                    aria-labelledby="coming-soon-title"
                >

                    {/* =================================================
                        DECORATIVE BACKGROUND SHAPES
                    ================================================= */}
                    <div
                        className="coming-decoration coming-decoration-left"
                        aria-hidden="true"
                    ></div>

                    <div
                        className="coming-decoration coming-decoration-right"
                        aria-hidden="true"
                    ></div>


                    <div className="coming-soon-inner">

                        {/* =================================================
                            SECTION HEADER
                        ================================================= */}
                        <div className="coming-soon-heading">

                            <div className="coming-soon-label">

                                <span className="coming-line"></span>

                                <span className="coming-badge">

                                    <span className="coming-rocket">
                                        🚀
                                    </span>

                                    COMING SOON

                                </span>

                                <span className="coming-line"></span>

                            </div>

                            <h2 id="coming-soon-title">
                                Exciting Features
                                <br />
                                <span>On the Way!</span>
                            </h2>

                            <p>
                                We’re constantly expanding our horizons.
                            </p>

                        </div>


                        {/* =================================================
                            COMING SOON GRID
                        ================================================= */}
                        <div className="coming-soon-grid">

                            {/* =================================================
                                NAXENT MONEY
                            ================================================= */}
                            <article className="coming-card coming-card-blue">

                                <div className="coming-card-visual">

                                    <span className="coming-card-badge">

                                        <span>
                                            ♛
                                        </span>

                                        UPCOMING

                                    </span>

                                    <div className="coming-image-circle">

                                        <img
                                            src="/images/naxent-money.png"
                                            alt="Naxent Money"
                                        />

                                    </div>

                                </div>


                                <div className="coming-card-content">

                                    <h3>
                                        Naxent <span>Money</span>
                                    </h3>

                                    <p>
                                        A dedicated merchant-to-merchant lending
                                        platform for seamless business credit.
                                    </p>

                                    <a
                                        href="#contact"
                                        aria-label="Learn more about Naxent Money"
                                    >
                                        Learn More
                                        <span>→</span>
                                    </a>

                                </div>

                            </article>


                            {/* =================================================
                                NAXENT UPI
                            ================================================= */}
                            <article className="coming-card coming-card-teal">

                                <div className="coming-card-visual">

                                    <span className="coming-card-badge">

                                        <span>
                                            ♛
                                        </span>

                                        UPCOMING

                                    </span>

                                    <div className="coming-image-circle">

                                        <img
                                            src="/images/naxent-upi.png"
                                            alt="Naxent UPI"
                                        />

                                    </div>

                                </div>


                                <div className="coming-card-content">

                                    <h3>
                                        Naxent <span>UPI</span>
                                    </h3>

                                    <p>
                                        Next-gen rewards-based UPI payments app
                                        designed for the modern saver.
                                    </p>

                                    <a
                                        href="#contact"
                                        aria-label="Learn more about Naxent UPI"
                                    >
                                        Learn More
                                        <span>→</span>
                                    </a>

                                </div>

                            </article>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    SIMPLE BY DESIGN / HOW IT WORKS
                ===================================================== */}
                <section
                    className="simple-design-section"
                    aria-labelledby="simple-design-title"
                >

                    <div className="simple-design-inner">

                        {/* =================================================
                            TOP CONTENT
                        ================================================= */}
                        <div className="simple-design-top">

                            {/* =================================================
                                LEFT INTRO
                            ================================================= */}
                            <div className="simple-design-intro">

                                <div className="simple-design-badge">
                                    <span>✦</span>
                                    SIMPLE BY DESIGN
                                </div>

                                <p className="simple-design-description">
                                    We removed every unnecessary step between
                                    you and your financial goals.
                                </p>

                            </div>


                            {/* =================================================
                                CENTER HEADING
                            ================================================= */}
                            <div className="simple-design-heading-wrap">

                                <h2
                                    id="simple-design-title"
                                    className="simple-design-heading"
                                >
                                    Up and running
                                    <span>
                                        in minutes.
                                    </span>
                                </h2>

                            </div>


                            {/* =================================================
                                RIGHT IMAGE
                            ================================================= */}
                            <div className="simple-design-visual">

                                <img
                                    src="/images/simple-design.png"
                                    alt="Simple digital financial experience"
                                />

                            </div>

                        </div>


                        {/* =================================================
                            SIMPLE DESIGN STEPS
                        ================================================= */}
                        <div className="simple-design-cards">

                            {/* STEP 01 */}
                            <article className="simple-design-card">

                                <div className="simple-design-icon">
                                    ♙
                                </div>

                                <div className="simple-design-number">
                                    01
                                </div>

                                <h3>
                                    Create your account
                                </h3>

                                <p>
                                    Complete a fully digital KYC in minutes.
                                    No branch visits, no paperwork, no waiting.
                                </p>

                            </article>


                            {/* STEP 02 */}
                            <article className="simple-design-card">

                                <div className="simple-design-icon">
                                    ₹
                                </div>

                                <div className="simple-design-number">
                                    02
                                </div>

                                <h3>
                                    Choose your product
                                </h3>

                                <p>
                                    Select from credit, savings, payments or
                                    protection — or combine them to build a
                                    complete financial toolkit.
                                </p>

                            </article>


                            {/* STEP 03 */}
                            <article className="simple-design-card">

                                <div className="simple-design-icon">
                                    ♢
                                </div>

                                <div className="simple-design-number">
                                    03
                                </div>

                                <h3>
                                    Get instant access
                                </h3>

                                <p>
                                    Approved limits, active accounts and
                                    activated features land on your device
                                    within minutes of verification.
                                </p>

                            </article>


                            {/* STEP 04 */}
                            <article className="simple-design-card">

                                <div className="simple-design-icon">
                                    ↗
                                </div>

                                <div className="simple-design-number">
                                    04
                                </div>

                                <h3>
                                    Grow with Naxent
                                </h3>

                                <p>
                                    As your business grows, your credit limits
                                    and product suite grow with you. We're in
                                    this for the long run.
                                </p>

                            </article>

                        </div>

                    </div>

                </section>

            </main>


            {/* =====================================================
                FOOTER
            ===================================================== */}
            <Footer />
        </>
    );
}