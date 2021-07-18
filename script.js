/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack("Everyday Backpack", 30, "grey", 15, 26, 26, false, "December 5, 2018 15:00:00 PST", "./assets/images/everyday.svg");

const main = document.querySelector(".maincontent");

const content = `
   <article class="backpack" id="everyday">
     <figure class="backpack__image">
       <img src=${
    everydayPack.image
} alt="" />
     </figure>
     <h1 class="backpack__name">${
    everydayPack.name
}</h1>
     <ul class="backpack__features">
       <li class="packprop backpack__volume">Volume:<span> ${
    everydayPack.volume
}l</span></li>
       <li class="packprop backpack__color">Color:<span> ${
    everydayPack.color
}</span></li>
       <li class="packprop backpack__age">Age:<span> ${
    everydayPack.getBackPackAge()
} days old</span></li>
       <li class="packprop backpack__pockets">Number of pockets:<span> ${
    everydayPack.pocketNum
}</span></li>
       <li class="packprop backpack__strap">Left strap length:<span> ${
    everydayPack.strapLength.left
} inches</span></li>
       <li class="packprop backpack__strap">Right strap length:<span> ${
    everydayPack.strapLength.right
} inches</span></li>
       <li class="packprop backpack__lid">Lid status:<span> ${
    everydayPack.lidOpen
}</span></li>
     </ul>
   </article>
 `;

const horizMenu = `
 <ul>
  <li class="menu"><a href="#home">Home</a></li>
  <li class="menu"><a href="#news">News</a></li>
  <li class="menu"><a href="#contact">Contact</a></li>
  <li class="menu"><a href="#about">About</a></li>
</ul>
 `;
main.innerHTML = content;

const horizMenuElement = document.createElement('horiz-menu');
horizMenuElement.classList.add('menu');
horizMenuElement.innerHTML = horizMenu;

const siteHeader = document.querySelector('.siteheader');

siteHeader.append(horizMenuElement);

let item = 'Microsoft Surface';
let collection = [
    'Patronics Timer',
    item,
    'Monitor',
    'Notepad',
    'Pen',
    'Pencil',
    'Mobile - POCO',
    'Mobile - iPhone',
    'Mouse',
    'Keypad',
    'Printer',
    'Phone - Airtel',
    'Book - Daily Stoic',
    'Book - Originals',
    'Book - Principles',
    'Modem/Router',
    'Key Switcher',
    'Charger'
];
console.log(collection.join(' | '));
let lastItem = collection.pop();
collection.unshift(lastItem);
console.log(collection.join(' | '));
collection.sort();
console.log(collection.join(' | '));
let findValue = collection.find((item) => (item == 'Charger'));
console.log('Found:', findValue);
