// 1 ---------------
let addNewDiv = document.createElement('div')
addNewDiv.classList.add('wraper')


let linkElement = document.createElement('img');
linkElement.setAttribute('src', 'https://cdn.pixabay.com/photo/2023/10/30/07/30/lake-8352059_1280.jpg')
linkElement.setAttribute('alt', 'img');
linkElement.innerText = 'Trees'

let h2Element = document.createElement('h2');
h2Element.classList.add('title');
h2Element.innerText = 'image title';
h2Element.style.color = '#E75038';
h2Element.style.fontSize = '30px';

addNewDiv.appendChild(linkElement);
addNewDiv.appendChild(h2Element);

document.getElementById('firstDomTask').appendChild(addNewDiv);

// 2 --------------

let addSomeTexst = document.querySelectorAll('.someName')

addSomeTexst.forEach(function (item) {

    let pText = document.createElement('p')
    pText.innerText = "hello "
    pText.classList.add('text')

    item.appendChild(pText)
})

// 3 -------------

const nav = document.getElementById("nav-bar")
const burger = document.getElementById("nav-burger")


burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active")
})