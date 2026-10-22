"use client";
import "./WhyNaxent.css";

const items = [
    { n: "01", icon: "⚡", t: "Clear, always", d: "No fine print surprises. Know exactly what you're getting, every step of the way." },
    { n: "02", icon: "🚀", t: "Fast by design", d: "Digital onboarding and smart decisions mean less waiting and more doing." },
    { n: "03", icon: "🛡️", t: "Built on trust", d: "Secure systems and products designed for long-term relationships." },
    { n: "04", icon: "👥", t: "Made for you", d: "Products shaped around how Bharat's merchants and families really live." },
    { n: "05", icon: "🌱", t: "Simple by nature", d: "Less complexity. Fewer steps. More time for what matters." },
    { n: "06", icon: "⭐", t: "Built for tomorrow", d: "Helping businesses and individuals grow with confidence, today and always." },
];

export default function WhyNaxent() {
    return (
        <section className="why-section">
            <div className="why-container">
                <div className="why-left">
                    <p className="why-eyebrow">WHY NAXENT</p>
                    <h2>Finance should feel<br />like a <span>tailwind</span>, not a<br /><span>hurdle.</span></h2>
                    <p className="why-desc">We're removing the friction between people and progress— with fast decisions, human language and technology that simply works.</p>
                    <button className="why-btn">Meet Naxent <span>→</span></button>
                </div>

                <div className="why-grid">
                    {items.map(i => (
                        <div key={i.n} className="why-card">
                            <div className="why-card-top">
                                <span className="num">{i.n}</span>
                                <span className="icon">{i.icon}</span>
                            </div>
                            <h3>{i.t}</h3>
                            <p>{i.d}</p>
                            <div className="line"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}