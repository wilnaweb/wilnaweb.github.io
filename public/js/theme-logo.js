// Shared theme-aware logo script
(() => {
  function updateForItem(item) {
    const img = document.getElementById(item.id);
    if (!img) return;

    const lightSrc = item.light;
    const darkSrc = item.dark;

    function apply() {
      const theme = document.documentElement.getAttribute('data-theme');
      const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      if (theme === 'light' || (!theme && prefersLight)) {
        if (img.src !== location.origin + lightSrc) img.src = lightSrc;
      } else {
        if (img.src !== location.origin + darkSrc) img.src = darkSrc;
      }
    }

    apply();

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'data-theme') apply();
      }
    });
    mo.observe(document.documentElement, { attributes: true });

    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', apply);
    }
  }

  window.themeLogoInit = function init(list) {
    if (!Array.isArray(list)) return;
    for (const item of list) updateForItem(item);
  };
})();
