"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./page.css";

function GeoCheckInIcon() {
    return (
        <svg viewBox="0 0 100 100" className="product-svg geo-svg" aria-hidden="true">
            <path d="M50 12 C32 12 20 26 20 43 C20 64 50 84 50 84 C50 84 80 64 80 43 C80 26 68 12 50 12Z" fill="currentColor" />
            <circle cx="50" cy="42" r="11" fill="#ffffff" />
            <path d="M18 72 C25 82 37 87 50 87 C63 87 75 82 82 72" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            <path d="M27 77 C34 82 42 84 50 84 C58 84 66 82 73 77" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        </svg>
    );
}

function NaxentGoldIcon() {
    return (
        <svg viewBox="0 0 100 100" className="product-svg gold-svg" aria-hidden="true">
            <path d="M39 25 L67 25 L72 40 L34 40 Z" fill="currentColor" opacity="0.82" />
            <path d="M28 42 L62 42 L67 58 L23 58 Z" fill="currentColor" />
            <path d="M18 61 L48 61 L53 77 L13 77 Z" fill="currentColor" />
            <path d="M49 61 L78 61 L86 77 L54 77 Z" fill="currentColor" opacity="0.88" />
            <path d="M39 28 L64 28" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.65" />
            <path d="M28 45 L58 45" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
            <path d="M78 17 L81 25 L89 28 L81 31 L78 39 L75 31 L67 28 L75 25 Z" fill="#f7b928" />
            <path d="M64 11 L66 16 L71 18 L66 20 L64 25 L62 20 L57 18 L62 16 Z" fill="#f7b928" />
            <circle cx="87" cy="46" r="3" fill="#f7b928" />
        </svg>
    );
}

function SecurePickupIcon() {
    return (
        <svg viewBox="0 0 100 100" className="product-svg pickup-svg" aria-hidden="true">
            <path d="M10 40 H30" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            <path d="M6 51 H26" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            <path d="M12 62 H30" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            <path d="M34 31 L72 31 L88 42 L50 42 Z" fill="currentColor" opacity="0.85" />
            <path d="M34 31 L50 42 L50 78 L34 68 Z" fill="currentColor" opacity="0.75" />
            <path d="M50 42 L88 42 L88 68 L50 78 Z" fill="currentColor" />
            <path d="M50 42 L50 78" stroke="#ffffff" strokeWidth="3" opacity="0.8" />
            <path d="M50 42 L67 34 L88 42" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.8" />
            <path d="M20 28 H31" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
    );
}

function PersonIcon() {
    return (
        <svg viewBox="0 0 24 24" className="contact-svg" aria-hidden="true">
            <circle cx="12" cy="8" r="4" fill="currentColor" />
            <path d="M4 21 C4 16.5 7.5 13.5 12 13.5 C16.5 13.5 20 16.5 20 21" fill="currentColor" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg viewBox="0 0 24 24" className="contact-svg" aria-hidden="true">
            <path d="M6.6 2.5 L9.2 2 C10 1.9 10.7 2.3 11 3 L12.2 6 C12.5 6.7 12.3 7.5 11.7 8 L10.2 9.2 C11.4 11.7 13.3 13.6 15.8 14.8 L17 13.3 C17.5 12.7 18.3 12.5 19 12.8 L22 14 C22.7 14.3 23.1 15 23 15.8 L22.5 18.4 C22.3 19.6 21.2 20.5 20 20.5 C10.8 20.5 3.5 13.2 3.5 4 C3.5 2.8 4.4 1.7 5.6 1.5 Z" fill="currentColor" />
        </svg>
    );
}

function ChatIcon() {
    return (
        <svg viewBox="0 0 24 24" className="contact-svg chat-svg" aria-hidden="true">
            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z M9 11H7V9H9V11Z M13 11H11V9H13V11Z M17 11H15V9H17V11Z" fill="currentColor" />
        </svg>
    );
}

