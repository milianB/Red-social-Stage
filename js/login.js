


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBFlYhkbwLmDCeDS5B-c2Ct4sb3kIMkvA0",
    authDomain: "trabajofinalsprint3.firebaseapp.com",
    databaseURL: "https://trabajofinalsprint3.firebaseio.com",
    projectId: "trabajofinalsprint3",
    storageBucket: "trabajofinalsprint3.appspot.com",
    messagingSenderId: "6706348391"
  };
  firebase.initializeApp(config);

$("#register").click(function(){
  authGoogle();
  })


  function authGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    autentication(provider);
  }

  function autentication(provider) {
    firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(result);
    // ...
  }).catch(function(error) {
    console.log(error);
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode);
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    console.log(email);
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(credential);
    
});
}
