let val;

// Accesses the element / tags in the html file
val = document;
console.log(val);

val = document.all;
console.log(val);

val = document.all[3];
console.log(val);

val = document.all.length;
console.log(val);

val = document.body;
console.log(val);

val = document.head;
console.log(val);


// Selectors

val = document.forms;
console.log(val);
val = document.forms[0].id;
console.log(val);
val = document.forms[0].method;
console.log(val);
val = document.forms[0].action;
console.log(val);

val = document.links;
console.log(val);

val = document.links[0];
console.log(val);
val = document.links[0].className[0];
console.log(val);
val = document.links[0].id;
console.log(val);
val = document.links[0].classList[0];
console.log(val);

val = document.images;
console.log(val);

val = document.scripts;
console.log(val);

val = document.scripts[2].getAttribute('src');
console.log(val);

// forEach with a collection (forEach is for Arrays only!)
let scripts = document.scripts;

let scriptsArray = Array.from(scripts);

scriptsArray.forEach(function (script) {
  console.log(script);
})
