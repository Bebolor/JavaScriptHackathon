//41. Tic Tac Toe
const ticTacToe = array => {

    for(let i = 0; i < array.length; i++)
    {
    
        if ((array[i][0] === array[i][1] && array[i][1] === array[i][2])) {
            return `Winner: ${array[i][0]}`            
        } 
        
        else if (array[0][i] === array[1][i] && array[1][i] === array[2][i]) {
            return `Winner: ${array[0][i]}`
        } 
        
        else if ((array[0][0] === array[1][1] && array[1][1] === array[2][2]) || (array[0][2] === array[1][1] && array[1][1] === array[2][0])) {
            return `Winner: ${array[1][1]}`
        } 
    }   
    return "Draw. Play again"
    }  

ticTacToe([
    ["X", "O", "X"],
    ["O", "X",  "O"],
    ["O", "X",  "X"]
]) // "Winner: X"

ticTacToe([
    ["O", "O", "O"],
    ["O", "X", "X"],
    ["E", "X", "X"]
]) // "Winner: O"

ticTacToe([
    ["X", "X", "O"],
    ["O", "O", "X"],
    ["X", "X", "O"]
]) // "Draw. Play again"