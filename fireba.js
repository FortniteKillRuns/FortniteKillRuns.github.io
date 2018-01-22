function checkifusersignedin(){

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("mainlog").style.visibility = "hidden";
      document.getElementById("mainreg").style.visibility = "hidden";
    } else {
      // No user is signed in.

  });
}

function Register(){

var firebaseref = firebase.database().ref();

var email = document.getElementById("txtEmail").value;

var pass = document.getElementById("txtPassword").value;
var username = document.getElementById("txtUserName").value;

var isSuccessful = false;
firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  // ...
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    usersRef = firebaseref.child(user.uid);

    // User is signed in.

    firebaseref.child(user.uid).child('username').set(username);

    firebaseref.child(user.uid).child('email').set(email);

checkifusersignedin();

  }

});


}

function loadhome(){
  window.location.href = "index.htm";
}


function Login(){
  var email = document.getElementById("txtEmail").value;

  var pass = document.getElementById("txtPassword").value;

  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {


checkifusersignedin();

  }

});

}
