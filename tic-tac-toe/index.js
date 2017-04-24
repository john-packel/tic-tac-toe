

var resetgame = function() {
  var player1 = [0,0,0,0,0,0,0,0,0];
  var player2 = [0,0,0,0,0,0,0,0,0];

}

var checkrows = function(playerboard) {
  var row1 = playerboard.slice(0,3);
  var row2
  var row3

  if(row1.reduce(function(acc, val) {
    return acc + val;
  }) === 3 || row2.reduce(function(acc, val) {
    return acc + val;
  }) === 3 || row3.reduce(function(acc, val) {
    return acc + val;
  }) === 3) {
    alert("Player 1 wins!");
  }
}

var checkForWin = function(player) {
  if(player === 1) {
    checkrows(player1);
    checkcolumns(player1);
    checkdiag(player1);
  }
}

// with legal move, change value of correct index to 1; change other player same index to 'x'
var player1Turn = function() {
    var play = // get button # from on-click input
    if(player1[play] === 'x' || player1[play] === 1) {
      alert("Illegal move");
    }
    else {player1[play] = 1}
  }
  checkForWin(1);
}
