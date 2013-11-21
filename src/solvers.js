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

  var solutionCount = 0;  // count for number of solutions
  var board = new Board({n : n});  // create new board  

  var place = function (row) {
    if(row === n){
      solutionCount++;
      return;
    }
    for ( var col = 0; col < n ; col++){
      board.rows()[row][col] = 1;
      if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(col)) {
        place(row+1);
      }
      board.rows()[row][col] = 0;
    }
  }

  place(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = undefined;  
  var count = 0;
  var board = new Board({n : n});  // create new board    
  
  

  var display = function(brd, cnt){
    console.log("Solution " + cnt + "\n");
    for (var i=0; i< n; i++)
      console.log (" " + brd.get(i).toString() +"\n");
  }

  var place = function (row) {
  //  console.log("in place(" + row +")");
    if(row === n){
      display(board, count);
      solution = board.rows();
      count++;
      return;
    }
    for ( var col = 0; col < n ; col++){
      //debugger
      board.rows()[row][col] = 1;
      //console.log("row = " + row + " col= " + col + "set to " + board.get(row)[col]);
      if (!board.hasAnyQueenConflictsOn(row,col)){
      //  console.log("calling place(" + (row+1) +")");
        place(row+1);
        if((row+1) === n)
          return;
      }
      board.rows()[row][col] = 0;
      // console.log("row = " + row + " col= " + col + "set to " + board.get(row)[col]);
    }
  }

  place(0);

  if (solution === undefined){
    solution = {};
    solution['n']=n;
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




