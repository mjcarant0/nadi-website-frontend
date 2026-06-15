"use client";

import React from "react";
import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageContext";

interface StepItem {
  number: string;
  title: string;
  desc: string;
  svgIcon: React.ReactNode;
}

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps: StepItem[] = [
    {
      number: "01",
      title: t("how.1.title"),
      desc: t("how.1.desc"),
      svgIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      number: "02",
      title: t("how.2.title"),
      desc: t("how.2.desc"),
      svgIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: t("how.3.title"),
      desc: t("how.3.desc"),
      svgIcon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section bg-white border-top">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <FadeIn delay={100}>
            <span className="section-label">{t("how.label")}</span>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className="section-title">{t("how.title")}</h2>
          </FadeIn>
        </div>

        {/* Steps container */}
        <div className="steps-container">
          {/* Connecting dashed line for desktop */}
          <div className="steps-connecting-line">
            <svg width="100%" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="5" x2="100%" y2="5" stroke="#E3EAF4" strokeWidth="3" strokeDasharray="8 8" />
            </svg>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={150 * (index + 1)} className="step-card-wrap">
                <div className="step-card">
                  {/* Step Bubble */}
                  <div className="step-bubble">
                    <span className="step-number">{step.number}</span>
                    <div className="step-icon">{step.svgIcon}</div>
                  </div>
                  {/* Title & Description */}
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
