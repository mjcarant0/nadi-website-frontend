"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container container">
          {/* Logo */}
          <a href="#" className="navbar-logo">
            <svg
              className="logo-icon"
              width="36"
              height="36"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="8" fill="#1A73E8" />
              <path
                d="M16 7L24 13V23C24 24.1046 23.1046 25 22 25H10C8.89543 25 8 24.1046 8 23V13L16 7Z"
                fill="url(#logo-grad)"
              />
              <path
                d="M16 11V21M11 16H21"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="logo-grad" x1="16" y1="7" x2="16" y2="25" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00B4A2" />
                  <stop offset="1" stopColor="#008376" />
                </linearGradient>
              </defs>
            </svg>
            <span className="logo-text">
              N.A.D.I.<span className="logo-dot">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
            <a href="#tungkol" className="nav-link">
              {t("nav.about")}
            </a>
            <a href="#misyon-bisyon" className="nav-link">
              {t("nav.mission")}
            </a>
            <a href="#mga-tampok" className="nav-link">
              {t("nav.features")}
            </a>
            <a href="#i-access" className="nav-link">
              {t("nav.access")}
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="desktop-ctas">
            {/* Language Selector */}
            <div className="language-selector">
              <button
                className={`lang-btn ${language === "en" ? "active" : ""}`}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
              <span className="lang-divider">|</span>
              <button
                className={`lang-btn ${language === "fil" ? "active" : ""}`}
                onClick={() => setLanguage("fil")}
              >
                FIL
              </button>
            </div>

            <a
              href="https://nadi-client.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navbar-outline"
            >
              {t("nav.cta.app")}
            </a>
            <a
              href="https://nadi-admin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navbar-filled"
            >
              {t("nav.cta.admin")}
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <a href="#" className="navbar-logo" onClick={closeMobileMenu}>
            <svg
              className="logo-icon"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx="8" fill="#1A73E8" />
              <path
                d="M16 7L24 13V23C24 24.1046 23.1046 25 22 25H10C8.89543 25 8 24.1046 8 23V13L16 7Z"
                fill="url(#drawer-logo-grad)"
              />
              <path
                d="M16 11V21M11 16H21"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="drawer-logo-grad"
                  x1="16"
                  y1="7"
                  x2="16"
                  y2="25"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00B4A2" />
                  <stop offset="1" stopColor="#008376" />
                </linearGradient>
              </defs>
            </svg>
            <span className="logo-text">N.A.D.I.</span>
          </a>
          <button className="btn-close-drawer" onClick={closeMobileMenu} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Language Selector inside Drawer */}
        <div className="mobile-drawer-lang">
          <button
            className={`mobile-lang-btn ${language === "en" ? "active" : ""}`}
            onClick={() => setLanguage("en")}
          >
            English
          </button>
          <button
            className={`mobile-lang-btn ${language === "fil" ? "active" : ""}`}
            onClick={() => setLanguage("fil")}
          >
            Filipino
          </button>
        </div>

        <nav className="mobile-nav">
          <a href="#tungkol" className="mobile-nav-link" onClick={closeMobileMenu}>
            {t("nav.about")}
          </a>
          <a href="#misyon-bisyon" className="mobile-nav-link" onClick={closeMobileMenu}>
            {t("nav.mission")}
          </a>
          <a href="#mga-tampok" className="mobile-nav-link" onClick={closeMobileMenu}>
            {t("nav.features")}
          </a>
          <a href="#i-access" className="mobile-nav-link" onClick={closeMobileMenu}>
            {t("nav.access")}
          </a>
        </nav>

        <div className="mobile-ctas">
          <a
            href="https://nadi-client.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-drawer-outline"
            onClick={closeMobileMenu}
          >
            {t("nav.cta.app")}
          </a>
          <a
            href="https://nadi-admin.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-drawer-filled"
            onClick={closeMobileMenu}
          >
            {t("nav.cta.admin")}
          </a>
        </div>
      </div>
    </>
  );
}
