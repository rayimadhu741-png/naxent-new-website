"use client";
import "./Hero.css";

const TRUSTED_LOGOS = [
    { src: "/rbi.png", label: "RBI", sub: "COMPLIANT FRAMEWORK" },
    { src: "/npci.png", label: "NPCI", sub: "CERTIFIED PARTNER" },
    { src: "/upi.png", label: "UPI", sub: "ENABLED PAYMENTS" },
    { src: "/iso.png", label: "ISO 27001", sub: "CERTIFIED SECURITY" },
    { src: "/pci.png", label: "PCI DSS", sub: "SECURE COMPLIANCE" },
    { src: "/data.png", label: "DATA SECURE", sub: "PRIVACY FIRST" },
    { src: "/partener.png", label: "TRUSTED", sub: "GROWING TOGETHER" },
];

export default function Hero() {
    return (
        <>
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-left">
                        <p className="hero-small-title">Inclusive Finance. Intelligent Technology.</p>
                        <h1 className="hero-title">
                            Smarter<br />
                            financial<br />
                            solutions for a<br />
                            <span>brighter
                                tomorrow.</span>
                        </h1>
                        <p className="hero-desc">
                            Naxent is a financial technology company creating trusted digital experiences that help businesses and communities move forward.
                        </p>
                        <div className="hero-btns">
                            <button type="button" className="btn-primary">
                                Discover Naxent <span className="btn-arrow">→</span>
                            </button>
                            <button type="button" className="btn-secondary">
                                <span className="play-icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                                        <path d="M8 5.14v13.72L19 12 8 5.14Z" />
                                    </svg>
                                </span>
                                <span>How We Work</span>
                            </button>
                        </div>
                        <div className="hero-trust">

                            <div className="trust-text">
                                <strong>Trusted by 500,000+ customers</strong>
                                <p>Across 25+ countries</p>
                            </div>
                        </div>
                    </div>

                    <div className="hero-right">
                        <div className="circle-bg">
                            <span className="circle-dot dot-1"></span>
                            <span className="circle-dot dot-2"></span>
                            <span className="circle-dot dot-3"></span>
                            <span className="circle-dot dot-4"></span>
                        </div>
                        <img src="/phone.png" alt="Naxent" className="phone-img" />

                        <div className="float-card card-1">
                            <div className="float-icon blue">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <div>
                                <p className="card-subtitle">Monthly Growth</p>
                                <p className="card-title">+12.4% ↗</p>
                            </div>
                        </div>

                        <div className="float-card card-2">
                            <div className="float-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M12 22S8 18 8 12V5l4-2 4 2v7c0 6-4 10-4 10z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <div>
                                <p className="card-title">Secure & Trusted</p>
                                <p className="card-subtitle">Your data is always safe</p>
                            </div>
                        </div>

                        <div className="float-card card-3">
                            <div className="float-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M3 3v18h18M7 16l4-4 4 4 5-8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <div>
                                <p className="card-title">Smart Insights</p>
                                <p className="card-subtitle">Better decisions, faster</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="hero-bottom-wrapper">
                <div className="hero-bottom-bar">
                    <div className="hero-bottom-item"><div className="item-top"><h4>Transparent by design</h4><span className="bottom-num">01</span></div><p>Clear terms, always</p></div>
                    <div className="hero-bottom-item"><div className="item-top"><h4>Digital-first experience</h4><span className="bottom-num">02</span></div><p>Simple from start to finish</p></div>
                    <div className="hero-bottom-item"><div className="item-top"><h4>Built around security</h4><span className="bottom-num">03</span></div><p>Your trust comes first</p></div>
                    <div className="hero-bottom-item"><div className="item-top"><h4>Made for Bharat</h4><span className="bottom-num">04</span></div><p>Grounded in real needs</p></div>
                </div>
            </div>

            <section className="trusted-section">
                <div className="trusted-container">
                    <div className="trusted-header">
                        <div className="trusted-eyebrow"><span>SECURITY & COMPLIANCE</span><div className="eyebrow-line"></div></div>
                        <h2>Built on trusted & secure<br />infrastructure.</h2>
                        <p>Our platform is built with bank-grade security, aligned with RBI guidelines and compliant with global standards like ISO 27001 & PCI DSS.</p>
                    </div>
                </div>
                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {[...TRUSTED_LOGOS, ...TRUSTED_LOGOS].map((logo, i) => (
                            <div className="t-card" key={`${logo.label}-${i}`}>
                                <div className="t-logo-box"><img src={logo.src} alt={logo.label} loading="lazy" /></div>
                                <span>{logo.label}</span><p>{logo.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="purpose-section">
                <div className="purpose-container">
                    <div className="purpose-top">
                        <div className="purpose-left">
                            <p className="purpose-small">TECHNOLOGY WITH A HUMAN PURPOSE</p>
                            <h2>Technology that moves<br /><span>business forward.</span></h2>
                            <p className="purpose-desc">Naxent builds secure, intelligent digital financial experiences that empower businesses, include more people and create lasting impact.</p>
                        </div>
                        <div className="purpose-icon-wrap">
                            <div className="purpose-icon-bg">
                                <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><path d="M8 16L16 8M16 8H10M16 8V14" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="purpose-cards">
                        <div className="purpose-card">
                            <div className="card-head">
                                <div className="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M3 3v18h18M7 12l3-3 3 3 4-5" /><circle cx="18" cy="7" r="1.5" fill="currentColor" /></svg>
                                </div>
                                <div><span>01</span><h4>Intelligent</h4></div>
                            </div>
                            <p>AI-powered insights and data-driven solutions for smarter decisions.</p>
                        </div>

                        <div className="purpose-card">
                            <div className="card-head">
                                <div className="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="3" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                </div>
                                <div><span>02</span><h4>Inclusive</h4></div>
                            </div>
                            <p>Expanding access to financial opportunities for every community.</p>
                        </div>

                        <div className="purpose-card">
                            <div className="card-head">
                                <div className="card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
                                </div>
                                <div><span>03</span><h4>Trusted</h4></div>
                            </div>
                            <p>Bank-grade security and transparency you can count on.</p>
                        </div>
                    </div>

                    <div className="purpose-footer">
                        <div className="purpose-line"></div>
                        <a href="#" className="explore-btn">Explore our approach <span>→</span></a>
                    </div>
                </div>
            </section>
        </>
    );
}