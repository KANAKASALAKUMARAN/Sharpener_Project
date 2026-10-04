// createElement
const para = document.createElement('p');

// createTextNode
const paraText = document.createTextNode('Total Fruits: 4');

// appendChild
para.appendChild(paraText);

const divs = document.getElementsByTagName('div');
const secondDiv = divs[1];
//secondDiv.appendChild(para);

// insertBefore
const fruits = document.querySelector('.fruits');
const basketHeading = document.getElementById('basket-heading');
secondDiv.insertBefore(para, fruits);
//secondDiv.insertBefore(para, basketHeading);

// setAttribute, className, id
para.className = 'fruitCount';
para.id = 'fruitsTotal';
para.setAttribute('title', 'fruitsTotal');

console.log(para);