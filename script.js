
// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 9000) {
    console.log("codezilar");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

//  *********************script for calculator*******************

function submit(){
  const lastDate = document.getElementById('last-date').value;
  const firstDate = document.getElementById('first-date').value;
  const result = document.getElementById('result');
    
  const lastLast = new Date(lastDate);
  const firstFirst = new Date(firstDate); 

  // for Years
  const smallYear = lastLast.getFullYear()
  const bigYear = firstFirst.getFullYear()
  
  // for Months
  const lastMonth = lastLast.getMonth(); 
  const firstMonth  = firstFirst.getMonth();

  // for Days
  const smaller = lastLast.getDay(); 
  const miga = firstFirst.getDay(); 

  
  if(smaller && miga || firstMonth && lastMonth){
    // for Years
    const Years = bigYear - smallYear;
    const Yearnegativity = Math.abs(Years)
    console.log(Yearnegativity);
    
    // for Months
    const months = firstMonth - lastMonth;
    const monthRemoveNegative = Math.abs(months)
    console.log(monthRemoveNegative);

    //  for Days
    const dayDifference = miga - smaller;
    const timeDifference = Math.abs(dayDifference);

    // generall output for inputs
    result.innerHTML = `${Yearnegativity} Year ${monthRemoveNegative} Month ${timeDifference} Days `;
  }
}
// submit();
