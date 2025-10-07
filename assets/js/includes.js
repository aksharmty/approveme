// includes.js - simple include loader for header & footer
document.addEventListener('DOMContentLoaded', function() {
  const load = (sel, file) => {
    const el = document.querySelector(sel);
    if (!el) return;
    fetch(file)
      .then(r => {
        if (!r.ok) throw new Error('Failed to load ' + file);
        return r.text();
      })
      .then(html => el.innerHTML = html)
      .catch(err => console.error(err));
  };

  load('#site-header', 'header.html');
  load('#site-footer', 'footer.html');
});
