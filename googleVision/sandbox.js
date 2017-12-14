const axios = require('axios');

axios.post('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDJhP5ZpSEKUWLRqoYJl1rPHxbn6t-Ziso',
            {
              "requests":[
                {
                  "image":{
                    "source":{
                      "imageUri":
                        `http://kirimbelanja.com/wp-content/uploads/2016/06/fruit-tea-blackcurrant-200ml.jpg`
                    }
                  },
                  "features":[
                    {
                      "type":"LOGO_DETECTION",
                      "maxResults":10
                    }
                  ]
                }
              ]
            }      
        )
        .then(resp=>{
            console.log(resp.data.responses[0]);
        })
        .catch(err=>{
            console.log(err);
        })
