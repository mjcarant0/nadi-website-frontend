"use client";

import React from "react";
import FadeIn from "./FadeIn";

interface Member {
  name: string;
  role: string;
}

export default function Team() {
  const members: Member[] = [
    { name: "Carl Sebastian E. Barcelona", role: "AI / ML Engineer" },
    { name: "Marjoy M. Caranto", role: "Full-stack Developer" },
    { name: "Jef R. Lecias", role: "Database Engineer" },
    { name: "Mary Ruth P. Relator", role: "Front-end Developer" },
    { name: "Jared Dean R. Tiu", role: "Back-end Developer" },
  ];

  return (
    <section className="section alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <FadeIn delay={100}>
            <span className="section-label">Ang Aming Koponan</span>
          </FadeIn>
          <FadeIn delay={200}>
            <h2 className="section-title">Meet the Team</h2>
          </FadeIn>
        </div>

        {/* Team Cards Container */}
        <div className="team-row">
          {members.map((member, index) => (
            <FadeIn key={index} delay={100 * (index + 1)} className="team-card-wrap">
              <div className="team-card">
                {/* Photo Placeholder */}
                <div className="team-photo-placeholder">
                  {/* Silhouette Icon */}
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="#90B8E8" className="silhouette-svg">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                {/* Member Name */}
                <h3 className="team-member-name">{member.name}</h3>
                {/* Role Tag */}
                <div className="team-member-role-badge">
                  {member.role}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
