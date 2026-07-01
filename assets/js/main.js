/* ============================================
   SCROLL PROGRESS BAR
   ============================================ */
function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  document.body.style.setProperty('--scroll-pct', pct);
}
window.addEventListener('scroll', updateScrollProgress, { passive: true });

/* ============================================
   SCROLL FADE-IN
   One-shot: elements stay visible once revealed.
   ============================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ============================================
   SKILL BAR ANIMATION
   One-shot: bars animate in once when visible.
   ============================================ */
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('skill-bars--animate');
        barObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);
document.querySelectorAll('.skill-bars').forEach((el) => barObserver.observe(el));

/* ============================================
   TYPEWRITER EFFECT
   ============================================ */
(function () {
  const target = document.getElementById('typewriter');
  if (!target) return;

  const before = 'Turning raw data into ';
  const accent = 'clear decisions';
  const full = before + accent;
  let i = 0;

  function type() {
    if (i <= full.length) {
      const plain = full.slice(0, Math.min(i, before.length));
      const coloured = i > before.length ? full.slice(before.length, i) : '';
      target.innerHTML = plain + (coloured ? '<em>' + coloured + '</em>' : '');
      i++;
      setTimeout(type, i < before.length ? 55 : 80);
    }
  }

  setTimeout(type, 400);
})();
