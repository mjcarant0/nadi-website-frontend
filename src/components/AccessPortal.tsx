"use client";

import React from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageContext";

export default function AccessPortal() {
  const { t } = useLanguage();

  return (
    <section id="i-access" className="access-section">
      <div className="access-radial-glow"></div>
      <div className="container">
        {/* Section Header */}
        <div className="access-header">
          <FadeIn delay={100}>
            <h2 className="access-title">{t("access.title")}</h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="access-subtext">{t("access.subtext")}</p>
          </FadeIn>
        </div>

        {/* Portal Cards */}
        <div className="portal-grid">
          {/* Card 1: BHW / DTTB */}
          <FadeIn delay={200} className="portal-card-wrap">
            <div className="portal-card">
              <div className="portal-icon">
                {/* SVG Phone Icon */}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="portal-card-title">{t("access.card1.title")}</h3>
              <p className="portal-card-desc">
                {t("access.card1.desc")}
              </p>
              <a
                href="https://nadi-client.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-portal-white"
              >
                {t("access.card1.btn")}
              </a>
              <span className="portal-note">{t("access.card1.note")}</span>
            </div>
          </FadeIn>

          {/* Card 2: DOH Admin */}
          <FadeIn delay={300} className="portal-card-wrap">
            <div className="portal-card">
              <div className="portal-icon">
                {/* SVG Monitor Icon */}
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="portal-card-title">{t("access.card2.title")}</h3>
              <p className="portal-card-desc">
                {t("access.card2.desc")}
              </p>
              <a
                href="https://nadi-admin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-portal-teal"
              >
                {t("access.card2.btn")}
              </a>
              <span className="portal-note">{t("access.card2.note")}</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
