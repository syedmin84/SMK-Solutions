  const hamburger = document.querySelector(".hamburger");
      hamburger.addEventListener("click", toggleMenu);
      function toggleMenu() {
        const sidebar = document.querySelector(".aside");
        sidebar.classList.toggle("open");
      }