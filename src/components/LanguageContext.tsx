"use client";

import React, { createContext, useContext, useState } from "react";

export type Language = "en" | "fil";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  fil: {
    // Navbar
    "nav.about": "Tungkol sa NADI",
    "nav.mission": "Misyon at Bisyon",
    "nav.features": "Mga Tampok",
    "nav.access": "I-access",
    "nav.cta.app": "Buksan ang App",
    "nav.cta.admin": "Admin Portal",

    // Hero
    "hero.badge": "Para sa Nanay. Para sa Bayan.",
    "hero.title1": "Modernong Pangangalaga",
    "hero.title2": "para sa Bawat Ina",
    "hero.subtitle": "Ang N.A.D.I. ay isang digital health platform na tumutulong sa mga BHW at DTTB na subaybayan ang kalusugan ng mga buntis — kahit walang internet.",
    "hero.cta.app": "Buksan ang App",
    "hero.cta.admin": "Admin Portal",
    "hero.trust.offline": "Offline-ready",
    "hero.trust.doh": "DOH-aligned",
    "hero.trust.free": "Libre",

    // Hero Mockup Phone & Dashboard
    "mockup.admin": "NADI Admin Web",
    "mockup.patients": "Total Patients",
    "mockup.alerts": "High Risk Alerts",
    "mockup.visits": "Maternal Visits (Weekly)",
    "mockup.phone.title": "Mga Buntis sa Barangay",
    "mockup.phone.normal": "Normal",
    "mockup.phone.alert": "Mataas BP",
    "mockup.phone.patients": "Pasyente",
    "mockup.phone.messages": "Mensahe",
    "mockup.phone.settings": "Settings",
    "mockup.phone.worker": "Barangay Health Worker",
    "mockup.phone.synced": "Synced",
    "mockup.phone.search": "Maghanap ng pasyente...",

    // About
    "about.label": "Tungkol sa Amin",
    "about.title": "Ano ang N.A.D.I.?",
    "about.p1": "N.A.D.I. (Neonatal and Antenatal Digital Intelligence) ay isang offline-first digital health platform na dinisenyo para sa mga Barangay Health Worker (BHW) at Doctor to the Barrios (DTTB) sa mga liblib na lugar ng Pilipinas.",
    "about.p2": "Ang layunin nito ay tiyakin na ang bawat buntis — kahit nasa GIDA (Geographically Isolated and Disadvantaged Areas) — ay makakatanggap ng tamang pag-aalaga sa pamamagitan ng makabagong teknolohiya.",
    "about.highlight1.title": "Offline-First",
    "about.highlight1.desc": "Maaaring gamitin kahit walang internet signal.",
    "about.highlight2.title": "DOH Alinsunod",
    "about.highlight2.desc": "Kasama ang mga pamantayan at patnubay ng DOH.",
    "about.node.bhw": "BHW",
    "about.node.dttb": "DTTB",
    "about.node.admin": "DOH ADMIN",

    // Mission & Vision
    "mv.mission.label": "Misyon",
    "mv.mission.text": "Magbigay ng maaasahang digital na kasangkapan sa bawat BHW at DTTB upang mapababa ang maternal at neonatal na kamatayan sa buong Pilipinas — kahit wala pang internet.",
    "mv.vision.label": "Bisyon",
    "mv.vision.text": "Ang isang Pilipinas kung saan ang bawat ina, kahit saan man siya naroroon, ay may access sa ligtas at dekalidad na pangangalagang pangkalusugan.",

    // Features
    "features.label": "Mga Tampok",
    "features.title": "Lahat ng Kailangan ng BHW — Sa Isang App",
    "features.1.title": "Listahan ng mga Pasyente",
    "features.1.desc": "I-track ang lahat ng buntis sa iyong barangay — kahit offline.",
    "features.2.title": "Awtomatikong Vital Signs",
    "features.2.desc": "Direktang nagbabasa ng presyon, oxygen, at tibok ng puso mula sa bluetooth device.",
    "features.3.title": "Alerto sa Panganib",
    "features.3.desc": "Agad na nagbababala kapag may mapanganib na resulta — walang kumplikadong interpretasyon.",
    "features.4.title": "Voice Notes sa Taglish",
    "features.4.desc": "Mag-record ng tala gamit ang boses — awtomatikong nako-convert sa SOAP note.",
    "features.5.title": "OCR Scanner",
    "features.5.desc": "I-scan ang Mother & Child Book o lab results — nababasa ng app ang laman.",
    "features.6.title": "Offline + Auto-Sync",
    "features.6.desc": "Gumagana kahit walang signal. Awtomatikong nag-a-upload kapag may koneksyon na.",

    // How It Works
    "how.label": "Paano ito gumagana",
    "how.title": "Simple. Mabilis. Para sa Lahat.",
    "how.1.title": "Mag-login",
    "how.1.desc": "Gamitin ang iyong ID at PIN. May fingerprint login din para sa mas mabilis na access.",
    "how.2.title": "I-check ang Pasyente",
    "how.2.desc": "Sundan ang step-by-step checklist. Awtomatiko itong nagbabasa ng vitals mula sa device.",
    "how.3.title": "I-save at I-report",
    "how.3.desc": "Ang lahat ng datos ay naka-save kahit offline. Awtomatiko itong napupunta sa DTTB kapag may signal.",

    // Access Portal
    "access.title": "Handa Ka Na Bang Magsimula?",
    "access.subtext": "Piliin ang tamang portal para sa iyong papel.",
    "access.card1.title": "Mobile App (PWA)",
    "access.card1.desc": "Para sa mga BHW at DTTB. I-access sa iyong smartphone — walang kailangang i-download.",
    "access.card1.btn": "Buksan ang App →",
    "access.card1.note": "Gumagana sa Android at iOS",
    "access.card2.title": "Admin Portal",
    "access.card2.desc": "Para sa mga DOH admin. I-monitor ang datos ng buong rehiyon sa isang dashboard.",
    "access.card2.btn": "Pumunta sa Admin Portal →",
    "access.card2.note": "Para sa awtorisadong gumagamit lamang",

    // Team
    "team.label": "Ang Aming Koponan",
    "team.title": "Meet the Team",

    // Footer
    "footer.desc": "Isang makabagong digital health platform na naka-align sa Department of Health (DOH) para sa kaligtasan ng bawat ina at sanggol.",
    "footer.links.title": "Mga Quick Link",
    "footer.portal.title": "I-access ang Portal",
    "footer.copy": "© 2025 N.A.D.I. — Lahat ng Karapatan ay Nakalaan.",
    "footer.project": "Isang proyekto ng Department of Health (DOH)"
  },
  en: {
    // Navbar
    "nav.about": "About NADI",
    "nav.mission": "Mission & Vision",
    "nav.features": "Key Features",
    "nav.access": "Access",
    "nav.cta.app": "Open App",
    "nav.cta.admin": "Admin Portal",

    // Hero
    "hero.badge": "For the Mother. For the Nation.",
    "hero.title1": "Modern Care",
    "hero.title2": "for Every Mother",
    "hero.subtitle": "N.A.D.I. is a digital health platform that helps BHWs and DTTBs track maternal health — even without internet.",
    "hero.cta.app": "Open App",
    "hero.cta.admin": "Admin Portal",
    "hero.trust.offline": "Offline-ready",
    "hero.trust.doh": "DOH-aligned",
    "hero.trust.free": "Free",

    // Hero Mockup Phone & Dashboard
    "mockup.admin": "NADI Admin Web",
    "mockup.patients": "Total Patients",
    "mockup.alerts": "High Risk Alerts",
    "mockup.visits": "Maternal Visits (Weekly)",
    "mockup.phone.title": "Barangay Pregnant Women",
    "mockup.phone.normal": "Normal",
    "mockup.phone.alert": "High BP",
    "mockup.phone.patients": "Patients",
    "mockup.phone.messages": "Messages",
    "mockup.phone.settings": "Settings",
    "mockup.phone.worker": "Barangay Health Worker",
    "mockup.phone.synced": "Synced",
    "mockup.phone.search": "Search for patient...",

    // About
    "about.label": "About Us",
    "about.title": "What is N.A.D.I.?",
    "about.p1": "N.A.D.I. (Neonatal and Antenatal Digital Intelligence) is an offline-first digital health platform designed for Barangay Health Workers (BHW) and Doctors to the Barrios (DTTB) in remote areas of the Philippines.",
    "about.p2": "Its goal is to ensure that every pregnant woman — even in GIDAs (Geographically Isolated and Disadvantaged Areas) — receives proper care through modern technology.",
    "about.highlight1.title": "Offline-First",
    "about.highlight1.desc": "Can be used even without an internet signal.",
    "about.highlight2.title": "DOH Aligned",
    "about.highlight2.desc": "Includes DOH standards and guidelines.",
    "about.node.bhw": "BHW",
    "about.node.dttb": "DTTB",
    "about.node.admin": "DOH ADMIN",

    // Mission & Vision
    "mv.mission.label": "Mission",
    "mv.mission.text": "To provide reliable digital tools to every BHW and DTTB to reduce maternal and neonatal mortality across the Philippines — even without internet.",
    "mv.vision.label": "Vision",
    "mv.vision.text": "A Philippines where every mother, wherever she may be, has access to safe and quality healthcare.",

    // Features
    "features.label": "Key Features",
    "features.title": "Everything a BHW Needs — In One App",
    "features.1.title": "Patient List",
    "features.1.desc": "Track all pregnant women in your barangay — even offline.",
    "features.2.title": "Automated Vital Signs",
    "features.2.desc": "Directly reads blood pressure, oxygen, and heart rate from Bluetooth devices.",
    "features.3.title": "Risk Alerts",
    "features.3.desc": "Warns instantly when there are risky results — no complex interpretation needed.",
    "features.4.title": "Voice Notes in Taglish",
    "features.4.desc": "Record notes using voice — automatically converted to SOAP notes.",
    "features.5.title": "OCR Scanner",
    "features.5.desc": "Scan the Mother & Child Book or lab results — the app reads the content.",
    "features.6.title": "Offline + Auto-Sync",
    "features.6.desc": "Works even without a signal. Automatically uploads once connected.",

    // How It Works
    "how.label": "How It Works",
    "how.title": "Simple. Fast. For Everyone.",
    "how.1.title": "Log in",
    "how.1.desc": "Use your ID and PIN. Fingerprint login is also available for faster access.",
    "how.2.title": "Check Patient",
    "how.2.desc": "Follow the step-by-step checklist. It automatically reads vitals from the device.",
    "how.3.title": "Save and Report",
    "how.3.desc": "All data is saved even offline. It automatically syncs to the DTTB once a signal is available.",

    // Access Portal
    "access.title": "Are You Ready to Get Started?",
    "access.subtext": "Choose the correct portal for your role.",
    "access.card1.title": "Mobile App (PWA)",
    "access.card1.desc": "For BHWs and DTTBs. Access on your smartphone — no download needed.",
    "access.card1.btn": "Open App →",
    "access.card1.note": "Works on Android and iOS",
    "access.card2.title": "Admin Portal",
    "access.card2.desc": "For DOH admins. Monitor regional data in a single dashboard.",
    "access.card2.btn": "Go to Admin Portal →",
    "access.card2.note": "For authorized users only",

    // Team
    "team.label": "Our Team",
    "team.title": "Meet the Team",

    // Footer
    "footer.desc": "A modern digital health platform aligned with the Department of Health (DOH) for the safety of every mother and child.",
    "footer.links.title": "Quick Links",
    "footer.portal.title": "Access Portal",
    "footer.copy": "© 2025 N.A.D.I. — All Rights Reserved.",
    "footer.project": "A project of the Department of Health (DOH)"
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fil");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
