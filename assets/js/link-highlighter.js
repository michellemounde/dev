function highlightActivePageLink() {
  const currentPath = window.location.pathname;
  const pageLinks = document.querySelectorAll('section#navbar nav .menu li a');

  pageLinks.forEach((link) => {
    const linkPath = link.pathname;
    const formattedLinkPath = linkPath.replace(/index\.html$/, '');

    if (currentPath.startsWith(formattedLinkPath)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};

function highlightActiveSectionLink() {
  const sections = document.querySelectorAll('[data-section]');
  const sectionLinks = document.querySelectorAll('section#sub-navbar nav .menu li a');

  window.addEventListener('scroll', () => {
    let closestSection = null;
    let minDistance = Infinity;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        const distance = Math.abs(rect.top);

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section;
        }
      }
    });

    if (closestSection) {
      sectionLinks.forEach((link) => {
        link.classList.remove('active');
      });

      const activeLink = document.querySelector(`section#sub-navbar nav .menu li a[href="#${closestSection.id}"]`);

      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });

  window.dispatchEvent(new Event('scroll'));
}

export { highlightActivePageLink, highlightActiveSectionLink };
