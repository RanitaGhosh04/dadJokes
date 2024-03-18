document.getElementById('joke-btn').addEventListener('click', getJoke);

async function getJoke() {
  const url = 'https://v2.jokeapi.dev/joke/Any?type=single';

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayJoke(data.joke);
  } catch (error) {
    console.error('Error fetching joke:', error);
    displayJoke('Failed to fetch joke. Please try again later.');
  }
}

function displayJoke(joke) {
  const jokeContainer = document.querySelector('.joke-container');
  jokeContainer.innerHTML = `<p class="joke-text">${joke}</p>`;
}
