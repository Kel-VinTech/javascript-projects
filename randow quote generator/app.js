let quote = document.getElementById('quote');
let author = document.getElementById('author');
let getQuote = document.getElementById('getQuote');
let copyQuote = document.getElementById('copyQuote');

const url = "https://api.quotable.io/random";

let fetchQuote = () => {
    fetch(url)
        .then((res) => 
    res.json())
        .then((item) => {
            quote.innerText = 
    item.content;
            author.innerText =
    item.author;
        });
};

window.addEventListener('load', fetchQuote);
getQuote.addEventListener('click', fetchQuote);

copyQuote.addEventListener('click', () => {
    navigator.clipboard.writeText(quote.innerText);
});


