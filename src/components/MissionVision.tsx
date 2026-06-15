"use client";

import React from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageContext";

export default function MissionVision() {
  const { t } = useLanguage();

  return (
    <section id="misyon-bisyon" className="section bg-white">
      <div className="container">
        <div className="mission-vision-grid">
          {/* Mission Card */}
          <FadeIn delay={100} className="mv-card-wrap">
            <div className="mv-card mission">
              <div className="mv-icon-wrap teal-bg">
                {/* Custom Target/Heart SVG Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#00B4A2" strokeWidth="2" />
                  <circle cx="12" cy="12" r="6" stroke="#00B4A2" strokeWidth="2" />
                  <circle cx="12" cy="12" r="2" fill="#00B4A2" />
                  <path d="M12 2V5M12 19V22M2 12H5M19 12H22" stroke="#00B4A2" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="mv-label teal-color">{t("mv.mission.label")}</span>
              <p className="mv-text">
                "{t("mv.mission.text")}"
              </p>
            </div>
          </FadeIn>

          {/* Vision Card */}
          <FadeIn delay={200} className="mv-card-wrap">
            <div className="mv-card vision">
              <div className="mv-icon-wrap blue-bg">
                {/* Custom Star/Sunrise SVG Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
                    stroke="#1A73E8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 5L13.8 8.6L18 9.2L15 12.2L15.6 16.4L12 14.6L8.4 16.4L9 12.2L6 9.2L10.2 8.6L12 5Z" fill="#1A73E8" />
                </svg>
              </div>
              <span className="mv-label blue-color">{t("mv.vision.label")}</span>
              <p className="mv-text">
                "{t("mv.vision.text")}"
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
