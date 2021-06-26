/*
 *  Promises status:
 *  PENDING: unresolved promise
 *  FULFILLED: promise solved
 *  REJECTED: when an error happens 
 */

/*
 *  Promise receives two params called resolve and reject
 *  RESOLVE - when was a success
 *  REJECT - when get an error
 */

/* 
 *  Promisify is useful to transform a function callback in promise
 *  nevertheless doesn't work in any situations.
 */
const util = require('util');
const getAddressAsync = util.promisify(getAddress);

function getUser(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      return resolve(
        {
          id: 1,
          name: 'Aladin',
          birthDate: new Date(),
        }
      )
    }, 1000);
  })
  
}

function getPhoneNumber(idUser){
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      return resolve({
        phone: '93572056',
        ddd: 71
      })
    }, 2000)
  })
}

function getAddress(idUser, callback){
  setTimeout(() => {
    return callback(null, {
      street: 'rua dos bolos',
      addressNumber: 0
    })
  }, 2000)
}

async function main(){
  try{

    console.time('time to end');
    const user = await getUser();
    // const phone = await getPhoneNumber(user.id);
    // const address = await getAddressAsync(user.id);

    // promise all is used to run two or 
    // more promises concurrently
    const result = await Promise.all([
      getPhoneNumber(user.id),
      getAddressAsync(user.id)
    ]);

    const phone = result[0];
    const address = result[1];

    console.log(`
      name: ${user.name},
      phone: (${phone.ddd}) ${phone.phone},
      address: ${address.street}
    `);
    console.timeEnd('time to end');


  }catch(err){
    console.error(err);
  }
}

main();
