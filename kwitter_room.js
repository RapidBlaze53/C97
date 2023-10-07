// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDwSsy4pwUMlROP-sAIFEWcW6Nd6tyy7xg",
      authDomain: "socialwebsite-616eb.firebaseapp.com",
      databaseURL: "https://socialwebsite-616eb-default-rtdb.firebaseio.com",
      projectId: "socialwebsite-616eb",
      storageBucket: "socialwebsite-616eb.appspot.com",
      messagingSenderId: "58479220655",
      appId: "1:58479220655:web:e328883f5e32549d93015a"
    };
//ADD YOUR FIREBASE LINKS HERE
//part 3
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
//part 2
function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
//part 4
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}