const ul = document.querySelector('.fruits');

//Parent
ul.parentElement.style.backgroundColor = 'lightgray';

//Children
ul.firstElementChild.style.backgroundColor = 'lightblue';
ul.lastElementChild.style.backgroundColor = 'lightgreen';
ul.children[2].style.backgroundColor = 'pink';

//Siblings
ul.previousElementSibling.style.backgroundColor = 'lightyellow';
ul.nextElementSibling.style.backgroundColor = 'lightcoral';

