import { activateDarkTheme, activateLightTheme } from './theme-toggler.js';
import typewriter from './typewriter.js';
import menuToggler from './menu-toggler.js';
import { loadAllReusableComponents } from './html-loader.js';

import { REUSABLE_COMPONENTS } from '../../config/reusableComponents.js';

function updateTotalTopNavbarHeight() {
  const subNavbar = document.querySelector('nav#navbar.sub-navbar');

  if (subNavbar) {
    document.documentElement.style.setProperty('--top-subnavbar-height', '2.5rem');
  } else {
    document.documentElement.style.setProperty('--top-subnavbar-height', '0rem');
  }
}

function verifyElementsPresent(componentList) {
  const missingElements = [];
  componentList.forEach((component) => {
    if (!document.getElementById(component.elementId)) {
      missingElements.push(`#${component.elementId}`);
    }
  });

  if (missingElements.length > 0) {
    console.error('Initialization failed: Missing required DOM elements:', missingElements);
    return false;
  }
  return true;
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await loadAllReusableComponents();
    console.log('All components loaded.');

    if (verifyElementsPresent(REUSABLE_COMPONENTS)) {
      console.log('DOM verification successful. Initializing UI functions...');

      updateTotalTopNavbarHeight();
      typewriter();
      // menuToggler();
      activateDarkTheme();
      activateLightTheme();
    } else {
      console.error('UI functions stopped due to missing DOM elements.');
    }
  } catch (error) {
    console.error('An error occurred during component loading:', error);
  }
});
