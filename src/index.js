import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

function showError() {
  error.style.display = 'block';
}

function hideError() {
  error.style.display = 'none';
}

function showCatInfo(imageUrl, breedName, description, temperament) {
  const catImage = document.createElement('img');
  catImage.src = imageUrl;

  const nameElement = document.createElement('p');
  nameElement.textContent = `${breedName}`;
  nameElement.classList.add('cat-name');
  nameElement.style.fontWeight = 'bold';
  nameElement.style.fontSize = '20px';

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = `Description: ${description}`;

  const temperamentElement = document.createElement('p');
  temperamentElement.innerHTML = `<span class="temperament">Temperament:</span> ${temperament}`;
  const temperamentSpan = temperamentElement.querySelector('.temperament');
  temperamentSpan.style.fontWeight = 'bold';


  catInfo.innerHTML = '';
  catInfo.appendChild(catImage);
  catInfo.appendChild(nameElement);
  catInfo.appendChild(descriptionElement);
  catInfo.appendChild(temperamentElement);
  catInfo.style.display = 'block';
}

function hideCatInfo() {
  catInfo.style.display = 'none';
}

breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;
  
  hideCatInfo();
  showLoader();
  hideError();

  fetchCatByBreed(selectedBreedId)
    .then(data => {
      const breed = data[0].breeds[0];
      const imageUrl = data[0].url;

      showCatInfo(imageUrl, breed.name, breed.description, breed.temperament);
    })
    .catch(error => {
      showError();
      console.error(error);
    })
    .finally(() => {
      hideLoader();
    });
});

showLoader();
hideError();

fetchBreeds()
  .then(data => {
    data.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
  })
  .catch(error => {
    showError();
    console.error(error);
  })
  .finally(() => {
    hideLoader();
  });
