"use client";

import React from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageContext";

interface FeatureItem {
  title: string;
  desc: string;
  colorType: "blue" | "teal";
  svgIcon: React.ReactNode;
}

export default function Features() {
  const { t } = useLanguage();

  const featuresList: FeatureItem[] = [
    {
      title: t("features.1.title"),
      desc: t("features.1.desc"),
      colorType: "blue",
      svgIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
          <line x1="9" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="9" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: t("features.2.title"),
      desc: t("features.2.desc"),
      colorType: "teal",
      svgIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M22 12H18L15 21L9 3L6 12H2"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: t("features.3.title"),
      desc: t("features.3.desc"),
      colorType: "blue",
      svgIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="16" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: t("features.4.title"),
      desc: t("features.4.desc"),
      colorType: "teal",
      svgIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="9" y="2" width="6" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M5 10C5 13.866 8.13401 17 12 17C15.866 17 19 13.866 19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="17" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
          <line x1="9" y1="22" x2="15" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: t("features.5.title"),
      desc: t("features.5.desc"),
      colorType: "blue",
      svgIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M23 19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V8C1 6.89543 1.89543 6 3 6H7L9 3H15L17 6H21C22.1046 6 23 6.89543 23 8V19Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: t("features.6.title"),
      desc: t("features.6.desc"),
      colorType: "teal",
      svgIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M21.5 2V6H17.5M2.5 22V18H6.5M20.9 14.5C20.2 16.8 18.6 18.8 16.5 20C14.3 21.2 11.8 21.4 9.5 20.7C7.2 20 5.3 18.4 4.2 16.3C3.1 14.2 3 11.7 3.8 9.5C4.6 7.3 6.2 5.5 8.3 4.5C10.4 3.5 12.9 3.5 15.1 4.5L21 9M3 15L8.9 19.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="mga-tampok" className="section alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <FadeIn delay={100}>
            <span className="section-label">{t("features.label")}</span>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className="section-title">{t("features.title")}</h2>
          </FadeIn>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {featuresList.map((feat, index) => (
            <FadeIn key={index} delay={100 * (index + 1)} className="feature-card-wrap">
              <div className="feature-card">
                <div className={`feature-icon-box ${feat.colorType}`}>
                  {feat.svgIcon}
                </div>
                <h3 className="feature-card-title">{feat.title}</h3>
                <p className="feature-card-desc">{feat.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
