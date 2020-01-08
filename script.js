// SELECTORS

// Single Element Selector - allow one id or class selectoion
// Milti Element Selector - will allow multi id or class selection

// SINGLE ELEMENT SELECTOR
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// Change styling - best used when implementing events (dynamic functionality)
document.getElementById('task-title').style.background = 'green';
document.getElementById('task-title').style.color = 'white';
document.getElementById('task-title').style.padding = '15px';

const taskTitle = document.getElementById('task-title');

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My List';
taskTitle.innerHTML = '<span style="color: red">Task List</span>';


//QUERY SELECTOR - ALLOWS ANY SELECTOR
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';


document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'orange';
document.querySelector('li:nth-child(4)').textContent = 'This is a text!!!';

document.querySelector('li:nth-child(odd)').style.background = 'purple';

document.querySelector('li:nth-child(even)').style.background = 'hotpink';

// Multi element selector

const li = document.querySelectorAll('li');





