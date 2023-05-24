/**
 * 
 * Creates a DOM element
 * 
 * @param {string} tagName  write a string, it'll be implemented as a Node in html
 * @param {string} className  write a class you want your tag to have
 * @returns a html node with given class
 */
function getElement(tagName, className){
    const childElement = document.createElement(tagName);
    childElement.classList.add(className);

    return childElement;
}


const gridElement = document.querySelector('div.grid');

for(let i = 1; i <= 100; i++){
    const divElement = getElement('div', 'cell');
    divElement.innerHTML += i;
    gridElement.appendChild(divElement);
}