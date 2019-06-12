
<script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAr4z5kEkdMZDGMx7o1dbVjBC-zUdp1Baw",
    authDomain: "pidrone.firebaseapp.com",
    databaseURL: "https://pidrone.firebaseio.com",
    projectId: "pidrone",
    storageBucket: "pidrone.appspot.com",
    messagingSenderId: "314482239509"
  };
  firebase.initializeApp(config);
  
  
  const dbRef = firebase.database().ref();
  const userRef = dbRef.child('pidrone');
  
  const userListUI = document.getElementById("userList");

	usersRef.on("child_added", snap => {
	   let user = snap.val();
	   let $li = document.createElement("li");
	   $li.innerHTML = user.name;
	   $li.setAttribute("child-key", snap.key); 
	   $li.addEventListener("click", userClicked)
	   userListUI.append($li);
	});
	
	function userClicked(e) {

  var userID = e.target.getAttribute("child-key");

  const userRef = dbRef.child(userID);

  const userDetailUI = document.getElementById("userDetail");
  userDetailUI.innerHTML = ""

  userRef.on("child_added", snap => {
    var $p = document.createElement("p");
    $p.innerHTML = snap.key + " - " + snap.val()
    userDetailUI.append($p);
  });

}
  
</script>