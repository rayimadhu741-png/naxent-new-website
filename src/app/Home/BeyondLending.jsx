"use client";
import "./BeyondLending.css";

export default function BeyondLending() {
    return (
        <section className="beyond-section">
            <div className="beyond-left">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900" alt="team" />
                <div className="beyond-overlay">
                    <p className="small">DESIGN + TECHNOLOGY</p>
                    <h3>Ideas, brought to life.</h3>
                </div>
            </div>

            <div className="beyond-right">
                <p className="beyond-eyebrow">BEYOND LENDING</p>
                <h2>Your digital partner,<br />from idea to impact.</h2>
                <p className="beyond-desc">Naxent is also a team of strategists, designers and engineers helping ambitious companies build meaningful digital products.</p>

                <div className="beyond-list">
                    <div><span>01</span> Product strategy & research</div>
                    <div><span>02</span> Experience & interface design</div>
                    <div><span>03</span> Web & app development</div>
                </div>

                <button className="beyond-btn">Explore services <span>→</span></button>
            </div>
        </section>
    );
}