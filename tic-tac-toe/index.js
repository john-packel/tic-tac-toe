window.onload = function() {
  var p1 = [0,0,0,0,0,0,0,0,0];
  var p2 = [0,0,0,0,0,0,0,0,0];

  var player1 = true;
  var legal = true;
  var plays = 0;

  canvasClick = function(boxNumber) {
    console.log('player 1 = ', player1);
    // console.log('plays = ', plays);
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
      console.log('top row = ', checkArr.slice(0, 3));
      console.log('top row total = ', checkArr.slice(0, 3).reduce(function(acc, val) {
        return acc + val;
      }));
      // check rows
      for(var r = 0; r < 7; r+=3) {
        console.log('r = ', r);
      if(checkArr.slice(r, r + 3).reduce(function(acc, val) {
        return acc + val;
      }) === 3) {
        console.log('player 1 wins!')
        } else if(checkArr.slice(r, r + 3).reduce(function(acc, val) {
          return acc + val;}) === 30) {
          console.log('player 2 wins!')
        }
      }

      // check columns
      for(var r = 0; r < 3; r+=1) {
        console.log('r = ', r);
        console.log('col 1 = ', [checkArr[0], checkArr[3], checkArr[6]]);
      if([checkArr[r], checkArr[r + 3], checkArr[r + 6]].reduce(function(acc, val) {
        return acc + val;
      }) === 3) {
        console.log('player 1 wins!')
        } else if([checkArr[r], checkArr[r + 3], checkArr[r + 6]].reduce(function(acc, val) {
          return acc + val;
        }) === 30) {
          console.log('player 2 wins!')
        }
      }
      // check diagonals // 0,1,2,
                         // 3,4,5,
                         // 6,7,8
      if([checkArr[0], checkArr[4], checkArr[8]].reduce(function(acc, val) {
        return acc + val;}) === 3 || [checkArr[2], checkArr[4], checkArr[6]].reduce(function(acc, val) {
        return acc + val;}) === 3) {
      console.log('player 1 wins!') } else

      if([checkArr[0], checkArr[4], checkArr[8]].reduce(function(acc, val) {
        return acc + val;}) === 30 || [checkArr[2], checkArr[4], checkArr[6]].reduce(function(acc, val) {
        return acc + val;}) === 30) {
        console.log('player 2 wins!')
      }
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
        p2[boxNumber-1] = 10;
        p1[boxNumber-1] = 'x';
      } else {return}
    }
    ctx.fillRect(0, 0, 150, 150);
    console.log('p1 = ', p1);
    console.log('p2 = ', p2, ' ...turn complete');
    var checkArr = player1 ? p1 : p2;
    if(plays > 2) {
      winCheck(checkArr);
    }
    player1 = !player1;
    plays++;
    if(plays === 9) {
      console.log('It\'s a draw! Click to play again.');
    }
    console.log('plays = ', plays);
  }
}
