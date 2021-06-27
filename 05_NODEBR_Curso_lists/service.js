/**
 * Axios is used to make requests and get the 
 * response from any server.
 */
const axios = require('axios');

/**
 * api url to make requests
 */
const baseUrl = 'https://swapi.dev/api/people';

async function getPeople(name){
  const urlToSearch = `${baseUrl}?search=${name}`;
  const response = await axios.get(urlToSearch);
  return response.data;
}

// getPeople('r2').then((person) => {
//   console.log(person);
// });

module.exports = {
  getPeople
}
