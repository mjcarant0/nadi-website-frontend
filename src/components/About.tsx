"use client";

import React from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="tungkol" className="section alt">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Content */}
          <div className="about-content">
            <FadeIn delay={100}>
              <span className="section-label">{t("about.label")}</span>
            </FadeIn>
            
            <FadeIn delay={200}>
              <h2 className="section-title about-heading">{t("about.title")}</h2>
            </FadeIn>
            
            <FadeIn delay={300}>
              <div className="about-text">
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
              </div>
            </FadeIn>

            {/* Quick stats check */}
            <FadeIn delay={400}>
              <div className="about-features-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🌐</div>
                  <div className="highlight-text-wrap">
                    <span className="highlight-title">{t("about.highlight1.title")}</span>
                    <span className="highlight-desc">{t("about.highlight1.desc")}</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🇵🇭</div>
                  <div className="highlight-text-wrap">
                    <span className="highlight-title">{t("about.highlight2.title")}</span>
                    <span className="highlight-desc">{t("about.highlight2.desc")}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Pure SVG Connection Visual */}
          <div className="about-visual">
            <FadeIn delay={200} className="about-svg-wrapper">
              <svg viewBox="0 0 400 400" className="about-schematic-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background circles */}
                <circle cx="200" cy="200" r="160" stroke="#E3EAF4" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="100" stroke="#E3EAF4" strokeWidth="1" />
                
                {/* Connecting lines */}
                <path d="M200 200 L90 120" stroke="#1A73E8" strokeWidth="2" strokeDasharray="5 5" className="dash-flow" />
                <path d="M200 200 L310 120" stroke="#1A73E8" strokeWidth="2" strokeDasharray="5 5" className="dash-flow" />
                <path d="M200 200 L200 310" stroke="#1A73E8" strokeWidth="2" strokeDasharray="5 5" className="dash-flow" />

                {/* Central Health Core */}
                <g className="node-pulse">
                  <circle cx="200" cy="200" r="40" fill="#E8F0FE" stroke="#1A73E8" strokeWidth="2" />
                  <circle cx="200" cy="200" r="32" fill="url(#core-grad)" />
                  {/* Heart / Cross icon */}
                  <path d="M192 200H208M200 192V208" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                </g>

                {/* Node 1: BHW (Phone/Barangay) */}
                <g className="node-hover" transform="translate(90, 120)">
                  <circle cx="0" cy="0" r="36" fill="#FFFFFF" stroke="#E3EAF4" strokeWidth="2" />
                  <circle cx="0" cy="0" r="28" fill="#F5F8FF" />
                  {/* Mobile Phone SVG Icon */}
                  <rect x="-8" y="-14" width="16" height="28" rx="3" fill="none" stroke="#1A73E8" strokeWidth="2" />
                  <circle cx="0" cy="10" r="1.5" fill="#1A73E8" />
                  <text x="0" y="28" fill="#1C2B4A" fontSize="10" fontWeight="700" textAnchor="middle" transform="translate(0, 12)">{t("about.node.bhw")}</text>
                </g>

                {/* Node 2: DTTB Doctor (Tablet) */}
                <g className="node-hover" transform="translate(310, 120)">
                  <circle cx="0" cy="0" r="36" fill="#FFFFFF" stroke="#E3EAF4" strokeWidth="2" />
                  <circle cx="0" cy="0" r="28" fill="#E8F9F8" />
                  {/* Doctor Cross / Heart Clipboard */}
                  <rect x="-11" y="-13" width="22" height="26" rx="2" fill="none" stroke="#00B4A2" strokeWidth="2" />
                  <line x1="-6" y1="-8" x2="6" y2="-8" stroke="#00B4A2" strokeWidth="2" />
                  <path d="M-4 3H4M0 -1V7" stroke="#00B4A2" strokeWidth="2" />
                  <text x="0" y="28" fill="#1C2B4A" fontSize="10" fontWeight="700" textAnchor="middle" transform="translate(0, 12)">{t("about.node.dttb")}</text>
                </g>

                {/* Node 3: DOH Admin (Dashboard) */}
                <g className="node-hover" transform="translate(200, 310)">
                  <circle cx="0" cy="0" r="36" fill="#FFFFFF" stroke="#E3EAF4" strokeWidth="2" />
                  <circle cx="0" cy="0" r="28" fill="#FFF8F5" />
                  {/* Dashboard / Laptop Screen */}
                  <rect x="-14" y="-11" width="28" height="18" rx="2" fill="none" stroke="#E87A1A" strokeWidth="2" />
                  <line x1="-18" y1="9" x2="18" y2="9" stroke="#E87A1A" strokeWidth="2" />
                  <circle cx="-6" cy="-4" r="1.5" fill="#E87A1A" />
                  <circle cx="0" cy="-4" r="1.5" fill="#E87A1A" />
                  <line x1="-6" y1="2" x2="6" y2="2" stroke="#E87A1A" strokeWidth="1.5" />
                  <text x="0" y="28" fill="#1C2B4A" fontSize="10" fontWeight="700" textAnchor="middle" transform="translate(0, 12)">{t("about.node.admin")}</text>
                </g>

                {/* Definitions */}
                <defs>
                  <linearGradient id="core-grad" x1="168" y1="168" x2="232" y2="232" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1A73E8" />
                    <stop offset="1" stopColor="#00B4A2" />
                  </linearGradient>
                </defs>
              </svg>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
