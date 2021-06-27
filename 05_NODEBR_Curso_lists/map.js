const service = require('./service');

/**
 * create my own map function
 */
Array.prototype.myMap = function(callback){
  const newArray = [];
  for(let i = 0; i < this.length; i++){
    const result = callback(this[i], i);
    newArray.push(result)
  }
  return newArray;
};

/**
 * using MAP to get and transform the content received
 */
async function main(){
  try{
    // const response = await service.getPeople('a');
    // const peopleNames = response.results.map(person => person.name);

    const response = await service.getPeople('a');
    const peopleNames = response.results.myMap((person, indice) => {
      return `[${indice}] ${person.name}`
    });

    console.log(peopleNames);

  }catch(err){
    console.log(err);
  }
}

main();