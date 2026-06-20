"use client";

import React from "react";
import FadeIn from "./FadeIn";

interface Member {
  name: string;
  role: string;
  image?: string;
}

export default function Team() {
  const [imageErrors, setImageErrors] = React.useState<Record<string, boolean>>({});

  const members: Member[] = [
    { name: "Carl Sebastian E. Barcelona", role: "AI / ML Engineer", image: "/team/dev_carl.jpg" },
    { name: "Marjoy M. Caranto", role: "Full-stack Developer", image: "/team/dev_marjoy.jpg" },
    { name: "Jef R. Lecias", role: "Database Engineer", image: "/team/dev_jef.jpg" },
    { name: "Mary Ruth P. Relator", role: "Front-end Developer", image: "/team/dev_mary.jpg" },
    { name: "Jared Dean R. Tiu", role: "Back-end Developer", image: "/team/dev_jared.jpg" },
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
                {/* Photo Container */}
                <div className="team-photo-placeholder">
                  {member.image && !imageErrors[member.image] ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="team-member-photo" 
                      onError={() => {
                        if (member.image) {
                          setImageErrors(prev => ({ ...prev, [member.image!]: true }));
                        }
                      }}
                    />
                  ) : (
                    /* Silhouette Icon */
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="#90B8E8" className="silhouette-svg">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
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
