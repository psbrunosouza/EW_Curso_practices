const service = require('./service');

async function main(){
  try{

    const response = await service.getPeople('a');
    const people = [];

    /**
     * for
     */
    console.time('for');
    for(let i = 0; i < response.results.length; i++){
      people.push(response.results[i].name);
    }
    console.timeEnd('for');
    console.log(people);

    /**
     * for in
     */
    console.time('forin');

    for(let i in response.results){
      people.push(response.results[i].name);
    }
    console.timeEnd('forin');
    console.log(people);

    /**
     * for of
     */
    console.time('forof');
    for(let person of response.results){
      people.push(person.name);
    }
    console.timeEnd('forof');
    console.log(people);


  }catch(err){
    console.error(err);
  }
};

main();