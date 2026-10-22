"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./page.css";

export default function Page() {
    const [current, setCurrent] = useState(0);
    const slides = [
        {
            name: "Pandian Ganesan",
            role: "Founder & Director of Naxent",
            quote: "I started Naxent with a simple idea — technology should make people's lives easier, not more complicated.",
            paras: [
                "At Naxent, our goal is to build products and solutions that people can understand, trust and use in their everyday lives.",
                "We want to create a company that listens to its customers, understands their real needs and continuously works to build better solutions.",
                "Whether you are a growing business, an entrepreneur, a family or an individual, we want Naxent to be a technology partner you can rely on."
            ],
            img: "/founder.png"
        },
        {
            name: "Naxent Team",
            role: "Building for Real People",
            quote: "We believe technology should remove complexity and create opportunity for everyone.",
            paras: [
                "At Naxent, we bring together skilled people, modern technology and a customer-first mindset.",
                "Our mission is to design solutions that solve real-world problems and make everyday life easier, safer and more connected.",
                "From businesses to individuals — we are here to be your trusted technology partner."
            ],
            img: "/founder.png"
        }
    ];

    const goTo = (index) => setCurrent((index + slides.length) % slides.length);

    return (
        <main className="about-naxent-wrapper">
            <Header />

            <section className="ab-sec-top">
                <div className="ab-container">
                    <div className="ab-top-grid">
                        <div className="ab-top-left">
                            <div className="ab-label">ABOUT NAXENT</div>
                            <h1 className="ab-main-h1">Technology built for a<br /><span>more inclusive India.</span></h1>
                            <p className="ab-para">Naxent is a technology-driven company focused on creating simple, trusted and meaningful digital solutions for businesses, individuals and communities.</p>
                            <p className="ab-para">We believe technology should remove complexity, create opportunity and help people move forward with confidence.</p>
                        </div>
                        <div className="ab-top-right">
                            <div className="ab-img-wrap">
                                <img src="/about.png" alt="About Naxent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ab-sec-bottom">
                <div className="ab-container">
                    <div className="ab-founder-carousel-wrapper">
                        <div className="ab-founder-viewport">
                            <div className="ab-founder-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                                {slides.map((slide, idx) => (
                                    <div className="ab-founder-slide" key={idx}>
                                        <div className="ab-founder-slide-content">
                                            <div className="ab-label">A MESSAGE FROM OUR FOUNDER</div>
                                            <h2 className="ab-founder-h1">Hi, I’m {slide.name}.<br /><span>{slide.role}</span></h2>
                                            <div className="ab-quote">“{slide.quote}”</div>
                                            <div className="ab-founder-full-content">
                                                {slide.paras.map((p, i) => (
                                                    <p className="ab-para" key={i}>{p}</p>
                                                ))}
                                            </div>
                                            <div className="ab-signature">
                                                <span className="ab-dash"></span>
                                                <div>
                                                    <div className="ab-sig-name">{slide.name}</div>
                                                    <div className="ab-sig-role">{slide.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ab-founder-slide-visual">
                                            <img src={slide.img} alt={slide.name} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="ab-founder-arrow left" onClick={() => goTo(current - 1)}>←</button>
                        <button className="ab-founder-arrow right" onClick={() => goTo(current + 1)}>→</button>
                        <div className="ab-founder-dots">
                            <span className={`dot ${current === 0 ? 'active' : ''}`} onClick={() => goTo(0)}></span>
                            <span className={`dot ${current === 1 ? 'active' : ''}`} onClick={() => goTo(1)}></span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ab-sec-milestones">
                <div className="ab-container">
                    <div className="ab-milestones-grid">
                        <div className="ab-ms-left">
                            <div className="ab-ms-label">OUR JOURNEY</div>
                            <h2 className="ab-ms-h2">Key milestones</h2>
                            <p className="ab-ms-para">From our founding days to today, every milestone has brought us closer to our vision of a smarter, more inclusive financial future.</p>
                            <a href="/about/timeline" className="ab-ms-btn">View Full Timeline <span>→</span></a>
                        </div>
                        <div className="ab-ms-timeline">
                            <div className="ab-ms-item">
                                <div className="ab-ms-icon-wrap"><div className="ab-ms-icon">🚀</div></div>
                                <div className="ab-ms-year">2025</div>
                                <div className="ab-ms-title">Naxent launched</div>
                                <div className="ab-ms-desc">Started our journey in financial technology.</div>
                            </div>
                            <div className="ab-ms-item">
                                <div className="ab-ms-icon-wrap"><div className="ab-ms-icon">📦</div></div>
                                <div className="ab-ms-year">2026</div>
                                <div className="ab-ms-title">Core products</div>
                                <div className="ab-ms-desc">Building GeoCheckin, Naxent Gold and Secure Pickup.</div>
                            </div>
                            <div className="ab-ms-item">
                                <div className="ab-ms-icon-wrap"><div className="ab-ms-icon">📈</div></div>
                                <div className="ab-ms-year">2027</div>
                                <div className="ab-ms-title">Growing our reach</div>
                                <div className="ab-ms-desc">Expanding solutions for businesses and customers.</div>
                            </div>
                            <div className="ab-ms-item">
                                <div className="ab-ms-icon-wrap"><div className="ab-ms-icon">🛡️</div></div>
                                <div className="ab-ms-year">2028</div>
                                <div className="ab-ms-title">Building trust</div>
                                <div className="ab-ms-desc">Focused on reliable, secure digital experiences.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ab-vision-mission">
                <div className="ab-vm-col">
                    <div className="ab-vm-label"><span className="ab-vm-icon">◎</span>OUR VISION</div>
                    <h2 className="ab-vm-h2">A smarter tomorrow<br /><span>with Naxent.</span></h2>
                    <p className="ab-vm-para">To be a global technology partner, creating innovative and reliable solutions that empower businesses and individuals to achieve more, with simplicity and trust.</p>
                    <div className="ab-vm-tags"><span><i className="ab-vm-dot"></i>Innovation</span><span><i className="ab-vm-dot"></i>Trust</span><span><i className="ab-vm-dot"></i>Global Impact</span></div>
                </div>
                <div className="ab-vm-divider"></div>
                <div className="ab-vm-col">
                    <div className="ab-vm-label"><span className="ab-vm-icon">↗️</span>OUR MISSION</div>
                    <h2 className="ab-vm-h2">Build solutions<br />for <span>real people.</span></h2>
                    <p className="ab-vm-para">We design and deliver technology solutions that solve real-world problems, help businesses grow and make everyday life easier, safer and more connected.</p>
                    <div className="ab-vm-tags"><span><i className="ab-vm-dot"></i>Customer Focus</span><span><i className="ab-vm-dot"></i>Excellence</span><span><i className="ab-vm-dot"></i>Long-term Value</span></div>
                </div>
            </section>

            <section className="ab-who-we-are">
                <div className="ab-container">
                    <div className="ab-who-grid">
                        <div className="ab-who-left">
                            <div className="ab-who-label"><span className="ab-who-line"></span>WHO WE ARE</div>
                            <h2 className="ab-who-h2">More Than a Company,<br /><span>We’re a Team</span></h2>
                            <div className="ab-who-content">
                                <p>Naxent is a growing technology company built on innovation, collaboration and a commitment to create meaningful solutions.</p>
                                <p>We bring together skilled people, modern technology and a customer-first mindset to help businesses and individuals succeed in a digital world.</p>
                            </div>
                        </div>
                        <div className="ab-who-cards">
                            <div className="ab-who-card"><div className="ab-who-card-icon">👥</div><h3>Our People</h3><p>Skilled, passionate and always ready to build.</p></div>
                            <div className="ab-who-card"><div className="ab-who-card-icon">💡</div><h3>Our Approach</h3><p>Simple ideas, smart solutions, real impact.</p></div>
                            <div className="ab-who-card"><div className="ab-who-card-icon">🛡️</div><h3>Our Values</h3><p>Integrity, quality, collaboration and trust.</p></div>
                            <div className="ab-who-card"><div className="ab-who-card-icon">↗️</div><h3>Our Goal</h3><p>To be a trusted technology partner for everyone.</p></div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}