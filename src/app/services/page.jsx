"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./page.css";

const services = [
    {
        icon: "</>",
        title: "Web Development",
        description:
            "Modern, fast and scalable websites that turn visitors into customers.",
        color: "blue",
    },
    {
        icon: "▣",
        title: "Mobile App Development",
        description:
            "Powerful mobile applications for iOS and Android platforms.",
        color: "purple",
    },
    {
        icon: "◉",
        title: "UI/UX Design",
        description:
            "User-centric designs that create meaningful and lasting experiences.",
        color: "green",
    },
    {
        icon: "⚙",
        title: "Product Engineering",
        description:
            "End-to-end product development from idea to launch.",
        color: "orange",
    },
    {
        icon: "☁",
        title: "Cloud Solutions",
        description:
            "Secure, scalable and flexible cloud infrastructure for your business.",
        color: "blue",
    },
    {
        icon: "↗",
        title: "Digital Marketing",
        description:
            "Data-driven strategies to grow your brand and reach.",
        color: "blue",
    },
    {
        icon: "✓",
        title: "IT Consulting",
        description:
            "Expert guidance to optimize technology and processes.",
        color: "green",
    },
    {
        icon: "◉",
        title: "Ongoing Support",
        description:
            "Reliable support to keep your business running smoothly.",
        color: "pink",
    },
];

export default function ServicesPage() {
    return (
        <>
            <Header />

            <main className="services-page">

                {/* ================= HERO SECTION ================= */}
                <section className="services-hero">
                    <div className="hero-shape hero-shape-left"></div>
                    <div className="hero-shape hero-shape-right"></div>

                    <div className="services-container hero-container">

                        {/* LEFT CONTENT */}
                        <div className="hero-content">

                            <div className="section-label">
                                <span className="label-line"></span>
                                <span>OUR SERVICES</span>
                            </div>

                            <h1>
                                Digital
                                <br />
                                Solutions for
                                <br />
                                <span>a Smarter</span>
                                <br />
                                <span>Tomorrow</span>
                            </h1>

                            <p className="hero-description">
                                At Naxent, we offer end-to-end digital solutions to help
                                businesses innovate, grow and stay ahead. From strategy and
                                design to development and support — we&apos;ve got you covered.
                            </p>

                            <div className="hero-points">
                                <div className="hero-point">
                                    <span>✓</span>
                                    Custom Solutions
                                </div>

                                <div className="hero-point">
                                    <span>✓</span>
                                    Expert Team
                                </div>

                                <div className="hero-point">
                                    <span>✓</span>
                                    On-Time Delivery
                                </div>

                                <div className="hero-point">
                                    <span>✓</span>
                                    Ongoing Support
                                </div>
                            </div>
                        </div>

                        {/* RIGHT VISUAL */}
                        <div className="hero-visual">

                            <div className="visual-circle"></div>

                            <div className="floating-icon icon-code">
                                &lt;/&gt;
                            </div>

                            <div className="floating-icon icon-arrow">
                                ↗
                            </div>

                            <div className="floating-icon icon-settings">
                                ⚙
                            </div>

                            <div className="floating-icon icon-cloud">
                                ☁
                            </div>

                            <div className="dashboard-card">

                                <div className="dashboard-top">
                                    <div className="dashboard-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>

                                <div className="dashboard-title">
                                    Build
                                    <br />
                                    Grow
                                    <br />
                                    Succeed
                                </div>

                                <div className="chart">

                                    <div className="bar bar-1"></div>
                                    <div className="bar bar-2"></div>
                                    <div className="bar bar-3"></div>
                                    <div className="bar bar-4"></div>
                                    <div className="bar bar-5"></div>

                                    <div className="chart-line"></div>

                                </div>

                            </div>

                            <div className="dashboard-base"></div>

                        </div>
                    </div>
                </section>


                {/* ================= SERVICES SECTION ================= */}
                <section className="services-list-section">

                    <div className="services-container">

                        {/* SECTION HEADER */}
                        <div className="services-header">

                            <div className="services-heading">
                                <div className="section-label dark-label">
                                    <span className="label-line"></span>
                                    <span>WHAT WE DO</span>
                                </div>

                                <h2>Our Services</h2>
                            </div>

                            <p className="services-intro">
                                We provide a wide range of digital services to help your
                                business grow and succeed in the modern world.
                            </p>

                            <button className="view-services-btn">
                                View All Services
                                <span>→</span>
                            </button>

                        </div>


                        {/* SERVICE CARDS */}
                        <div className="services-grid">

                            {services.map((service, index) => (
                                <article
                                    className="service-card"
                                    key={index}
                                >

                                    <div className={`service-icon ${service.color}`}>
                                        {service.icon}
                                    </div>

                                    <h3>{service.title}</h3>

                                    <p>{service.description}</p>

                                    <a href="#contact" className="learn-more">
                                        Learn More
                                        <span>→</span>
                                    </a>

                                </article>
                            ))}

                        </div>

                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}