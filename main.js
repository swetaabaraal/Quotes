let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes =
[
    '"Love For All, Hatred For None." – Khalifatul Masih III',
    '"Change the world by being yourself." – Amy Poehler',
    '"Every moment is a fresh beginning." – T.S Eliot',
    '"Never regret anything that made you smile." – Mark Twain',
    '"Die with memories, not dreams." – Unknown',
    '"Everything you can imagine is real." – Pablo Picasso',
    '"Whatever you do, do it well." – Walt Disney',
    '"What we think, we become." – Buddha',
];
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML = randomQuote;

})