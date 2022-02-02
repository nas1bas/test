//==========================================================================//
const openBtn = findElement('.header__btn');
const menu = findElement('.navbar');
const closeBtn = findElement('.navbar__btn');

//open-menu
openBtn.addEventListener('click', () => { menu.classList.add('menu-open') })
//close-menu
closeBtn.addEventListener('click', () => { menu.classList.remove('menu-open') })

//================================================================================//



//================================================================================//
const korzina = findElement('.hero__korzina');
const favorite = findElement('.hero__fav');

//korzinaga bosilganda
korzina.addEventListener('click', () => { alert("Korzinaga qo'shildi") })
//sevimliga bosilganda
favorite.addEventListener('click', () => { alert("Sevimliga qo'shildi") })

//================================================================================//



//================================================================================//
const addBtn = findElement(".hero__btn-add")
const removeBtn = findElement(".hero__btn-remove")
const overAll = findElement(".hero__numbs")

let numb = 1;

function add() {
    let addition = ++numb
    overAll.textContent = addition;
}

// function remove() {
//     if (numb <= 0) {
//         return
//     } else {
//         let removal = --numb

//         overAll.textContent = removal;
//         console.log(overAll);
//     }

// }

function remove() {
    if (numb <= 0)
        return

    let removal = --numb;
    overAll.textContent = removal;
}

addBtn.addEventListener("click", add)
removeBtn.addEventListener("click", remove);

//========================================================================================//