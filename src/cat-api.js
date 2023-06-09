export function fetchBreeds() {
    return fetch('https://api.thecatapi.com/v1/breeds', {
        headers: {
            'x-api-key': 'live_VbFV4WbGs9A1XvgFEwcgCUcBowUq4LGh14GSiDpXv7fiSHQrSxsaAiJvCrzBxyXJ',
        }
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            throw error;
        });
}

export function fetchCatByBreed(breedId) {
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
    return fetch(url, {
    headers: {
      'x-api-key': 'live_VbFV4WbGs9A1XvgFEwcgCUcBowUq4LGh14GSiDpXv7fiSHQrSxsaAiJvCrzBxyXJ',
    },
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      throw error;
    });
}