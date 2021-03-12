const request = require('request');


const inputs = process.argv;
const breed = inputs[2];
let URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(URL, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log('Search error:', error);
  } if (data[0] === undefined) {
    console.log('Breed not found');
  } else {
    console.log(data[0].description);
  }
});
