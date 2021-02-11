"use strict"

// define language reload anchors
const dataReload = document.querySelectorAll('.data');

const spanishOption = document.querySelector("[href='#spa']");
const englishOption = document.querySelector("[href='#eng']");

// language translations
const language = {
  eng: {
    screener: "ETF screener",
    strategy: "Strategy builder",
    academy: "Academy",
    login: "Login",
    favourites: "Favourites"
    
  },
  spa: {
    screener: "Escáner ETFs",
    strategy: "Estrategia",
    academy: "Academia",
    login: "Entrar",
    favourites: "Favoritos"
  },
};

// define language via window hash
if (window.location.hash) {
  if (window.location.hash === "#spa") {
    screenerID.textContent = language.spa.screener;
    strategyID.textContent = language.spa.strategy;
    academyID.textContent = language.spa.academy;
    loginID.textContent = language.spa.login;
    favouritesID.textContent = language.spa.favourites;
  }
}

// add / remove styles when a language is selected
if(window.location.hash) {
  if(window.location.hash === "#spa") {
    spanishOption.classList.add('active');
  } else {
    englishOption.classList.add('active');
  }
} else {
  englishOption.classList.add('active');
}

// define language reload on click iteration - setTimeout wrap - otherwise dataReload is undefined 🤔
dataReload.forEach(element => {
  element.addEventListener('click', () => {
    setTimeout(() => {
      location.reload();
    }, 0.1);
  });
});


