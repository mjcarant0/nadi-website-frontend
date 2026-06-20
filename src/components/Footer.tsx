"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        {/* Row 1: Columns */}
        <div className="footer-columns">
          {/* Column 1: Branding */}
          <div className="footer-col branding">
            <a href="#" className="footer-logo">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="8" fill="#1A73E8" />
                <path
                  d="M16 7L24 13V23C24 24.1046 23.1046 25 22 25H10C8.89543 25 8 24.1046 8 23V13L16 7Z"
                  fill="url(#footer-logo-grad)"
                />
                <path
                  d="M16 11V21M11 16H21"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="footer-logo-grad" x1="16" y1="7" x2="16" y2="25" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00B4A2" />
                    <stop offset="1" stopColor="#008376" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="footer-logo-text">N.A.D.I.</span>
            </a>
            <p className="footer-tagline">"{t("hero.badge")}"</p>
            <p className="footer-desc">
              {t("footer.desc")}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col links">
            <h4 className="footer-title">{t("footer.links.title")}</h4>
            <nav className="footer-nav">
              <a href="#tungkol" className="footer-link">{t("nav.about")}</a>
              <a href="#misyon-bisyon" className="footer-link">{t("nav.mission")}</a>
              <a href="#mga-tampok" className="footer-link">{t("nav.features")}</a>
              <a href="#i-access" className="footer-link">{t("nav.access")}</a>
            </nav>
          </div>

          {/* Column 3: Access Links */}
          <div className="footer-col links">
            <h4 className="footer-title">{t("footer.portal.title")}</h4>
            <nav className="footer-nav">
              <a
                href="https://nadi-client.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {t("access.card1.title")}
              </a>
              <a
                href="https://nadi-admin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {t("access.card2.title")}
              </a>
            </nav>
          </div>
        </div>

        {/* Row 2: Bottom Bar */}
        <div className="footer-bottom">
          <span className="footer-copy">
            {t("footer.copy")}
          </span>
          <span className="footer-project">
            {t("footer.project")}
          </span>
        </div>
      </div>
    </footer>
  );
}
