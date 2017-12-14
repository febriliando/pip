const axios = require('axios')

axios.get('http://api.walmartlabs.com/v1/search?query=&format=json&apiKey=63hzn8trymendbtajfa9dx98')
.then(function (response) {
  console.log(response.data.items[0].salePrice * 13615);
})
.catch(function (error) {
  console.log(error);
});