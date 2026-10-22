"use client";
import "./BuildMomentum.css";

export default function BuildMomentum() {
    return (
        <section className="momentum-section">
            <div className="circle c1"></div>
            <div className="circle c2"></div>
            <div className="circle c3"></div>
            <div className="circle c4"></div>

            <div className="momentum-content">
                <p className="momentum-eyebrow">LET'S BUILD MOMENTUM</p>
                <h2>Build what comes<br /><span>next.</span></h2>
                <p className="momentum-desc">
                    Whether you're growing a business, building long-term wealth or creating<br />
                    a new digital product, our team is ready to help.
                </p>
                <button className="momentum-btn">Speak with our team <span>→</span></button>
            </div>
        </section>
    );
}