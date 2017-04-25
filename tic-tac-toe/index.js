window.onload = function() {
  var p1 = [0,0,0,0,0,0,0,0,0];
  var p2 = [0,0,0,0,0,0,0,0,0];

  var player1 = true;
  var legal = true;

  canvasClick = function(boxNumber) {
    console.log('player 1 = ', player1);
    var checkLegal = function(array, boxNumber) {
      console.log('checkLegal - array = ', array);
      console.log('checkLegal - array index = ', boxNumber);
      if(array[boxNumber] === 0) {
        console.log('In checkLegal: legal move');
        return legal = true}
      else {
        alert("Illegal move! Try again, buddy.");
        console.log('illegal move');
        return legal = false;
      }
    };

    var winCheck = function(checkArr) {
      console.log('made it to winCheck. checkArr ', checkArr);

    };

    console.log('box clicked. # = ', boxNumber);
    var toggle = 'canvas' + boxNumber;
    console.log('toggle = ', toggle);
    var canvas = document.getElementById(toggle);
    var ctx = canvas.getContext('2d');

    if(player1 === true) {
      checkLegal(p1, boxNumber-1);
      console.log('legal = ', legal);
      if(legal) {
        ctx.fillStyle = "blue";
        p1[boxNumber-1] = 1;
        p2[boxNumber-1] = 'x';
      } else {return}

    } else {
      checkLegal(p2, boxNumber-1);
      if(legal) {
        console.log('about to paint player2 legal move');
        ctx.fillStyle = "green";
        p2[boxNumber-1] = .1;
        p1[boxNumber-1] = 'x';
      } else {return}
    }
    ctx.fillRect(0, 0, 150, 150);
    console.log('p1 = ', p1);
    console.log('p2 = ', p2, ' ...turn complete');
    var checkArr = player1 ? p1 : p2;
    winCheck(checkArr);
    player1 = !player1;
  }
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
    // if(player1[play] === 'x' || player1[play] === 1) {
    //   alert("Illegal move");
    // }
    // else {player1[play] = 1}
  // }
  checkForWin(1);
}
