class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
      $.ajax({
        method: "GET",
        url: "http://ih-api.herokuapp.com/characters",
        success: function (response) {
        console.log('answer from API',response);

          response.forEach( (response) => {
            var characterInfo =
             '<div class="character-info">' +
             '<div class="name"> Name: ' + response.name + '</div>'+
             '<div class="occupation"> Occupation: '+response.occupation+'</div>'+
             '<div class="debt"> Debt: '+response.debt+'</div>'+
             '<div class="weapon"> Weapon: '+response.weapon+'</div>'+
             '<div class="id"> Id: '+ response.id+'</div>'+
             '</div>';
           $(characterInfo).appendTo('.characters-container');
       });
     },

        error: function (err) {
          console.log("Not Working");
        },
      });
  }

  getOneRegister (id) {
    $.ajax({
      method: "GET",
      dataType: 'json',
      url: "http://ih-api.herokuapp.com/characters/" + id,
      success: function (response) {
        console.log(response);
        $("div.character-info").first().remove();
          var characterInfo =
           '<div class="character-info">' +
           '<div class="name"> Name: ' + response.name + '</div>'+
           '<div class="occupation"> Occupation: '+response.occupation+'</div>'+
           '<div class="debt"> Debt: '+response.debt+'</div>'+
           '<div class="weapon"> Weapon: '+response.weapon+'</div>'+
           '<div class="id"> Id: '+response.id+'</div>'+
           '</div>';
           console.log(characterInfo);
         $(characterInfo).appendTo('.characters-container');


   },

      error: function (err) {
          console.log("Not Working");


      },
    });
  }

  createOneRegister (characterInfo) {
    $.ajax({
      method: 'POST',
      url: this.BASE_URL + "/characters",
      data: characterInfo,
      success: function (response) {
        $("div.character-info").remove();
        var characterInfo =
          '<div class="character-info">' +
          '<div class="name"> Name:' + response.name + '</div>'+
          '<div class="occupation"> Occupation:'+response.occupation+'</div>'+
          '<div class="debt"> Debt:'+response.debt+'</div>'+
          '<div class="weapon"> Weapon:'+response.weapon+'</div>'+
          '<div class="id"> Id: '+response.id+'</div>'+
          '</div>';
        $(characterInfo).appendTo('.characters-container');
      },
      error: function (response) {
          console.log("Not Working");
      }
    });
  }

  updateOneRegister (characterInfo, id) {
    $.ajax({
      dataType: 'json',
      method: 'PATCH',
      url: this.BASE_URL + "/characters/" + id,
      data: characterInfo,
      success: function (response) {
        $("div.character-info").remove();
        var characterInfo =
          '<div class="character-info">' +
          '<div class="name"> Name:' + response.name + '</div>'+
          '<div class="occupation"> Occupation:'+response.occupation+'</div>'+
          '<div class="debt"> Debt:'+response.debt+'</div>'+
          '<div class="weapon"> Weapon:'+response.weapon+'</div>'+
          '<div class="id"> Id: '+response.id+'</div>'+
          '</div>';
        $(characterInfo).appendTo('.characters-container');

      },
      error: function (response) {
          console.log("Not Working");

      }
    });

  }
  deleteOneRegister (id) {
    $.ajax({
      method: 'DELETE',
      url: this.BASE_URL + "/characters/" + id,
      success: function (response) {
        console.log(this.url);
      },
      error: function (response) {
          console.log("Not Working");

      }
    });
  }
}