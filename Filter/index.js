let form = document.getElementsByTagName('form')[0];

// Task 1: Use DOM Manipulation to add another input element inside form, before the button.
// This input element will take the description of the fruit.
// Create an input element, give it id="description", type="text", and placeholder text like "Enter fruit description".
// Then insert it before the button inside the form.
const description = document.createElement('input');
description.id = 'description';
description.type = 'text';
description.placeholder = 'Enter fruit description';

const button = document.querySelector('button');
form.insertBefore(description, button);




// add fruit to the cart

let fruititems = document.querySelector('.fruits');
let descriptionitems = document.querySelector('#description');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Ensure that a description is provided
    let fruitDescription = document.getElementById('description').value;
    if (fruitDescription === '') {
        alert('Please enter a description.');
        return;
    }




    // Task 2: Add code to show fruit name and description.
    // Create a new <li> element and add fruit name + description (in a <p> tag).
    // Show the description in italics.
    // Add a delete button at the end.
    // Append the new li element to the fruit list.
    const newLi = document.createElement('li');
    newLi.className = 'fruit';

    const fruitName = document.getElementById('fruit-to-add').value;
    newLi.append(fruitName);

    const descriptionPara = document.createElement('p');
    descriptionPara.innerHTML = '<i>' + fruitDescription + '</i>';
    descriptionPara.style.fontStyle = 'italic';
    
    newLi.appendChild(descriptionPara);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'x';
    deleteButton.className = 'delete-btn';

    newLi.appendChild(deleteButton);
    fruititems.appendChild(newLi);



    

    // Clear input fields
    document.getElementById('fruit-to-add').value = '';
    document.getElementById('description').value = '';
});


// delete functionality
fruititems.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        let buttontodelete = event.target.parentElement;
        fruititems.removeChild(buttontodelete);
    }
});


// Task 3: Create a filter that shows only those fruits whose
// either name or description or both matches the entered text.

// HINT: Check both the fruit name and the description (<p> tag)
// If either includes the entered text, show it; otherwise, hide it.

const filter = document.getElementById('filter');

filter.addEventListener("keyup", (event) => {
    const textEntered = event.target.value.toLowerCase();
    const fruitItems = document.getElementsByClassName("fruit");

    for (let i = 0; i < fruitItems.length; i++) {
        const cur = fruitItems[i].firstChild.textContent.toLowerCase();
        const para = fruitItems[i].querySelector('p');

        const curFru = para ? para.textContent.toLowerCase() : "";

        if (cur.indexOf(textEntered) === -1 && curFru.indexOf(textEntered) === -1) {
            fruitItems[i].style.display = "none";
        }
        else {
            fruitItems[i].style.display = "";
        }
    }
});
