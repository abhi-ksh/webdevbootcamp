const axios = require('axios');
// get one user
axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(function (response) {
    // handle success
    // console.log(response.data);
    const name = response.data.name;
    const city = response.data.address.city;
    console.log("User Name:" + name );
    console.log("Location :" + city );

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
