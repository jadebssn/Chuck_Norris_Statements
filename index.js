console.log('working')
const button = document.querySelector('.button');
const quotes = document.querySelector('.quote');
 
const getJoke = () => {
 
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(json => {
        quotes.innerHTML = `<img src="${json.icon_url}" alt="chuck-norris-joke" />`
        quotes.innerHTML += json.value;
       
    });
}
 
button.addEventListener('click', getJoke);