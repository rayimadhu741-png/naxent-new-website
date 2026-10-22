"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.css";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 80) {
                // scroll down
                setShow(false);
                setOpen(false);
            } else {
                // scroll up
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", controlNavbar);
        return () => window.removeEventListener("scroll", controlNavbar);
    }, [lastScrollY]);

    return (
        <>
            <div className={`header-wrapper ${show ? "header-show" : "header-hide"}`}>
                <header className="header">
                    <Link href="/" className="logo">
                        <img src="/nlogo.png" alt="Naxent" />
                        <span>NAXENT</span>
                    </Link>

                    <nav className={`nav ${open ? "nav-open" : ""}`}>
                        <div className="mobile-top-bar">
                            <span className="mobile-menu-text">Menu</span>
                            <button className="close-btn-mobile" onClick={() => setOpen(false)}>✕</button>
                        </div>

                        <Link href="/" className={isActive("/") ? "active" : ""} onClick={() => setOpen(false)}>Home</Link>
                        <Link href="/about" className={isActive("/about") ? "active" : ""} onClick={() => setOpen(false)}>About us</Link>
                        <Link href="/products" className={isActive("/products") ? "active" : ""} onClick={() => setOpen(false)}>Products</Link>
                        <Link href="/services" className={isActive("/services") ? "active" : ""} onClick={() => setOpen(false)}>Services</Link>
                        <Link href="/investors" className={isActive("/investors") ? "active" : ""} onClick={() => setOpen(false)}>Investors</Link>
                        <Link href="/contact" className={isActive("/contact") ? "active" : ""} onClick={() => setOpen(false)}>Contact Us</Link>

                        <Link href="/talk" className="talk-btn-mobile">Let's talk →</Link>
                    </nav>

                    <Link href="/talk" className="talk-btn">Let's talk →</Link>
                    <button className="menu-btn" onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
                </header>
            </div>
            {open && <div className="nav-overlay" onClick={() => setOpen(false)}></div>}
        </>
    );
}