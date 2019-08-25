//get the root element
const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class','container');
app.appendChild(container);

//http request to obtain the json objects
let request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
    //access JSON data
    let data = JSON.parse(request.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            //display each movie
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            //set the title of card to movie title from json
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            //set the content of the card to description of movie
            const p = document.createElement('p');
            p.textContent = movie.description;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);

        })
    } else {
        console.log('error');
    }
};
request.send();



