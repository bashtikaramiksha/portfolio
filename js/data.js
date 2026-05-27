const defaultPortfolioData = {
  hero: {
    nameFirst: "Amiksha",
    nameLast: "Bashtikar",
    role1: "Enthusiastic Computer Science Graduate",
    role2: "Fullstack Web Developer",
    description: "With hands-on experience in database systems and project coordination. Skilled in Java, C, C++, and MySQL, with a proven ability to build efficient, real-world applications to streamline operations and improve data reliability."
  },
  about: {
    paragraphs: [
      "I am an enthusiastic Computer Science graduate with hands-on experience in database systems and project coordination. Known for strong teamwork, clear communication, and a problem-solving mindset.",
      "I am ready to bring technical expertise and a proactive attitude to innovative development teams. I have a proven ability to build efficient, real-world applications—such as a Blood Donation Camp Management System—to streamline operations and improve data reliability."
    ],
    info: [
      { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>', text: "B.E. Computer Science" },
      { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>', text: "Akola, India" },
      { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>', text: "9325021315" },
      { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>', text: "bashtikaramiksha18@gmail.com" }
    ]
  },
  skills: [
    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>', title: "Languages", tags: ["Java", "C", "C++", "HTML", "CSS", "JavaScript", "SQL"] },
    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>', title: "Databases", tags: ["MySQL", "MongoDB"] },
    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>', title: "Soft Skills", tags: ["Communication", "Leadership", "Team Work", "Problem Solving"] }
  ],
  projects: [
    {
      id: "p1",
      name: "Blood Donation Camp Management System",
      image: "blood_donation.png",
      gradient: "linear-gradient(135deg,#0d1b4b,#1a3480,#2563eb)",
      desc: "A comprehensive database-driven system to manage blood donation camps, track donor records, blood inventory, and camp schedules — streamlining operations and improving data reliability.",
      tags: ["MySQL", "Database Design", "SQL"]
    },
    {
      id: "p2",
      name: "Smart Career Guidance System",
      image: "career_guidance.png",
      gradient: "linear-gradient(135deg,#1a1040,#2d1b69,#7c3aed)",
      desc: "An intelligent web application that helps students and professionals discover ideal career paths through skill assessments, personality analysis, and personalized job recommendations.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js"],
      demo: "https://carrier-path-g693.onrender.com/dashboard.html"
    }
  ],
  education: [
    { year: "2022 — 2026", role: "B.E CSE", school: "COETA · Akola, India" },
    { year: "2021 — 2022", role: "HSC (70.67%)", school: "The English Junior College · Ner, India" },
    { year: "2019 — 2020", role: "SSC (85.60%)", school: "Jijamata Kanya vidyalaya · Ner, India" }
  ],
  certifications: [
    { year: "Sept 2025 – Oct 2025", role: "SQL, Core & Advanced Java Certification", school: "Professional Credential", image: "cert_sql_java.jpg" },
    { year: "Aug 2024 – Nov 2024", role: "Core Java Certification", school: "Professional Credential", image: "cert_core_java.jpg", rotate: true },
    { year: "2024", role: "International Level Student Workshop 2K24", school: "COETA · Workshop", image: "cert_data_science.jpg" }
  ],
  theme: {
    primaryColor: "#6366f1",
    secondaryColor: "#a855f7"
  }
};

// Data Management Functions
const PortfolioDB = {
  load: function() {
    const saved = localStorage.getItem('portfolioData');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch(e) {
        console.error("Failed to parse saved data", e);
        return defaultPortfolioData;
      }
    }
    return defaultPortfolioData;
  },
  save: function(data) {
    localStorage.setItem('portfolioData', JSON.stringify(data));
  },
  reset: function() {
    localStorage.removeItem('portfolioData');
    return defaultPortfolioData;
  }
};
