const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const switchMode = () => {
    let theme = localStorage.getItem('theme-mode');
    if(!theme) {
        theme = 'light';
        localStorage.setItem('theme-mode', theme);
    }
    toggleSwitch.checked = theme==='dark'? true :false;
    image1.src = `img/undraw_proud_coder_${theme}.svg`;
    image2.src = `img/undraw_feeling_proud_${theme}.svg`; 
    image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
    nav.style.backgroundColor = theme==='dark'? 'rgb(0 0 0 / 80%)' : 'rgb(255 255 255/ 80%)';
    textBox.style.backgroundColor = theme==='dark'? 'rgba(255 255 255 / 50%)':'rgba(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = theme == 'dark' ? 'Dark Mode' : 'Light Mode';
    toggleIcon.children[1].classList.remove(`fa-${theme==='dark'? 'sun' : 'moon'}`);
    toggleIcon.children[1].classList.add(`fa-${theme==='dark'? 'moon' : 'sun'}`);
    // .replace() can be used over there 
    return theme;
}

// Switch Theme Dynamically 
const switchTheme = (event) => {
    const status = event.target.checked;
    localStorage.setItem('theme-mode', status? 'dark':'light');
    document.documentElement.setAttribute('dark-theme', switchMode());
}

document.documentElement.setAttribute('dark-theme', switchMode());

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);