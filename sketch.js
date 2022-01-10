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
let windowWidth = document.documentElement.clientWidth; //window.screen.width;
let windowHeight = document.documentElement.clientHeight;
let bg = lightThemeBackground;
let rr = 255, gg = 155, bb=55, aa=280;
let mousex = 200, mousey = 100;
let background = true;

// Pages Variables
const wrapper = document.querySelector('.wrapper');
const sections = document.getElementsByTagName("section");
const about = document.querySelector('.about');
const skills = document.querySelector('.skills');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');
const footer = document.querySelector('footer');
const svgElements = document.querySelectorAll('svg');

// Changing Theme
function backgroundThemeSwitch() {
  var p = Processing.getInstanceById('myCanvas'); // Select Processing Canvas
  background = !background;  // Toggle background ture/false
  background ? document.documentElement.setAttribute('data-theme', 'light') : document.documentElement.setAttribute('data-theme', 'dark'); // Change CSS theme
  themeIcon.classList.contains('fa-sun') ? themeIcon.classList.replace('fa-sun', 'fa-moon') : themeIcon.classList.replace('fa-moon', 'fa-sun'); // Change Theme Icon
  background ? bg = lightThemeBackground : bg = darkThemeBackground; // Change Background Color in Processing
  if (background) {
    rr = 255; gg = 155; bb = 55; aa=280;
    for (svg of svgElements) {
      svg.style.filter = 'invert(0%) sepia(77%) saturate(7456%) hue-rotate(188deg) brightness(83%) contrast(93%)';
    }
  } else { 
    rr = 355; gg = 200; bb=355, aa=80; 
    for (svg of svgElements) {
      svg.style.filter = 'invert(100%) sepia(0%) saturate(1%) hue-rotate(137deg) brightness(103%) contrast(101%)';
    }
  } // Change Animation color in Processing
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
      canvas.classList.add("blur");// blur canvas - only on mobile 
      for (all of sections) {
        all.classList.add('menu-on'); // blur all the sections on every screen
      }
      // Set Navigation Visible
      document.querySelector('#nav-overlay').style.display= 'block';
      footer.style.justifyContent = 'center';
      document.querySelector('.nav-links').removeAttribute('hidden');
      // Animate In - Overlay
      navOverlay.classList.replace('nav-overlay-slide-left', 'nav-overlay-slide-right');
      // Animate In - Nav Items
      navAnimation('out', 'in');
  } else {
      // Remove blur from background
      canvas.classList.remove("blur");// remvoe blur canvas - only on mobile 
      for (all of sections) {
        all.classList.remove('menu-on'); // remvoe blur all the sections on every screen
      }
      // Animate Out - Overlay
      navOverlay.classList.replace('nav-overlay-slide-right', 'nav-overlay-slide-left');
      // Animate Out - Nav Items
      navAnimation('in', 'out');
      // Hide Div
      document.querySelector('#nav-overlay').style.display= 'none';
      footer.style.justifyContent = 'flex-end';
  }
}

function showPage(page) {
  for (all of sections) {
    all.style.zIndex = -1;
    all.style.opacity = 0;
  }
  page.style.zIndex = 3;
  page.style.opacity = 1;
  page === overlay ? footer.style.display= 'none' : footer.style.display= 'flex';
  page === skills ? canvas.classList.add('menu-on') : canvas.classList.remove('menu-on');
}


//On Load



// Mouse Tracking
document.addEventListener("mousemove", () => {
  mousex = event.clientX; // Gets Mouse X
  mousey = event.clientY; // Gets Mouse Y
});
// Reset Processing Background Size
window.addEventListener('resize', () => {
  windowWidth = document.documentElement.clientWidth; //window.screen.width;
  windowHeight = document.documentElement.clientHeight; //window.screen.height;
  // console.log('window.innerWidth : ' + window.innerWidth);
  // console.log('window.visualViewport.width : ' + window.visualViewport.width);
  // console.log('window.screen.width : ' + window.screen.width);
  // console.log('document.documentElement.clientWidth : ' + document.documentElement.clientWidth);
  // overlay.setAttribute("style",`width:${windowWidth}px`);
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

