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


getUser().then((user) => {
  return getPhoneNumber(user.id).then((phone) => {
    return {
      user: {
        id: user.id,
        user: user.name,
        birthDate: user.birthDate
      },
      phone: {
        phone: phone.phone,
        ddd: phone.ddd
      }
    }
  })
}).then((result) => {
  return getAddressAsync(result.user.id).then(
    (address) => {
      return {
        user: result.user,
        phone: result.phone,
        address: address
      }
    }
  )
})
.then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
})
