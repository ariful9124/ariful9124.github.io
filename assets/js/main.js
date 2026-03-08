/**
 * main.js — Shared JavaScript for Ariful Islam's academic website
 * Handles: dark mode, mobile menu, active nav links, publication filters
 */

// ── Dark mode: run immediately to prevent flash of unstyled content ──────────
(function () {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (_) {}
})();

document.addEventListener('DOMContentLoaded', function () {

  // ── Theme toggle ────────────────────────────────────────────────────────────
  function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.icon-sun').forEach(el => el.classList.toggle('hidden', !isDark));
    document.querySelectorAll('.icon-moon').forEach(el => el.classList.toggle('hidden', isDark));
  }
  updateThemeIcons();

  document.getElementById('theme-toggle')?.addEventListener('click', function () {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons();
  });

  // ── Mobile menu ─────────────────────────────────────────────────────────────
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu    = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function () {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', isOpen);
      this.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  // ── Active nav link highlighting ────────────────────────────────────────────
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(function (link) {
    if (link.getAttribute('data-nav') === currentFile) {
      link.classList.add('!text-cyan-600', 'dark:!text-cyan-400', 'font-semibold');
    }
  });

  // ── Publication filter ──────────────────────────────────────────────────────
  const filterBtns = document.querySelectorAll('[data-filter-btn]');
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const filter = this.getAttribute('data-filter-btn');

        // Update button active state
        filterBtns.forEach(b => {
          b.classList.remove('bg-cyan-600', 'text-white', 'border-cyan-600');
          b.classList.add('text-gray-600', 'dark:text-slate-400', 'border-gray-300', 'dark:border-slate-600', 'hover:border-cyan-400');
        });
        this.classList.add('bg-cyan-600', 'text-white', 'border-cyan-600');
        this.classList.remove('text-gray-600', 'dark:text-slate-400', 'border-gray-300', 'dark:border-slate-600');

        // Show/hide publication items
        document.querySelectorAll('[data-pub-type]').forEach(function (item) {
          const match = filter === 'all' || item.getAttribute('data-pub-type') === filter;
          item.classList.toggle('hidden', !match);
        });

        // Show/hide year headers
        document.querySelectorAll('[data-year-group]').forEach(function (group) {
          const visiblePubs = group.querySelectorAll('[data-pub-type]:not(.hidden)');
          group.classList.toggle('hidden', visiblePubs.length === 0);
        });
      });
    });
  }

  // ── Smooth anchor scroll offset (for sticky nav) ────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
