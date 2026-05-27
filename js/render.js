document.addEventListener("DOMContentLoaded", () => {
  const data = PortfolioDB.load();

  // Auto-migration for Web Technologies merger
  if (data.skills && data.skills.some(s => s.title === "Web Technologies")) {
    const webTech = data.skills.find(s => s.title === "Web Technologies");
    const languages = data.skills.find(s => s.title === "Languages");
    if (languages && webTech) {
      languages.tags = [...new Set([...languages.tags, ...webTech.tags])];
      // Ensure SQL is in languages as well
      if (!languages.tags.includes("SQL")) languages.tags.push("SQL");
    }
    data.skills = data.skills.filter(s => s.title !== "Web Technologies");
  }

  // Auto-migration for MongoDB addition
  if (data.skills) {
    const dbSkill = data.skills.find(s => s.title === "Databases");
    if (dbSkill && !dbSkill.tags.includes("MongoDB")) {
      dbSkill.tags.push("MongoDB");
      PortfolioDB.save(data);
    }
  }

  // Apply Theme
  document.documentElement.style.setProperty('--primary-500', data.theme.primaryColor);
  document.documentElement.style.setProperty('--secondary-500', data.theme.secondaryColor);

  // Render Hero
  const heroNameEl = document.querySelector('.hero-name');
  if(heroNameEl) heroNameEl.innerHTML = `${data.hero.nameFirst} <span class="grad">${data.hero.nameLast}</span>`;
  
  const heroRoleEl = document.querySelector('.hero-role');
  if(heroRoleEl) heroRoleEl.innerHTML = `<strong>${data.hero.role1}</strong><br><strong>${data.hero.role2}</strong>`;
  
  const heroDescEl = document.querySelector('.hero-desc');
  if(heroDescEl) heroDescEl.textContent = data.hero.description;

  // Render About
  const aboutGrid = document.querySelector('#about .about-grid .reveal');
  if(aboutGrid) {
    let aboutHtml = `<span class="tag">// about me</span>
      <h2 class="heading">Turning ideas into <span class="grad">elegant code</span></h2>`;
    
    data.about.paragraphs.forEach(p => {
      aboutHtml += `<p class="about-txt">${p}</p>`;
    });

    let hiGridHtml = `<div class="hi-grid">`;
    data.about.info.forEach(info => {
      hiGridHtml += `<div class="hi">
        <div class="hi-ic">${info.icon}</div><span>${info.text}</span>
      </div>`;
    });
    hiGridHtml += `</div>`;
    
    aboutGrid.innerHTML = aboutHtml + hiGridHtml;
  }

  // Render Skills
  const skillsGrid = document.querySelector('.sk-grid');
  if(skillsGrid) {
    let skillsHtml = '';
    data.skills.forEach(skill => {
      skillsHtml += `<div class="sk-card reveal">
        <div class="sk-title">${skill.icon || ''}<span>${skill.title}</span></div>
        <div class="sk-tags">`;
      skill.tags.forEach(tag => {
        skillsHtml += `<span class="sk-tag">${tag}</span>`;
      });
      skillsHtml += `</div></div>`;
    });
    skillsGrid.innerHTML = skillsHtml;
  }

  // Render Projects
  const projGrid = document.querySelector('.proj-grid');
  if(projGrid) {
    let projHtml = '';
    data.projects.forEach(proj => {
      projHtml += `<div class="pc reveal" data-cat="web">
        <div class="pc-thumb" style="background:${proj.gradient}">
          <img class="pc-img" src="${proj.image}" alt="${proj.name}" style="width:100%;height:100%;object-fit:contain;object-position:center;display:block;transition:var(--t-smooth);" />
        </div>
        <div class="pc-body">
          <div class="pc-name">${proj.name}</div>
          <div class="pc-desc">${proj.desc}</div>
          <div class="pc-tags">`;
      proj.tags.forEach(tag => {
        projHtml += `<span class="pt">${tag}</span>`;
      });
      projHtml += `</div></div></div>`;
    });
    projGrid.innerHTML = projHtml;
  }

  // Render Education & Certifications
  const eduTimeline = document.getElementById('edu-timeline');
  if(eduTimeline && data.education) {
    let eduHtml = '';
    data.education.forEach(edu => {
      eduHtml += `<div class="ti reveal">
        <div class="ti-date">${edu.year}</div>
        <div class="ti-role">${edu.role}</div>
        <div class="ti-co">${edu.school}</div>
      </div>`;
    });
    eduTimeline.innerHTML = eduHtml;
  }

  const certTimeline = document.getElementById('cert-timeline');
  if(certTimeline && data.certifications) {
    let certHtml = '';
    data.certifications.forEach(cert => {
      const hasImage = cert.image ? 'clickable-cert' : '';
      const viewBadge = cert.image ? `<span class="cert-view-badge">View Certificate 👁️</span>` : '';
      certHtml += `<div class="ti reveal ${hasImage}" ${cert.image ? `data-cert-img="${cert.image}" data-cert-title="${cert.role}" data-cert-rotate="${cert.rotate ? 'true' : 'false'}"` : ''}>
        <div class="ti-date">${cert.year}</div>
        <div class="ti-role">${cert.role} ${viewBadge}</div>
        <div class="ti-co">${cert.school}</div>
      </div>`;
    });
    certTimeline.innerHTML = certHtml;

    // Lightbox modal logic
    const certModal = document.getElementById('cert-modal');
    const certModalImg = document.getElementById('cert-modal-img');
    const certModalTitle = document.getElementById('cert-modal-title');
    const certRotateBtn = document.getElementById('cert-rotate-btn');
    const certCloseBtn = document.getElementById('cert-modal-close');

    if (certModal && certModalImg && certModalTitle) {
      let currentRotation = 0;

      document.querySelectorAll('.clickable-cert').forEach(item => {
        item.addEventListener('click', () => {
          const imgSrc = item.getAttribute('data-cert-img');
          const title = item.getAttribute('data-cert-title');
          const needsRotate = item.getAttribute('data-cert-rotate') === 'true';

          certModalImg.src = imgSrc;
          certModalTitle.textContent = title;
          
          // Initial rotation setup (e.g. Aim Computer Institute rotated 90deg by default)
          currentRotation = needsRotate ? 90 : 0;
          certModalImg.style.transform = `rotate(${currentRotation}deg)`;

          certModal.classList.add('open');
          document.body.style.overflow = 'hidden'; // Disable scroll background
        });
      });

      const closeModal = () => {
        certModal.classList.remove('open');
        document.body.style.overflow = '';
        setTimeout(() => {
          certModalImg.src = '';
        }, 300);
      };

      if (certCloseBtn) certCloseBtn.addEventListener('click', closeModal);
      certModal.addEventListener('click', (e) => {
        if (e.target === certModal) closeModal();
      });

      // Escape key to close modal
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && certModal.classList.contains('open')) {
          closeModal();
        }
      });

      if (certRotateBtn) {
        certRotateBtn.addEventListener('click', () => {
          currentRotation = (currentRotation + 90) % 360;
          certModalImg.style.transform = `rotate(${currentRotation}deg)`;
        });
      }
    }
  }

  // Trigger intersection observer for newly added reveal elements
  setTimeout(() => {
    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); }), { threshold: .1 });
    document.querySelectorAll('.reveal').forEach(r => obs.observe(r));
  }, 100);

});
