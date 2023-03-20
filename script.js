// create button that generates random "quote" from api into the console
'use strict';
const api = "https://api.adviceslip.com/advice";
const number = function(number){
    document.querySelector('#quoteNumber').textContent = number;
}
const quoteContainer = document.querySelector('.quoteContainer').textContent;
const quote = document.querySelector('.quote');
const button = document.querySelector('button');


button.addEventListener('click', function(){
    fetch(api)
    .then(response => response.json())
    .then(data => {
        number(`Advice #${data.slip.id}`);
        document.querySelector('.quote').textContent = `"${data.slip.advice}"`;

    })
});