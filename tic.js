const gameBoard = (() => {
    const gameboard =() => Array(3).fill().map(()=>Array(3).fill("X"));
    
    return {
        gameboard,
    };
  })();
//


const displayController = (() => {
    const displayer = "" ;
    
    return {
        displayer,
    };
  })();


const Player = (name) => {
    const getName  = () => name;
    const choose = () => {
      // uh oh
    };
    
    return { getName,choose};
  };

function display(){
    let gb=document.querySelector(".gameBoard");
    let matrix= gameBoard.gameboard();
    
    for(var i = 0; i < matrix.length; i++) {
        var row = matrix[i];
        var input=document.createElement("div");
        for(var j = 0; j < row.length; j++) {
           let choice=document.createElement("div");
           choice.innerHTML=row[j];
           input.appendChild(choice);
        }
        gb.appendChild(input); 
    }
    
}
display();