var firebaseConfig = {
    apiKey: "AIzaSyAxSz1VCFhByuPNowGo53tKmAWXRvLpSRI",
    authDomain: "classtest-e6ad0.firebaseapp.com",
    databaseURL: "https://classtest-e6ad0-default-rtdb.firebaseio.com",
    projectId: "classtest-e6ad0",
    storageBucket: "classtest-e6ad0.appspot.com",
    messagingSenderId: "910959007557",
    appId: "1:910959007557:web:0f5f81d49ec4bee5d7902c",
    measurementId: "G-BN70RLYXX8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}