// FOOTER PAINA SECTION - What Our Customers Say
function CustomerReviewsSection() {
    const reviews = [
        {
            initials: "JK",
            name: "John Kumar",
            text: "Naxent made my digital payments so simple and secure. The support team is always helpful and quick to respond.",
            tag: "Digital Payments",
            time: "2 days ago",
        },
        {
            initials: "PS",
            name: "Priya Sharma",
            text: "I love how easy it is to use Naxent. The interface is clean, fast and the customer support is outstanding.",
            tag: "Online Banking",
            time: "1 week ago",
        },
        {
            initials: "AS",
            name: "Ahmed Syed",
            text: "Great experience with Naxent! The process is smooth, secure and their team really cares about their customers.",
            tag: "Secure Services",
            time: "3 days ago",
        },
    ];

    return (
        <section className="customer-reviews-section">
            <div className="reviews-header">
                <div className="reviews-eyebrow"></div>
                <h2>What Our Customers Say</h2>
                <p className="reviews-subtitle">Real stories from real people who trust Naxent.</p>
                <p className="reviews-desc">We're proud to support individuals, businesses and teams with simple, secure and reliable solutions.</p>
            </div>

            <div className="reviews-wrapper">
                <button className="review-arrow left">←</button>
                <div className="reviews-grid">
                    {reviews.map((r) => (
                        <div className="review-card" key={r.name}>
                            <div className="review-card-top">
                                <div className="review-avatar">{r.initials}</div>
                                <div>
                                    <div className="review-name">{r.name}</div>
                                    <div className="verified-badge">✓ Verified Purchase</div>
                                </div>
                            </div>
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"{r.text}"</p>
                            <div className="review-meta">
                                <span>◇ {r.tag}</span> <span>·</span> <span>{r.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="review-arrow right">→</button>
            </div>

            <div className="review-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

            <div className="trust-bar">
                <div className="trust-item"><div className="trust-icon">🛡</div><div><b>Trusted by 2,000+</b><br /><small>Happy customers</small></div></div>
                <div className="trust-divider"></div>
                <div className="trust-item"><div className="trust-icon">🎧</div><div><b>Average response time</b><br /><small>&lt; 5 minutes</small></div></div>
                <div className="trust-divider"></div>
                <div className="trust-item"><div className="trust-icon">★</div><div><b>4.9/5 rating</b><br /><small>From 150+ reviews</small></div></div>
            </div>
        </section>
    );
}

export default function TalkPage() {
    const products = [
        {
            icon: <GeoCheckInIcon />,
            iconClass: "geo-icon",
            name: "GeoCheckIn",
            description: "Smart attendance tracking with precise geo-fencing. Ideal for field teams and multi-location workforce management.",
            support: "Product Support",
            person: "Bharath",
            phone: "+91 98765 43214",
        },
        {
            icon: <NaxentGoldIcon />,
            iconClass: "gold-icon",
            name: "Naxent Gold",
            description: "Secure digital gold investment platform. Save in 24K gold with real-time market rates and instant sell-back.",
            support: "Account Support",
            person: "Rayi Madhu",
            phone: "+91 98765 43215",
        },
        {
            icon: <SecurePickupIcon />,
            iconClass: "pickup-icon",
            name: "Secure Pickup",
            description: "OTP-verified delivery and pickup service. Ensuring your packages reach the right hands with total transparency.",
            support: "Technical Support",
            person: "Seenivasan",
            phone: "+91 98765 43216",
        },
    ];

    return (
        <>
            <Header />
            <main className="talk-page">
                <section className="talk-support-section">
                    <div className="talk-heading">
                        <div className="talk-heading-content">
                            <div className="talk-eyebrow"><span></span>OUR PRODUCTS & SUPPORT</div>
                            <h1>Get Support for Our<strong>Key Products</strong></h1>
                            <p>Our dedicated support team is always ready to help you with any queries, assistance or technical support for our products.</p>
                        </div>
                        <div className="support-visual">
                            <div className="support-circle">
                                <div className="headphone">
                                    <div className="ear-left"></div>
                                    <div className="ear-right"></div>
                                    <div className="headphone-ring"><span>24/7</span></div>
                                    <div className="mic"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="support-products">
                        {products.map((product) => (
                            <div className="support-card" key={product.name}>
                                <div className="support-product">
                                    <div className={`product-icon ${product.iconClass}`}>{product.icon}</div>
                                    <div className="product-content">
                                        <h2>{product.name}</h2>
                                        <p>{product.description}</p>
                                    </div>
                                </div>

                                <div className="support-contact">
                                    <div className="support-person">
                                        <div className="contact-icon"><PersonIcon /></div>
                                        <div><small>{product.support}</small><strong>{product.person}</strong></div>
                                    </div>
                                    <div className="support-phone">
                                        <div className="contact-icon"><PhoneIcon /></div>
                                        <a href={`tel:${product.phone.replace(/\s/g, "")}`}>{product.phone}</a>
                                    </div>
                                </div>

                                <a
                                    href={`https://wa.me/919876543214?text=Hi%20${product.person}%2C%20I%20need%20support%20for%20${encodeURIComponent(product.name)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="chat-button"
                                >
                                    <span className="chat-dot"></span>
                                    <ChatIcon />
                                    <span>Chat Now</span>
                                    <strong>→</strong>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="direct-chat-section">
                    <div className="direct-chat-content">
                        <div className="direct-chat-icon"><div className="chat-dots"><i></i><i></i><i></i></div></div>
                        <div className="direct-chat-text">
                            <h2>Customer Support Chat</h2>
                            <p>Start a conversation with our team directly through our in-app or website chat.</p>
                            <a href="https://api.whatsapp.com/message/CRDOCVTBIHXZN1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="direct-chat-button">
                                <span className="whatsapp-icon"><span>◔</span></span>
                                <span>Chat with us</span><strong>→</strong>
                            </a>
                        </div>
                    </div>
                    <div className="direct-chat-image">
                        <img src="/images/direct-whatsapp-chat.png" alt="Customer Support WhatsApp Chat" />
                    </div>
                </section>

                {/* 👇 FOOTER PAINA SECTION - IDHI ADD AYINDI BRO */}
                <CustomerReviewsSection />

            </main>
            <Footer />
        </>
    );
}