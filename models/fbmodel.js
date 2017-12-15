const FB = require('fb');

class Facebook {
  static getUserData(req,res){
    FB.api('me', { fields: ['id', 'name', 'email'], access_token: 'EAAB5HGA9gxQBAEgfzLQwpEVnZAcy8rgOKk7obDkDoCpJM7tXJWnNPXoAFSNcPWPX7ZB4HXQrA9KnEYjPoZBY8lI1sdB5IvUvntb6HBzfhQy34Eodct9K9OBOtQQuXlcskQIef6E2tJEakUascYfhpOh24XhWswNgqru6ulsWQuZCEoDwrqKKYdZAoEIdsRpwtZCgMnI0lPJQZDZD' }, function (response) {
    console.log(res);
    // if (response.error) {
    //   res.status()
    // }
});
  }
}

module.exports = Facebook;