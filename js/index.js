// ***************************************
// insert header and footer and all pages
// ***************************************
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

header.innerHTML = `
    <div class="language-dropdown">
      <div class="current-lang">
        <span>EN</span>
        <i class="fas fa-angle-down"></i>
      </div>

      <div class="lang-options">
        <ul class="options-list">
          <li class="en">English</li>
          <li class="es">Español</li>
        </ul>
      </div>
    </div>
    <div class="top-menu-container">
      <div class="logo">
        <a href="./index.html">
          <img src="./resources/images/JUS.png" alt="logo">
        </a>
      </div>
      <div class="top-menu">
        <a href="./ETF-screener.html"><span>ETF screener</span></a>
        <a href="./strategy-builder.html"><span>Strategy builder</span></a>
        <a href="./academy.html"><span>Academy</span></a>
        <a href="./login.html"><span>Login</span></a>
        <a href="./favourites.html" class="favourites-menu-item"><span>Favourites</span></a>
      </div>
    </div>
`;

footer.innerHTML = `
  <a href="https://www.acontracorrientech.com/" target="_blank"> <i class="fab fa-wordpress-simple"></i> </a>
  <a href="https://www.linkedin.com/in/rociosirvent/" target="_blank"> <i class="fab fa-linkedin-in"></i> </a>
  <a href="https://github.com/Ro008" target="_blank"> <i class="fab fa-github"></i> </a>
  <a href="https://twitter.com/RocioSirvent" target="_blank"> <i class="fab fa-twitter"></i> </a>
  <a href="https://www.instagram.com/ro_syper/" target="_blank"> <i class="fab fa-instagram"></i> </a>
`;

// ***************************************
