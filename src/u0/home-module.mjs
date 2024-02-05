import { insertContent } from "../u5/CommonFunction.js";


export function insertContentWithModule(element, contentProperty, content){
    insertContent(element, contentProperty, content);
}


let isAnimating = false; // Flag to track animation state

export function doAnimate(elem, {rotate = 0, translate = {x: 0, y: 0}, scale = 1}, duration) {
    if (isAnimating) return; // If animation is already in progress, do nothing
    isAnimating = true; // Set the flag to indicate that animation is starting
    
    const start = performance.now();
    const initialTransform = getCurrentTransform(elem); // Get the initial transform values
    const translateXDelta = translate.x - initialTransform.translateX;
    const translateYDelta = translate.y - initialTransform.translateY;
    const scaleDelta = scale - initialTransform.scale;
    
    const step = function () {
        const now = performance.now();
        const delta = Math.min((now - start) / duration, 1);
        
        // Interpolate rotation
        const currentRotate = initialTransform.rotate + (delta * rotate);
        
        // Interpolate translation
        const currentTranslateX = initialTransform.translateX + (delta * translateXDelta);
        const currentTranslateY = initialTransform.translateY + (delta * translateYDelta);
        
        // Interpolate scale
        const currentScale = initialTransform.scale + (delta * scaleDelta);
        
        // Apply the transformations
        elem.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) rotate(${currentRotate}deg) scale(${currentScale})`;
        
        if (delta < 1) {
            requestAnimationFrame(step);
        } else {
            isAnimating = false; // Reset the flag when animation is complete
        }
    };
    step();
}


// Function to get the current transform values of an element
function getCurrentTransform(elem) {
    const style = window.getComputedStyle(elem);
    const transform = style.getPropertyValue('transform');
    const matrix = transform.match(/^matrix\((.+)\)$/);
    if (matrix) {
        const values = matrix[1].split(', ');
        return {
            translateX: parseFloat(values[4]),
            translateY: parseFloat(values[5]),
            rotate: Math.round(Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180/Math.PI)),
            scale: Math.sqrt(parseFloat(values[0]) ** 2 + parseFloat(values[1]) ** 2)
        };
    } else {
        return {translateX: 0, translateY: 0, rotate: 0, scale: 1};
    
    }
}

fetch('http://127.0.0.1:5500/src/u0/currentDate.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // or response.blob() if you want to handle binary data
  })
  .then(html => {
    // Use the fetched HTML content here
    console.log(html);
  })
  .catch(error => {
    console.error('There was a problem fetching the HTML file:', error);
  });




