// Write the code as shown in the video below:
//querySelector()
const mainHeading = document.querySelector('#main-heading');//for 'id' put '#' 
mainHeading.style.textAlign = 'right';// makes the heading to right

const fruits = document.querySelector('.fruits');//for 'class' put '.', it is for whole fruits class
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';//inner space
fruits.style.margin = '30px';//outer space
fruits.style.width = '50%'; //width of the gray box
fruits.style.borderRadius = '5px';//makes the gray box corner to smooth
fruits.style.listStyleType = 'none';//avoids the bullet points

const h2 = document.querySelector('h2');//No . and # is needed for direct access
h2.style.marginLeft = '30px';//move margin with 30px of left
h2.style.color = 'brown';//move margin with 30px of left


//querySelectorAll()
const fruitItems = document.querySelectorAll('.fruit');

for (let i = 0; i < fruitItems.length; i++){

    fruitItems[i].style.backgroundColor = 'lightgray';
    fruitItems[i].style.padding = '10px';//inner space
    fruitItems[i].style.margin = '10px';//outer space
    
}

const oddFruitItems = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < oddFruitItems.length; i++){
    oddFruitItems[i].style.color = 'white';
    oddFruitItems[i].style.backgroundColor = 'brown';
    
}