function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    database.ref('user/' + "hanh").set({
                name: position.coords.latitude,
                bac: position.coords.longitude
            })
  }

var firebaseConfig = {
    apiKey: "AIzaSyCOj8ObNTnXnctVhWN3p77Plr1kFVVzWPk",
    authDomain: "getgps1-7a59a.firebaseapp.com",
    databaseURL: "https://getgps1-7a59a-default-rtdb.firebaseio.com",
    projectId: "getgps1-7a59a",
    storageBucket: "getgps1-7a59a.appspot.com",
    messagingSenderId: "474416958762",
    appId: "1:474416958762:web:71142f0c9d15e4ac55e253"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  //get GPS 
  
//set GPS in database
  
  

    
 