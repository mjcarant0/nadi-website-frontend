"use client";

import React from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero-section">
      <div className="grid-bg"></div>
      <div className="radial-glow"></div>
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left: Text Content */}
          <div className="hero-content">
            <FadeIn delay={100}>
              <div className="hero-badge">
                <span className="badge-flag">🇵🇭</span>
                <span className="badge-text">{t("hero.badge")}</span>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <h1 className="hero-title">
                {t("hero.title1")} <br />
                <span className="text-gradient">{t("hero.title2")}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="hero-subtitle">
                {t("hero.subtitle")}
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="hero-ctas">
                <a
                  href="https://nadi-app.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-hero"
                >
                  {t("hero.cta.app")}
                </a>
                <a
                  href="https://nadi-admin.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline btn-hero"
                >
                  {t("hero.cta.admin")}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="hero-trust">
                <div className="hero-trust-item">
                  <svg className="trust-icon" width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M16.6666 5L7.49992 14.1667L3.33325 10"
                      stroke="#00B4A2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{t("hero.trust.offline")}</span>
                </div>
                <div className="hero-trust-item">
                  <svg className="trust-icon" width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M16.6666 5L7.49992 14.1667L3.33325 10"
                      stroke="#00B4A2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{t("hero.trust.doh")}</span>
                </div>
                <div className="hero-trust-item">
                  <svg className="trust-icon" width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M16.6666 5L7.49992 14.1667L3.33325 10"
                      stroke="#00B4A2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{t("hero.trust.free")}</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Pure CSS Mockups Visuals */}
          <div className="hero-visual">
            <div className="mockup-wrapper float-animation">
              {/* Dashboard Preview Widget */}
              <div className="css-dashboard">
                <div className="dashboard-header">
                  <div className="doh-symbol">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#1A73E8" />
                      <circle cx="12" cy="12" r="7" fill="#FFFFFF" />
                      <path d="M12 8V16M8 12H16" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="dashboard-title-info">
                    <span className="dashboard-region">REGION IV-A</span>
                    <span className="dashboard-app">{t("mockup.admin")}</span>
                  </div>
                </div>

                <div className="dashboard-stats">
                  <div className="stat-box">
                    <span className="stat-label">{t("mockup.patients")}</span>
                    <span className="stat-value">1,420</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-label">{t("mockup.alerts")}</span>
                    <span className="stat-value text-red">34</span>
                  </div>
                </div>

                <div className="dashboard-chart-container">
                  <span className="chart-title">{t("mockup.visits")}</span>
                  <div className="bar-chart">
                    <div className="bar" style={{ height: "40%" }}></div>
                    <div className="bar" style={{ height: "60%" }}></div>
                    <div className="bar" style={{ height: "45%" }}></div>
                    <div className="bar" style={{ height: "75%" }}></div>
                    <div className="bar" style={{ height: "90%" }}></div>
                    <div className="bar" style={{ height: "65%" }}></div>
                    <div className="bar" style={{ height: "80%" }}></div>
                  </div>
                </div>
              </div>

              {/* Mobile Phone Mockup */}
              <div className="css-phone">
                <div className="css-phone-notch"></div>
                <div className="css-phone-screen">
                  {/* Status Bar */}
                  <div className="phone-status-bar">
                    <span>9:41</span>
                    <div className="status-icons">
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="phone-app-header">
                    <div className="header-user">
                      <div className="avatar">BHW</div>
                      <div>
                        <div className="user-role">{t("mockup.phone.worker")}</div>
                        <div className="user-name">Bgy. Maligaya</div>
                      </div>
                    </div>
                    <span className="sync-badge">✓ {t("mockup.phone.synced")}</span>
                  </div>

                  {/* Search Bar */}
                  <div className="phone-search">
                    <span className="search-icon">🔍</span>
                    <span>{t("mockup.phone.search")}</span>
                  </div>

                  {/* Patient List */}
                  <div className="phone-patient-list">
                    <div className="list-section-header">{t("mockup.phone.title")}</div>

                    {/* Patient 1 - Normal */}
                    <div className="patient-mini-card">
                      <div className="patient-info">
                        <span className="p-name">Maria Clara Santos</span>
                        <span className="p-details">32 Weeks · G2 P1</span>
                      </div>
                      <div className="p-status-pill green">
                        <span className="pulse-dot"></span>
                        {t("mockup.phone.normal")}
                      </div>
                    </div>

                    {/* Patient 2 - High Risk */}
                    <div className="patient-mini-card alert">
                      <div className="patient-info">
                        <span className="p-name">Juana Dela Cruz</span>
                        <span className="p-details">24 Weeks · G1 P0</span>
                      </div>
                      <div className="p-status-pill red">
                        <span className="pulse-dot red-pulse"></span>
                        {t("mockup.phone.alert")}
                      </div>
                    </div>

                    {/* Patient 3 - Normal */}
                    <div className="patient-mini-card">
                      <div className="patient-info">
                        <span className="p-name">Sofia Angela Lopez</span>
                        <span className="p-details">18 Weeks · G3 P2</span>
                      </div>
                      <div className="p-status-pill green">
                        <span className="pulse-dot"></span>
                        {t("mockup.phone.normal")}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="phone-bottom-nav">
                    <span className="nav-item active">📋 {t("mockup.phone.patients")}</span>
                    <span className="nav-item">💬 {t("mockup.phone.messages")}</span>
                    <span className="nav-item">⚙️ {t("mockup.phone.settings")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
