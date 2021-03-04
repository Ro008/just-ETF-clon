'use strict';

// **************************************************************
// ************ global DOM variables ****************************
// **************************************************************
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const allAssetTypes = document.querySelectorAll('.assets-filter span');
const chipsContainer = document.querySelector('.chips');
const allChips = document.querySelectorAll('.chips button');
const equityChip = document.querySelector('.btn-chip.equity');
const bondsChip = document.querySelector('.btn-chip.bonds');
const realEstateChip = document.querySelector('.btn-chip.real-estate');
const resetFiltersBtn = document.querySelector('.reset-filters-btn');

// **************************************************************
// ************ insert header and footer in all pages************
// **************************************************************

header.innerHTML = `
    <div class="lang-options">
      <a href="#eng" class="data">EN</a>
      <a href="#spa" class="data">SPA</a>
    </div>

    <div class="top-menu-container">
      <div class="logo">
        <a href="./index.html">
          <img src="./resources/images/JUS.png" alt="logo">
        </a>
      </div>
      <div class="top-menu">
        <a href="./ETF-screener.html"><span id="screenerID">ETF screener</span></a>
        <a href="./strategy-builder.html"><span id="strategyID">Strategy builder</span></a>
        <a href="./academy.html"><span id="academyID">Academy</span></a>
        <a href="./login.html"><span id="loginID">Login</span></a>
        <a href="./favourites.html"><span id="favouritesID">Favourites</span></a>
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

// **************************************************************
// ************ add filters to the UI ***************************
// **************************************************************

allAssetTypes.forEach((assetType) => {
  assetType.addEventListener('click', () => {
    if (assetType.textContent === 'Equity') {
      equityChip.classList.remove('d-none');
    } else if (assetType.textContent === 'Bonds') {
      bondsChip.classList.remove('d-none');
    } else if (assetType.textContent === 'Real Estate') {
      realEstateChip.classList.remove('d-none');
    }

    resetFiltersBtn.classList.remove('d-none');
  });
});

// **************************************************************
// ************ remove filters from the UI **********************
// **************************************************************

allChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chip.classList.add('d-none');
  });
});

// remove all filters at the same time
resetFiltersBtn.addEventListener('click', () => {
  allChips.forEach((chip) => {
    chip.classList.add('d-none');
  });
});
