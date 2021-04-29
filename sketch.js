var database,position;
var gameState=0
var playerCount,backgroundimage
var form,player,game,canvas
function setup(){
    database=firebase.database()
    createCanvas(500,500);
    game=new Game()
    game.getState()
    game.start()


}

function draw(){
   
}


