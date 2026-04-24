console.log("KRATÉE Jewelry Loaded ✨");
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#') {
      e.preventDefault();
    }
  });
});