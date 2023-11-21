import { activateDarkTheme, activateLightTheme } from './theme-toggler.js';
import typewriter from './typewriter.js';
import menuToggler from './menu-toggler.js';

document.addEventListener('DOMContentLoaded', () => {
  typewriter();
  menuToggler();
  activateDarkTheme();
  activateLightTheme();
});
