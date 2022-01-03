const toggleSwitch = document.querySelector('input[type="checkbox"]');
const lightThemeBackground = '#efefef';
const darkThemeBackground = 20;
const canvas = document.querySelector('canvas');
const overlay = document.querySelector('.overlay');
let bg = lightThemeBackground;
let rr = 255, gg = 155, bb=55, aa=280;
let mousex = 200, mousey = 100;
// Navigation Itmes
const menuBars = document.getElementById('menu-bars');
const navOverlay = document.querySelector(".hamburger-menu");
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

background = true;

// Event Listeners
//Theme switch
toggleSwitch.addEventListener('change', backgroundThemeSwitch);
canvas.addEventListener('click', backgroundThemeSwitch);
overlay.addEventListener('click', backgroundThemeSwitch);
//Menu items
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});

function backgroundThemeSwitch() {
  var p = Processing.getInstanceById('myCanvas');
  background = !background;  
    if (background) {
      bg=lightThemeBackground; 
      document.documentElement.setAttribute('data-theme', 'light');
      rr = 255; gg = 155; bb = 55, aa=280;
    } else {
      bg=darkThemeBackground;
      document.documentElement.setAttribute('data-theme', 'dark');
      rr = 355; gg = 200; bb=355, aa=80;
    }
  p.background(bg);
  p.redraw();
    
}

// Control Navigation Animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
      nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`);
  });
}

// Toggle Menu visibility
function toggleNav() {
  //Toggle: Menu Bars Open/Close
  menuBars.classList.toggle('change');
  // Toggle: Menu Active
  navOverlay.classList.toggle('nav-overlay-active');
  if (navOverlay.classList.contains('nav-overlay-active')) {
      // Set Navigation Visible
      document.querySelector('.nav-links').removeAttribute('hidden');
      // Animate In - Overlay
      navOverlay.classList.replace('nav-overlay-slide-left', 'nav-overlay-slide-right');
      // Animate In - Nav Items
      navAnimation('out', 'in');
  } else {
      // Animate Out - Overlay
      navOverlay.classList.replace('nav-overlay-slide-right', 'nav-overlay-slide-left');
      // Animate Out - Nav Items
      navAnimation('in', 'out');
  }
}

// Mouse tracking
document.addEventListener("mousemove", () => {
  mousex = event.clientX; // Gets Mouse X
  mousey = event.clientY; // Gets Mouse Y
});
//On Load
