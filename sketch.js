const toggleSwitch = document.querySelector('input[type="checkbox"]');
const lightThemeBackground = '#efefef';
const darkThemeBackground = 20;
const canvas = document.querySelector('canvas');
const overlay = document.querySelector('.overlay');
let bg = lightThemeBackground;
let rr = 255, gg = 155, bb=55, aa=280;
background = true;

// Event Listeners
//Theme switch
toggleSwitch.addEventListener('change', backgroundThemeSwitch);
canvas.addEventListener('click', backgroundThemeSwitch);
overlay.addEventListener('click', backgroundThemeSwitch);

// Hamuburger Icon 'Menu'
function menu(x) {
    x.classList.toggle("change");
  }

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

//On Load

