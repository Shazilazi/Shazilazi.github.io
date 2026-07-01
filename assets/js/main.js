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
   One-shot: stays visible once revealed.
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
   One-shot: animates in once when visible.
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
   ANIMATED STAT COUNTERS
   Counts up from 0 to the target number when
   the stats block scrolls into view.
   One-shot: only runs once per page load.
   Reads the text content of each .stat__number
   element, parses the number and any suffix
   (e.g. "+" in "12+"), then animates up to it.
   ============================================ */
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      statObserver.unobserve(entry.target);

      entry.target.querySelectorAll('.stat__number').forEach((el) => {
        const raw = el.textContent.trim();
        const suffix = raw.replace(/[0-9]/g, '');
        const target = parseInt(raw.replace(/[^0-9]/g, ''), 10);
        if (isNaN(target)) return;

        const duration = 1200;
        const start = performance.now();

        function tick(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(ease * target) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }

        el.textContent = '0' + suffix;
        requestAnimationFrame(tick);
      });
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll('.hero__stats').forEach((el) => statObserver.observe(el));

/* ============================================
   PROJECT FILTERING
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
