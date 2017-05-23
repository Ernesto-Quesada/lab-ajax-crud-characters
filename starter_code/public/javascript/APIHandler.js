function showFeedback(postResponse) {
    console.log('working');
    console.log(postResponse);
}

function handleError(err) {
    console.log('Not working');
    console.log(err);
}

class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
    }


    getFullList() {
        $.ajax({
            method: 'GET',
            url: 'http://ih-api.herokuapp.com/characters',
            success: showFeedback,
            error: handleError
        });
    }

    getOneRegister(one) {
        $.ajax({
            method: 'GET',
            url: `http://ih-api.herokuapp.com/characters/${one}`,
            success: showFeedback,
            error: handleError
        });
    }

    createOneRegister(name,occupation,debt,weapon) {
      
      const character = {
          name: name,
          occupation: occupation,
          debt: debt,
          weapon: weapon
      };
        $.ajax({
            method: 'POST',
            url: 'http://ih-api.herokuapp.com/characters',
            data: character,
            success: showFeedback,
            error: handleError
        });
    }

    updateOneRegister(name,occupation,debt,weapon) {
        $.ajax({
            method: 'PATCH',
            url: `http://ih-api.herokuapp.com/characters/${one}`,
            data: {
                name: name,
                occupation: occupation,
                debt: debt,
                weapon: weapon
            },
            success: showFeedback,
            error: handleError
        });
    }

    deleteOneRegister(one) {
        $.ajax({
            method: 'DELETE',
            url: `http://ih-api.herokuapp.com/characters/${one}`,
            success: showFeedback,
            error: handleError
        });
    }
}