$(document).ready(function(){

  $("#friend-button").click(function(){
  	var friend = randomFriend(friends);
  	console.log(friend);
    $("#friend-name").text(friend);
  });

});

var friends = [
	"Buggi",
	"Kanhaiya",
	"Baba",
	"Harshit",
	"Dipanker",
	"Amish",
	"Megha dee",
	"Bua Ji",
	"Bhai",
	"Bhawna dee",
	"Garima dee",
	"Nidhi dee",

];
function randomFriend(friends) {
	return friends[ Math.floor((Math.random() * friends.length)) ];
}
