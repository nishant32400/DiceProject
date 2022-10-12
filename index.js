window.onload = choosePic;
var myPic = new Array('images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png');
function choosePic(){
  var randomNum = Math.floor(Math.random() * myPic.length);
  document.getElementById('picture').src = myPic[randomNum];
  var randomNum1 = Math.floor(Math.random()* myPic.length);
  document.getElementById('picture1').src = myPic[randomNum1];
  if(randomNum == randomNum1){
    document.getElementById('p1').innerHTML = 'DRAW';
  }
  else if(randomNum > randomNum1){
    document.getElementById('p1').innerHTML = 'PLAYER 1 WINS';
  }
  else{
    document.getElementById('p1').innerHTML = 'PLAYER 2 WINS';
  }
}
