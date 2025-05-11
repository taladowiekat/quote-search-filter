

const API_URL = 'https://dummyjson.com/quotes';

const searchInput = document.getElementById('searchInput');

const quoteList = document.getElementById('quoteList');

const errorMessage = document.getElementById('errorMessage');

let quotes = [];


fetch(API_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch quotes.');
        }
        return response.json();
    })
    .then(data => {
        quotes = data.quotes;
        displayQuotes(quotes);
    })
    .catch(error => {
        errorMessage.textContent = error.message;
    });


function displayQuotes(quotesToDisplay) {
    quoteList.innerHTML = '';
    quotesToDisplay.forEach(quote => {
        const li = document.createElement('li');
        li.textContent = `"${quote.quote}" - ${quote.author}`;
        quoteList.appendChild(li);
    });
}


searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredQuotes = quotes.filter(q => q.quote.toLowerCase().includes(query));
    displayQuotes(filteredQuotes);
});
