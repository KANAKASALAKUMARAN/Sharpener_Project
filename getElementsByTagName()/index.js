const tagName = document.getElementsByTagName('li');
tagName[4].style.color = 'red';
for (let i = 0; i < tagName.length; i++){
    tagName[i].style.fontStyle = 'italic';
}