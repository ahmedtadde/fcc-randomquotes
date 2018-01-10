window.onload = displayNewQuote();
let newQuoteButton = document.getElementById('quote-btn');
newQuoteButton.addEventListener('click',() => {
  return displayNewQuote();
});

let tweetQuoteButton = document.getElementById('twitter-btn');
tweetQuoteButton.addEventListener('click',() => {
  return tweetQuote();
});


function displayNewQuote(){
  let quoteText = document.getElementById('quote-text');
  let quoteAuthor = document.getElementById('quote-author');
  let url = `https://talaikis.com/api/quotes/random/`;
  console.log(url);
  fetch(url)
  .then((response) => {return response.json();})
  .then((data) => {
    quoteText.innerHTML = data.quote;
    quoteAuthor.innerHTML = data.author;
  })
  .catch((error) => {
    console.log(error);
  });
}


function tweetQuote(){
  let quoteText = document.getElementById('quote-text').innerHTML;
  let quoteAuthor = document.getElementById('quote-author').innerHTML;
  let text = `"${quoteText}" -${quoteAuthor} `;
  let url = 'https://goo.gl/1DWLNe';
  // (() => {
  //   function makeShortUrl() {
  //     let shortened;
  //     let longUrl = 'https://ahmedtadde-fcc-randomquotes.herokuapp.com';
  //     gapi.client.init({
  //       'apiKey': 'AIzaSyCjbLz0Tw2HfPcvwNChJTJNznETsPQvIn0',
  //     }).then(function() {
  //       return gapi.client.request({
  //         'path': `https://www.googleapis.com/urlshortener/v1/url/?longUrl=${longUrl}`,
  //       })
  //     }).then(function(response) {
  //       console.log(response.result);
  //       shortened = response.result.id;
  //       return shortened;
  //     }, function(reason) {
  //       console.log('Error: ' + reason.result.error.message);
  //     });
  //   };
  //   // 1. Load the JavaScript client library.
  //   gapi.load('client', makeShortUrl);
  // })();

  window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');

}
