const openBtn = findElement('.header__btn');
const menu = findElement('.navbar');
const closeBtn = findElement('.navbar__btn');
const korzina = findElement('.hero__korzina');
const favorite = findElement('.hero__fav');
const heroImages = findElement('hero-images');
const first = findElement('first-img');
const second = findElement('second-img');
const third = findElement('third-img');
const fourth = findElement('fourth-img');
const fifth = findElement('fifth-img');
const sixth = findElement('sixth-img');
const addBtn = findElement(".hero__btn-add");


//open-menu
openBtn.addEventListener('click', () => { menu.classList.add('menu-open') })
//close-menu
closeBtn.addEventListener('click', () => { menu.classList.remove('menu-open') })


//korzinaga bosilganda
korzina.addEventListener('click', () => { alert("Korzinaga qo'shildi") })
//sevimliga bosilganda
favorite.addEventListener('click', () => { alert("Sevimliga qo'shildi") })

function images() {
  
}

let toAdd = 1
let overNumb = 1

function add(evt) {
    evt.preventDefault();

}

addBtn.addEventListener('click', add)

first.addEventListener('click', images)
