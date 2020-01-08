// MULTI ELEMENT SELECTOR
// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hell World';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

// document.getElementsByTagName (li, ul, img, div, etc )
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[3]);
lis[3].style.color = 'red';
lis[4].textContent = 'Hello World';

// Convert HTML Collection into array
lis = Array.from(lis);

// Arrays Method
lis.reverse();

lis.forEach(function (li) {
  console.log(li.className);
  li.textContent = 'Hello World!';
  li.style.background = 'limegreen'
  li.style.color = 'white'
});

console.log(lis)

// QYURY SELECTOR ALL - RETURNS A NODE LIST - ALLOWS forEach & array Methods without conversion

const newItems = document.querySelectorAll('ul.collection li.collection-item');
console.log(newItems);

newItems.forEach(function (i, index) {
  i.textContent = `${index} : Hello World!`;
  i.style.background = 'limegreen'
  i.style.color = 'white'
});

console.log(newItems);

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

// nth:child(odd)
liOdd.forEach(function (odd, index) {
  odd.style.background = 'red';
});

console.log(liOdd);

// nth:child(even) Loop
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = 'hotpink';
}

console.log(liEven);