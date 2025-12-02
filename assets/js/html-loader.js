import { REUSABLE_COMPONENTS } from '../../config/reusableComponents.js';

async function loadAllReusableComponents() {
  try {
    const fetchPromises = REUSABLE_COMPONENTS.map((component) => fetch(component.filePath));

    const responses = await Promise.all(fetchPromises);

    for (const response of responses) {
      if (!response.ok) {
        throw new Error(`Failed to load: ${response.url}`);
      }
    }

    const textPromises = responses.map((response) => response.text());
    const texts = await Promise.all(textPromises);

    texts.forEach((text, index) => {
      const { elementId } = REUSABLE_COMPONENTS[index];
      const targetElement = document.getElementById(elementId);

      if (targetElement) {
        targetElement.innerHTML = DOMPurify.sanitize(text);
      } else {
        console.error(`Target element not found: #${elementId}`);
      }
    });
  } catch (error) {
    console.error('Error loading components:', error);
  }
}
export { loadAllReusableComponents }
