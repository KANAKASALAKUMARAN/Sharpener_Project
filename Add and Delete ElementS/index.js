const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add');

    const newLi = document.createElement('li');
    newLi.className = 'fruit';
    newLi.innerHTML = fruitToAdd.value +
        '<button class="delete-btn">x</button>' +
        '<button class="edit-btn">Edit</button>';
    fruits.append(newLi);
});
// Implement the code as in video but with one extra 'Edit' button in 'li'
fruits.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    }
});
