/*           _                    
   ___  ___ | |_   _____ _ __ ___ 
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n){
  var solution = undefined;

  var board = new Board({n:n});
  for (var r = 0; r < n; r++) {
    for (var c = 0; c < n; c++) {
      board.rows()[r][c] = 1;
      if (board.hasRowConflictAt(r) ||board.hasColConflictAt(c)) {
        board.rows()[r][c] = 0;
      }
    }
  }
  solution = board.rows();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;

};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){

  var solutionCount = 0;  // count for number of solutions
  var board = new Board({n : n});  // create new board  

  var place = function (row) {
    if(row === n){
      solutionCount++;
      return;
    }
    for ( var col = 0; col < n ; col++){
      // board.rows()[row][col] = 1;
      board.togglePiece(row, col);
      if (!board.hasColConflictAt(col)) {
        place(row+1);
      }
      board.togglePiece(row, col);
      // board.rows()[row][col] = 0;
    }
  }

  place(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = undefined;  
  var board = new Board({n: n});

  var place = function (row) {
    if(row === n){
      solution = board.rows();
      return;
    }
    for ( var col = 0; col < n ; col++){
      board.rows()[row][col] = 1;
      if (!board.hasAnyQueenConflictsOn(row,col)){
        place(row+1);
        if (solution) {
          // debugger;
          return;
        }
      }
      board.rows()[row][col] = 0;
    }
  }

  place(0);

  if (solution === undefined) {
    solution = new Board({n: n}).rows();
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;

};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = 0;  // count for number of solutions
  var board = new Board({n : n});  // create new board  

  var place = function (row) {
    if(row === n){
      solutionCount++;
      return;
    }
    for ( var col = 0; col < n ; col++){
      board.rows()[row][col] = 1;
      if (!board.hasAnyQueenConflictsOn(row,col)){
        place(row+1);
      }
      board.rows()[row][col] = 0;
    }
  }

  place(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};




