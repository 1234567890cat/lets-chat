var firebaseConfig = {
      apiKey: "AIzaSyBIE-ATVRnEukNGzK5I9I0zid_IAaLY5DA",
      authDomain: "kwitter-6249c.firebaseapp.com",
      databaseURL: "https://kwitter-6249c-default-rtdb.firebaseio.com",
      projectId: "kwitter-6249c",
      storageBucket: "kwitter-6249c.appspot.com",
      messagingSenderId: "539235407628",
      appId: "1:539235407628:web:11b41578fe7de4387a5b29"
    };
     firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
      {
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            });
            document.getElementById("msg").value = "";
      }
