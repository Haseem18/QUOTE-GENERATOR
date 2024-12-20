const body = document.querySelector('body');
const quoteElement = document.querySelector('.quote_heading');
const imgElement = document.querySelector('img');
const nameElement = document.querySelector('.author_name');

const authors = [
  { image: "./images/muhammad_ali.jpg", name: "Muhammad Ali", quote: "Don’t count the days, make the days count." },
  { image: "./images/steve_jobs.jpg", name: "Steve Jobs", quote: "The only way to do great work is to love what you do." },
  { image: "./images/nelson_mandela.jpg", name: "Nelson Mandela", quote: "It always seems impossible until it’s done." },
  { image: "./images/albert_einstein.jpg", name: "Albert Einstein", quote: "In the middle of difficulty lies opportunity." },
  { image: "./images/charles_swindoll.jpg", name: "Charles R. Swindoll", quote: "Life is 10% what happens to us and 90% how we react to it." },
  { image: "./images/walt_whitman.jpg", name: "Walt Whitman", quote: "Keep your face always toward the sunshine—and shadows will fall behind you." },
  { image: "./images/confucius.jpg", name: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop." },
  { image: "./images/theodore_roosevelt.jpg", name: "Theodore Roosevelt", quote: "Believe you can and you're halfway there." },
  { image: "./images/ralph_emerson.jpg", name: "Ralph Waldo Emerson", quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us." },
  { image: "./images/franklin_roosevelt.jpg", name: "Franklin D. Roosevelt", quote: "The only limit to our realization of tomorrow will be our doubts of today." },
  { image: "./images/winston_churchill.jpg", name: "Winston Churchill", quote: "Success is not final, failure is not fatal: It is the courage to continue that counts." },
  { image: "./images/charles_darwin.jpg", name: "Charles Darwin", quote: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change." },
  { image: "./images/mahatma_gandhi.jpg", name: "Mahatma Gandhi", quote: "Be the change that you wish to see in the world." },
  { image: "./images/mark_twain.jpg", name: "Mark Twain", quote: "The secret of getting ahead is getting started." },
  { image: "./images/henry_ford.jpg", name: "Henry Ford", quote: "Whether you think you can, or you think you can’t – you’re right." },
  { image: "./images/dalai_lama.jpg", name: "Dalai Lama", quote: "Happiness is not something ready-made. It comes from your own actions." },
  { image: "./images/oprah_winfrey.jpg", name: "Oprah Winfrey", quote: "Turn your wounds into wisdom." },
  { image: "./images/aristotle.jpg", name: "Aristotle", quote: "It is during our darkest moments that we must focus to see the light." },
  { image: "./images/plato.jpg", name: "Plato", quote: "Courage is knowing what not to fear." },
  { image: "./images/lao_tzu.jpg", name: "Lao Tzu", quote: "The journey of a thousand miles begins with one step." }
];

function generateRandomAuthor() {
  const randomIndex = Math.floor(Math.random() * authors.length);
  const selectedAuthor = authors[randomIndex];
  quoteElement.innerHTML = selectedAuthor.quote;
  imgElement.src = selectedAuthor.image;
  nameElement.innerHTML = selectedAuthor.name;
}



function generateRandomColour() {
  const color1 = Math.floor(Math.random() * 256);
  const color2 = Math.floor(Math.random() * 256);
  const color3 = Math.floor(Math.random() * 256);
  const color4 = Math.random();
  body.style.backgroundColor = `rgba(${color1}, ${color2}, ${color3}, ${color4})`;
}

function updateAll() {
  generateRandomAuthor();
  generateRandomColour();
}

updateAll();
setInterval(updateAll, 4000);
