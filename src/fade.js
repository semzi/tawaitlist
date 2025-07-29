function handleFade() {
  const elements = document.querySelectorAll('.fade-on-scroll');
  const viewportHeight = window.innerHeight;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const elCenter = rect.top + rect.height / 2;
    const viewportCenter = viewportHeight / 2;
    const distance = Math.abs(elCenter - viewportCenter);

    // Fade and scale as it approaches the center, fully visible and scaled at center
    const maxDistance = viewportHeight / 2;
    let progress = 1 - Math.min(distance / maxDistance, 1);

    el.style.opacity = progress;
    // Scale from 0.9 (90%) to 1 (100%)
    el.style.transform = `scale(${0.9 + 0.1 * progress})`;
  });
}

window.addEventListener('scroll', handleFade);
window.addEventListener('resize', handleFade);
window.addEventListener('DOMContentLoaded', handleFade);