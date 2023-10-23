import { reviews } from './reviews.js';
console.log(reviews);

const myTarget = document.getElementById('card');

for (let x = 0; x < reviews.length; x++) {
    const mySection = document.createElement('section');
    const myName = document.createElement('h3');
    myName.textContent = reviews[x].name;

    
    
    const myReview = document.createElement('p');
    myReview.textContent = reviews[x].text;

    
    const myRating = document.createElement('div');

    for (let step = 0; step < reviews[x].stars; step++) {
     
        const reviewI = document.createElement('img');
        reviewI.src = "./images/star-solid.svg";
        myRating.appendChild(reviewI);
    };


    mySection.appendChild(myName);
    mySection.appendChild(myRating);
    mySection.appendChild(myReview);
 
    myTarget.appendChild(mySection);
    
  
};


function toggle() {
    document.getElementById('navBar').classList.toggle('open');
    document.getElementById('navB').classList.toggle('open');
}
const selectorBtn = document.getElementById('navB');

selectorBtn.onclick = toggle;

