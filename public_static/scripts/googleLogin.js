function onSignIn(googleUser) {

  var profile = googleUser.getBasicProfile(); 
  
  let token = googleUser.getAuthResponse().id_token;

  console.log(token)

  /*$.ajax({

    url : "https://us-central1-linkbook-68850.cloudfunctions.net/api/googleLogin",
    type : "GET",
    data : {
      "accessToken" : token
    },
    success : function(result,status) {

      console.log(result)
      console.log(status)
    }
  }) */
  
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}