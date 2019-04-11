const Player = require('./Player');
const Action = require('./Action');

module.exports = class Board{
    constructor(){
        this.casilla = [];
        this.action = new Action();
        this.status = false;
        this.lastWiner = null;
    }
   /* start(){
        this.player1.setPosition(0);
        this.player2.setPosition(0);
        this.status = true;
    }*/
    play(player,dice){
        if(this.status){
            player.movr(dice)
            this.action.snake(player.position,player);
            this.action.ledder(player.position,player);
            this.winer(player);
        }
    }
    winer(player){
        if(player.getPosition() == 100){
            console.log("Nice You win");
            this.lastWiner = player
        }
    }
}