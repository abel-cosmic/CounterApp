//declarations of variables i need from my index.html

let counter = document.getElementById("counter");
let incrementBtn = document.getElementById("increment");
let saveBtn = document.getElementById("save");
let entry = document.getElementById("entry");

//global variables
let count = 0;

 function incrementer(){
    count += 1;
    counter.textContent = count;

}
 function saver(){
    entry.textContent += count + " - ";
    count = 0;
    counter.textContent = 0;
}

