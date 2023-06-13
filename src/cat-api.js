const API_KEY = 'live_VbFV4WbGs9A1XvgFEwcgCUcBowUq4LGh14GSiDpXv7fiSHQrSxsaAiJvCrzBxyXJ';

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': API_KEY
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch breed information');
      }
      return response.json();
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

export function fetchCatByBreed(breedId) {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, {
    headers: {
      'x-api-key': API_KEY
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch cat information');
      }
      return response.json();
    })
    .catch(error => {
      throw new Error(error.message);
    });
}
