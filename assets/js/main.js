// main.js - small helpers
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      e.preventDefault();
      const tgt = document.querySelector(this.getAttribute('href'));
      if (tgt) tgt.scrollIntoView({behavior:'smooth'});
    });
  });
});
