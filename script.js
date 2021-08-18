function darkMode() {
    var body = document.body;
    var banner1 = document.querySelector('section.destaques .info');
    var banner2 = document.querySelector('section.destaques .info2');

    body.classList.toggle("dark-mode");
    banner1.classList.toggle("dark-mode");
    banner2.classList.toggle("dark-mode");
    
  }

