
const { fetchBreedDescription } = require('./breedFetcher.js');


const inputs = process.argv;
const breed = inputs[2];


fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log('Search error:', error);
  } else {
    console.log(description);
  }
});
