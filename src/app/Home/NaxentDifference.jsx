import React from "react";
import "./NaxentDifference.css";

export default function NaxentDifference() {
    return (
        <section className="naxent-section">
            <div className="naxent-container">
                {/* HEADER */}
                <div className="naxent-header">
                    <div className="naxent-header-left">
                        <p className="naxent-eyebrow">THE NAXENT DIFFERENCE</p>
                        <h2 className="naxent-title">
                            A modern company<br />
                            <span>A meaningful mission.</span>
                        </h2>
                    </div>
                    <div className="naxent-header-right">
                        <div className="naxent-quote">
                            <span className="quote-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M7 11C4 11 2 9 2 7C2 7 5 7 7.5 9.5M7 11C10 11 12 9 12 7C12 7 9 7 6.5 9.5M7 11V13.5C7 15 8.5 17 12 18M12 18C15.5 17 17 15 17 13.5V11M12 18V13.5" stroke="#1565FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                            <p>We bring strategy, design and engineering together to create financial experiences that are useful, accessible and built to endure.</p>
                        </div>
                    </div>
                </div>

                {/* CARDS */}
                <div className="naxent-cards">
                    {/* 01 */}
                    <div className="naxent-card">
                        <div className="card-top">
                            <img src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=800&q=80" alt="strategy" />
                            <div className="card-tag"><b>01</b><i></i>STRATEGY</div>
                            <div className="card-circle">
                                <svg width="28" height="28" viewBox="0 0 24 24"><rect x="3" y="10" width="4" height="8" rx="1.5" fill="#0F63FF" /><rect x="9" y="6" width="4" height="12" rx="1.5" fill="#0F63FF" /><rect x="15" y="9" width="4" height="9" rx="1.5" fill="#7AADFF" /></svg>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3>Purpose-led innovation</h3>
                            <p>We build practical financial technology around real challenges faced by merchants, families and growing businesses.</p>

                        </div>
                    </div>

                    {/* 02 */}
                    <div className="naxent-card">
                        <div className="card-top">
                            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80" alt="engineering" />
                            <div className="card-tag"><b>02</b><i></i>ENGINEERING</div>
                            <div className="card-circle blue">
                                <svg width="24" height="24" viewBox="0 0 24 24"><text x="3" y="17" fontSize="14" fontWeight="800" fill="#fff">&lt;/&gt;</text></svg>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3>Technology at our core</h3>
                            <p>Our digital-first platforms are engineered to be secure, scalable and remarkably simple for every user.</p>

                        </div>
                    </div>

                    {/* 03 */}
                    <div className="naxent-card">
                        <div className="card-top">
                            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" alt="trust" />
                            <div className="card-tag"><b>03</b><i></i>TRUST</div>
                            <div className="card-circle">
                                <svg width="26" height="26" viewBox="0 0 24 24"><path d="M12 2L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 2Z" fill="#0F63FF" /><path d="M12 6L7 8V11C7 14.3 8.9 17.4 12 18.5C15.1 17.4 17 14.3 17 11V8L12 6Z" fill="#fff" opacity="0.9" /></svg>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3>Responsible growth</h3>
                            <p>Transparent thinking and long-term relationships guide every product, partnership and decision we make.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}