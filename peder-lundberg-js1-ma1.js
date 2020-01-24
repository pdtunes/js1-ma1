/* Module Assignment 1
Level 1 */

/* Question 1
Create an object called cat.
Give the object one property called complain. 
complain's value should be a method (a function) which logs the string "Meow!". */

let cat = {
  complain: function() {
    console.log("Meow!");
  }
};

cat.complain();

/* Question 2
Select the h3 from the HTML below using the querySelector method and assign it to a variable called heading.*/

/* <h3>Subheading</h3> */

let heading = document.querySelector("h3");

/* Question 3
Use the style property on the heading variable from the question above to change its font size to "2em". */
heading.style.fontSize = "2em";

/* Question 4
Add a class to the heading variable called subheading. */
heading.classList.add("subheading");

/* Question 5
Write code that selects all the p elements on a page and assigns them to a variable called paragraphs. */
let paragraphs = document.querySelectorAll("p");

/* Question 6
Select the div by its class from the HTML below, assign it to a variable called resultsContainer and set its inner HTML to be <p>New paragraph</p>.
<div class="results"></div> */
let resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML += "<p>New paragraph</p>";

/* Question 7
Create a function that has one argument called catArray.
Inside the function, loop through the catArray argument and console log the name property in each object.
Call the function and pass in the cats variable below. */

const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];
function catArrayLoop(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i]);
  }
}
catArrayLoop(cats);

/* Question 8
Using the function and cats variable from the above question, instead of logging the name property, wrap each name property in an h5 tag, add it to a variable you declare before the loop and return the variable from the function after the loop.
The function should return the following:
<h5>Blob</h5>
<h5>Harold</h5>
<h5>Blurt</h5> */

function catArrayLoop(catArray) {
  let catName = "";

  for (let i = 0; i < catArray.length; i++) {
    catName += `<h5>${catArray[i].name}</h5>`;
  }
  return catName;
}


/* Question 9
Call the function from question 8, pass it the cats variable from question 7 and set the inner HTML of the resultsContainer variable from question 6 to the return value of the function.*/

resultsContainer.innerHTML = catArrayLoop(cats);
 

/* Question 10
Using the function from question 8, add a p element containing the age property from each object. If the age property is missing, it should display Age unknown instead.
Wrap the h5 and p in a div.
The function should return the following:

<div>
    <h5>Blob</h5>
    <p>10</p>
</div>
<div>
    <h5>Harold</h5>
    <p>Age unknown</p>
</div>
<div>
    <h5>Blurt</h5>
    <p>21</p>
</div> */


function catArrayLoop(catArray) {
    let newHTML = "";
    for (let i = 0; i < catArray.length; i++) {
        let details = `<div class="card">
            <h5> class="name">${cats[i].name}</h5>
            <p> class="age">${cats[i].age}<p>
        </div>
    </div>`;

    newHTML += details;
    }
    return catName;
  }
