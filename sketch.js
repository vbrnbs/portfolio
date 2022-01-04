// Theme variables
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const lightThemeBackground = '#efefef';
const darkThemeBackground = 20;
const canvas = document.querySelector('canvas');
const overlay = document.querySelector('.overlay');

// Navigation Itmes
const menuBars = document.getElementById('menu-bars');
const navOverlay = document.querySelector(".hamburger-menu");
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];
const themeIcon = document.getElementById('theme-icon');
const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');

// Processing Variables
let bg = lightThemeBackground;
let rr = 255, gg = 155, bb=55, aa=280;
let mousex = 200, mousey = 100;
let background = true;

// Pages Variables
const sections = document.getElementsByTagName("section");
const about = document.querySelector('.about');
const skills = document.querySelector('.skills');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');
const footer = document.querySelector('footer');

// Changing Theme
function backgroundThemeSwitch() {
  var p = Processing.getInstanceById('myCanvas'); // Select Processing Canvas
  background = !background;  // Toggle background ture/false
  background ? document.documentElement.setAttribute('data-theme', 'light') : document.documentElement.setAttribute('data-theme', 'dark'); // Change CSS theme
  themeIcon.classList.contains('fa-sun') ? themeIcon.classList.replace('fa-sun', 'fa-moon') : themeIcon.classList.replace('fa-moon', 'fa-sun'); // Change Theme Icon
  background ? bg = lightThemeBackground : bg = darkThemeBackground; // Change Background Color in Processing
  if (background) {rr = 255; gg = 155; bb = 55; aa=280;} else { rr = 355; gg = 200; bb=355, aa=80; } // Change Animation color in Processing
  p.background(bg); // Set bg in Processing
  p.redraw();    // reset Processing Sketch
}

// Control Navigation Animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
      nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`); // set navigation In or Out sliding
  });
}

// Toggle Menu visibility
function toggleNav() {
  //Toggle: Menu Bars Open/Close
  menuBars.classList.toggle('change');
  // Toggle: Menu Active
  navOverlay.classList.toggle('nav-overlay-active');
  if (navOverlay.classList.contains('nav-overlay-active')) {  
    // Overlay change
      overlay.classList.add("menu-on");
      // Set Navigation Visible
      document.querySelector('#nav-overlay').style.display= 'block';
      document.querySelector('.nav-links').removeAttribute('hidden');
      // Animate In - Overlay
      navOverlay.classList.replace('nav-overlay-slide-left', 'nav-overlay-slide-right');
      // Animate In - Nav Items
      navAnimation('out', 'in');
  } else {
      // Remove blur from background
      overlay.classList.remove("menu-on");
      // Animate Out - Overlay
      navOverlay.classList.replace('nav-overlay-slide-right', 'nav-overlay-slide-left');
      // Animate Out - Nav Items
      navAnimation('in', 'out');
      // Hide Div
      document.querySelector('#nav-overlay').style.display= 'none';
  }
}

function showPage(page) {
  for (all of sections) {
    all.classList.add('hide-page');
  }
  page.classList.remove('hide-page');
  page.style.zIndex = 3;
  //sections.style.display = 'none';
  //sections.hidden = true;
  //page.setAttribute('hidden', false);
}

//On Load

// Mouse tracking
document.addEventListener("mousemove", () => {
  mousex = event.clientX; // Gets Mouse X
  mousey = event.clientY; // Gets Mouse Y
});

// Event Listeners
//Theme switch
toggleSwitch.addEventListener('change', backgroundThemeSwitch); 
//overlay.addEventListener('click', backgroundThemeSwitch);
//Menu items
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});
nav1.addEventListener('click', () => {showPage(overlay)});
nav2.addEventListener('click', () => {showPage(about)});
nav3.addEventListener('click', () => {showPage(skills)});
nav4.addEventListener('click', () => {showPage(projects)});
nav5.addEventListener('click', () => {showPage(contact)});

