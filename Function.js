let itemName = localStorage.getItem("number");
console.log(itemName);

function pageRedirect() {
  window.location.href = "index.html";
}
function Checking(){
  var guess = document.getElementById('number');
  var random_num= document.getElementById("r_number").value;
  var random_number = itemName.toString();
  var guessed_number = random_num.toString();
  if(random_num == ""){
    alert("Enter a number");
  }
  else if (guessed_number.length < 6) {
      guess.innerHTML = ("Enter a 6 digit number");
  }
  else{                                                                                   // Finding the number of matches
    var counter = 0, find = -1;
    for(var i = 0; i < random_number.length; i++){
      find = guessed_number.indexOf(random_number.charAt(i));
      if(find > -1){
        counter++;
        guessed_number = guessed_number.substr(0, find) + guessed_number.substr(find + 1);
      }
    }
    guess.innerHTML = (counter +" Correct Guesses");
  }
}
