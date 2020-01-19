// grabbing the element with the class of fancy form the html
const text = document.querySelector('.fancy');

// it returns the whole element, ex: <h1 class="fancy">Fancy Schmenzy</h1>
console.log(text);

// grabs the text content between the h1 brackets 
const strText = text.textContent;
console.log(strText); // prints out Fancy Schmenzy

// now, split the text into individual characters in an array
const splitText = strText.split("");
console.log(splitText);

// has to go above the for loop or else it will set the text content of each span to nothing 
text.textContent = '';

// iterating over the splitText variable in order to turn each character into a span
for (let i = 0; i< splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    // selecting all the spans and the charac index afterward so that it iterates over each one
    const span = text.querySelectorAll('span')[char];
    // adding the class of .fade to each span
    span.classList.add('fade');
    // incrementing one more after each iteration, ex: finish with index 0, move to index 1, finish with index 1, move to index 2, etc.
    char++;
    

    // if statement to check for char reaching the length of the array full of spans of the individual characters from fancy schmenzy
    if (char === splitText.length){
        // runs a complete function from out side of this functional scope that will clear the timer variable and set it to null after it runs through the spans. 
        complete();
        return;
    }
}

// setting the function complete() outside of function onTick() so that it can be accessed inside of onTick()
function complete() {
    clearInterval(timer);
    timer = null;
}