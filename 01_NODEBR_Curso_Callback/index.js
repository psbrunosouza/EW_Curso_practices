function getUser(callback){
  setTimeout(function(){
    return callback( null, {
      id: 1,
      name: 'Aladin',
      birthDate: new Date(),
    })
  }, 1000);
}

function getPhoneNumber(idUser, callback){
  setTimeout(() => {
    return callback(null, {
      phone: '93572056',
      ddd: 71
    })
  }, 2000)
}

function getAddress(idUser, callback){
  setTimeout(() => {
    return callback(null, {
      street: 'rua dos bolos',
      addressNumber: 0
    })
  }, 2000)
}

const user = getUser(
  function resolveUser(userError, user){
  if(userError){
    console.log('error: ', userError);
    return;
  }
  console.log(user);

  getPhoneNumber(user.id, function resolvePhone(phoneError, phone){
    if(phoneError){
      console.log('error: ', phoneError);
      return;
    }

  })

  getAddress(user.id, function resolveAddress(addressError, address){
    if(addressError){
      console.log('error: ', addressError);
      return;
    }

    console.log(`name: ${user.name},
    phone: ${phone.ddd}`);
  })
});
// const phone = getPhoneNumber(user.id);

// console.log('phone', phone);
