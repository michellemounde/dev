import { activateDarkTheme, activateLightTheme } from './theme-toggler.js';
import typewriter from './typewriter.js';
import { loadAllReusableComponents } from './html-loader.js';
import { highlightActivePageLink, highlightActiveSectionLink } from './link-highlighter.js';

import { REUSABLE_COMPONENTS } from '../../config/reusableComponents.js';

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

      typewriter();
      highlightActivePageLink();
      highlightActiveSectionLink();
      activateDarkTheme();
      activateLightTheme();
    } else {
      console.error('UI functions stopped due to missing DOM elements.');
    }
  } catch (error) {
    console.error('An error occurred during component loading:', error);
  }
});
