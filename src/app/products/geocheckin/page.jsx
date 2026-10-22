import Link from "next/link";
import "./page.css";
import Footer from "../../../components/Footer";

export default function GeoCheckInPage() {
    return (
        <main className="geocheckin-page">

            {/* =====================================================
          HEADER
      ===================================================== */}
            <header className="geo-header">
                <div className="geo-header-inner">

                    {/* NAXENT LOGO */}
                    <Link href="/" className="geo-logo">
                        <img
                            src="/nlogo.png"
                            alt="Naxent"
                        />
                        <span>NAXENT</span>
                    </Link>

                    {/* BACK TO PRODUCTS */}
                    <Link
                        href="/products"
                        className="geo-back-products"
                    >
                        <span>←</span>
                        Back to Products
                    </Link>

                </div>
            </header>


            {/* =====================================================
          HERO
      ===================================================== */}
            <section className="geo-hero">

                <div className="geo-hero-inner">

                    {/* LEFT */}
                    <div className="geo-hero-content">

                        <div className="geo-eyebrow">
                            <span className="geo-eyebrow-dot"></span>
                            FIELD OPERATIONS
                        </div>

                        <h1>
                            GeoCheckIn
                        </h1>

                        <p className="geo-hero-description">
                            Accurate location-based attendance for your remote
                            and field workforce. Eliminate time theft and
                            streamline payroll with smart geofencing.
                        </p>

                        <div className="geo-hero-actions">

                            <a
                                href="https://play.google.com/store/apps/details?id=com.naxent.geoattend"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="geo-primary-btn"
                            >
                                <span className="play-symbol">▶</span>
                                Download on Play Store
                            </a>

                            <Link
                                href="/contact"
                                className="geo-secondary-btn"
                            >
                                Talk to our team
                                <span>→</span>
                            </Link>

                        </div>

                        {/* TRUST ITEMS */}
                        <div className="geo-trust-row">

                            <div className="geo-trust-item">
                                <span>✓</span>
                                <div>
                                    <strong>Accurate</strong>
                                    <small>Location tracking</small>
                                </div>
                            </div>

                            <div className="geo-trust-divider"></div>

                            <div className="geo-trust-item">
                                <span>⌖</span>
                                <div>
                                    <strong>Smart</strong>
                                    <small>Geofencing</small>
                                </div>
                            </div>

                            <div className="geo-trust-divider"></div>

                            <div className="geo-trust-item">
                                <span>↗</span>
                                <div>
                                    <strong>Simple</strong>
                                    <small>Team management</small>
                                </div>
                            </div>

                        </div>

                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="geo-hero-visual">

                        <div className="geo-image-glow"></div>

                        <div className="geo-image-card">

                            <div className="geo-image-top">
                                <span>GEOCHECKIN</span>

                                <span className="geo-live">
                                    <i></i>
                                    LIVE
                                </span>
                            </div>

                            <div className="geo-product-image">
                                <img
                                    src="/images/geocheckin.png"
                                    alt="GeoCheckIn application"
                                />
                            </div>

                            <div className="geo-image-bottom">
                                <span>SMART ATTENDANCE</span>
                                <span>GPS • GEOFENCE</span>
                            </div>

                        </div>


                        {/* FLOATING CARD 1 */}
                        <div className="geo-floating-card geo-floating-one">

                            <div className="geo-floating-icon">
                                ✓
                            </div>

                            <div>
                                <strong>Verified</strong>
                                <small>Attendance</small>
                            </div>

                        </div>


                        {/* FLOATING CARD 2 */}
                        <div className="geo-floating-card geo-floating-two">

                            <div className="geo-floating-icon">
                                ⌖
                            </div>

                            <div>
                                <strong>500m</strong>
                                <small>Geofence radius</small>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          INTRO
      ===================================================== */}
            <section className="geo-intro">

                <div className="geo-container">

                    <div className="geo-section-label">
                        <span></span>
                        WHY GEOCHECKIN
                        <span></span>
                    </div>

                    <div className="geo-intro-grid">

                        <div className="geo-intro-heading">
                            <h2>
                                Attendance that works
                                <span> wherever your team works.</span>
                            </h2>
                        </div>

                        <div className="geo-intro-copy">

                            <p>
                                GeoCheckIn helps businesses manage remote and
                                field teams with location-based attendance.
                                Employees can check in from approved locations
                                while managers get a clear view of workforce
                                activity.
                            </p>

                            <p>
                                From multiple offices to field operations,
                                GeoCheckIn makes attendance more accurate,
                                transparent and easier to manage.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          FEATURES
      ===================================================== */}
            <section className="geo-features">

                <div className="geo-container">

                    <div className="geo-features-heading">

                        <div>

                            <div className="geo-section-label geo-left">
                                <span></span>
                                BUILT FOR FIELD TEAMS
                            </div>

                            <h2>
                                Everything you need
                                <br />
                                <span>to manage attendance.</span>
                            </h2>

                        </div>

                        <p>
                            Simple tools. Precise location intelligence.
                            Better workforce visibility.
                        </p>

                    </div>


                    <div className="geo-feature-grid">

                        {/* FEATURE 01 */}
                        <article className="geo-feature-card geo-blue">

                            <div className="geo-feature-number">
                                01
                            </div>

                            <div className="geo-feature-icon">
                                ⌖
                            </div>

                            <h3>
                                Smart Geofencing
                            </h3>

                            <p>
                                Create approved work zones and verify attendance
                                based on the employee's actual location.
                            </p>

                            <div className="geo-feature-link">
                                Location intelligence
                                <span>→</span>
                            </div>

                        </article>


                        {/* FEATURE 02 */}
                        <article className="geo-feature-card geo-white">

                            <div className="geo-feature-number">
                                02
                            </div>

                            <div className="geo-feature-icon">
                                ✓
                            </div>

                            <h3>
                                Accurate Attendance
                            </h3>

                            <p>
                                Reduce manual attendance errors with precise
                                location-based check-ins and check-outs.
                            </p>

                            <div className="geo-feature-link">
                                Verified check-ins
                                <span>→</span>
                            </div>

                        </article>


                        {/* FEATURE 03 */}
                        <article className="geo-feature-card geo-teal">

                            <div className="geo-feature-number">
                                03
                            </div>

                            <div className="geo-feature-icon">
                                ↗
                            </div>

                            <h3>
                                Workforce Visibility
                            </h3>

                            <p>
                                Give managers a clear picture of field activity,
                                attendance and workforce movement.
                            </p>

                            <div className="geo-feature-link">
                                Real-time visibility
                                <span>→</span>
                            </div>

                        </article>

                    </div>

                </div>

            </section>


            {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
            <section className="geo-how">

                <div className="geo-container">

                    <div className="geo-section-label">
                        <span></span>
                        HOW IT WORKS
                        <span></span>
                    </div>

                    <h2>
                        Simple from check-in
                        <span> to payroll.</span>
                    </h2>


                    <div className="geo-steps">

                        {/* STEP 01 */}
                        <div className="geo-step">

                            <div className="geo-step-number">
                                01
                            </div>

                            <h3>
                                Create work zones
                            </h3>

                            <p>
                                Set approved locations and geofencing areas
                                for your teams.
                            </p>

                        </div>


                        {/* STEP 02 */}
                        <div className="geo-step">

                            <div className="geo-step-number">
                                02
                            </div>

                            <h3>
                                Employees check in
                            </h3>

                            <p>
                                Team members check in from their authorized
                                work location.
                            </p>

                        </div>


                        {/* STEP 03 */}
                        <div className="geo-step">

                            <div className="geo-step-number">
                                03
                            </div>

                            <h3>
                                Verify attendance
                            </h3>

                            <p>
                                Location intelligence validates attendance
                                automatically.
                            </p>

                        </div>


                        {/* STEP 04 */}
                        <div className="geo-step">

                            <div className="geo-step-number">
                                04
                            </div>

                            <h3>
                                Manage payroll
                            </h3>

                            <p>
                                Use accurate attendance information to simplify
                                workforce and payroll management.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          CTA
      ===================================================== */}
            <section className="geo-cta">

                <div className="geo-cta-inner">

                    <div className="geo-cta-badge">
                        <span>✦</span>
                        READY TO GET STARTED?
                    </div>

                    <h2>
                        Make attendance
                        <br />
                        <span>smarter with GeoCheckIn.</span>
                    </h2>

                    <p>
                        Bring accuracy, transparency and simplicity
                        to your field workforce.
                    </p>

                    <div className="geo-cta-actions">

                        <a
                            href="https://play.google.com/store/apps/details?id=com.naxent.geoattend"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="geo-cta-primary"
                        >
                            <span>▶</span>
                            Download on Play Store
                        </a>

                        <Link
                            href="/contact"
                            className="geo-cta-secondary"
                        >
                            Talk to our team
                            <span>→</span>
                        </Link>

                    </div>

                </div>

            </section>
            {/* =====================================================
                FOOTER
            ===================================================== */}

            <Footer />

        </main>
    );
}