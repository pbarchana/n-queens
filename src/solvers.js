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
  // var board = new Board({n:n});

  // for (var i = 0; i < n; i++) {
  //   for (var j = 0; j < n; j++) {
  //     var newBoard = new Board({n:n});
  //     newBoard.rows()[i][j] = 1;
  //     for (var r = 0; r < n; r++) {
  //       for (var c = 0; c < n; c++) {
  //         newBoard.rows()[r][c] = 1;
  //         if(newBoard.hasRowConflictAt(r) || newBoard.hasColConflictAt(c)) {
  //           newBoard.rows()[r][c] = 0;
  //         }
  //       }
  //     }
  //     solution.push(newBoard.rows());
  //   }
  // }

  // var len = solution.length;
  // if (len > 1) {
  //   solution = solution.splice(0, len/2);
  //   console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  //   return solution;
  // }
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;

  var board = new Board({n:n});
  for (var r = 0; r < n; r++) {
    for (var c = 0; c < n; c++) {
      board.rows()[r][c] = 1;
      if (board.hasRowConflictAt(r) || board.hasColConflictAt(c)) {
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
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;

  //   for (j)
  // var board = new Board;
  // insert 1 at [0][j]
  // board.findNRooksSolution()
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
