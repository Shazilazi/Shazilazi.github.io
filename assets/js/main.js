/* ============================================
   SCROLL PROGRESS BAR
   Updates the --scroll-pct CSS variable on
   the body as the user scrolls, which drives
   the left-edge progress bar in CSS.
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
   Watches all .reveal elements. When one enters
   the viewport, adds .reveal--visible which
   triggers the CSS opacity/transform transition.
   ============================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
      } else {
        entry.target.classList.remove('reveal--visible');
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ============================================
   SKILL BAR ANIMATION
   When a .skill-bars block enters the viewport,
   adds .skill-bars--animate which triggers the
   CSS width transition on each .skill-bar__fill.
   ============================================ */
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('skill-bars--animate');
      } else {
        entry.target.classList.remove('skill-bars--animate');
      }
    });
  },
  { threshold: 0.3 }
);
document.querySelectorAll('.skill-bars').forEach((el) => barObserver.observe(el));

/* ============================================
   PROJECT FILTERING
   On the projects page, clicking a filter chip
   shows only project cards matching that
   category (data-category attribute). "All"
   shows everything. Shows an empty state if a
   category has no matches.
   ============================================ */
(function () {
  const filterBar = document.querySelector('.filter-bar');
  const grid = document.getElementById('projects-grid');
  if (!filterBar || !grid) return;

  const chips = filterBar.querySelectorAll('.filter-chip');
  const cards = grid.querySelectorAll('.project-card');
  const emptyState = document.getElementById('projects-empty');

  filterBar.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;

    chips.forEach((c) => c.classList.remove('is-active'));
    chip.classList.add('is-active');

    const filter = chip.dataset.filter;
    let visibleCount = 0;

    cards.forEach((card) => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !match);
      if (match) visibleCount++;
    });

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  });
})();

/* ============================================
   TYPEWRITER EFFECT
   Types out the hero headline character by
   character, then types the accent phrase.
   Runs once on page load.
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
      target.innerHTML =
        plain + (coloured ? '<em>' + coloured + '</em>' : '');
      i++;
      setTimeout(type, i < before.length ? 55 : 80);
    }
  }

  setTimeout(type, 400);
})();
