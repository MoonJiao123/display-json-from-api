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
            const section = document.createElement('div');
            section.setAttribute('class', 'section');

            //set the title of section to movie title from json
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            //set the content of the section to description of movie
            const p = document.createElement('p');
            p.textContent = movie.description;

            container.appendChild(section);
            section.appendChild(h1);
            section.appendChild(p);

        })
    } else {
        console.log('error');
    }
};
request.send();



