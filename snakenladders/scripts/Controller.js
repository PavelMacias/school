const Board = require('./Board');
const Dice = require('./Dice');
const Player = require('./Player');

const p1 = new Player();
const p2 = new player();
const dice = new Dice();
const board =new Board();

const log = console.log;

board.start();
log("---------begin----------------");
    log("Turn " + 0 + ", Player 1: " + p1.getPosition()
    + ", Player 2: " + p2.getPosition());
    
log("------------------------------");
    let x = dice.throw();
    let y = dice.throw();
    p1.throw(x);
    p2.throw(y);

    log("Turn " + 0 + ", Player 1: " + p1.getPosition()
    + ", Player 2: " + p2.getPosition());


log("2------------------------------");
    let x = dice.throw();
    let y = dice.throw();
    p1.throw(x);
    p2.throw(y);

    log("Turn " + 0 + ", Player 1: " + p1.getPosition()
    + ", Player 2: " + p2.getPosition());


log("------------------------------");
    let x = dice.throw();
    let y = dice.throw();
    p1.throw(x);
    p2.throw(y);

    log("Turn " + 0 + ", Player 1: " + p1.getPosition()
    + ", Player 2: " + p2.getPosition());

log("------------------------------");

    let x = dice.throw();
    let y = dice.throw();
    p1.throw(x);
    p2.throw(y);

    log("Turn " + 0 + ", Player 1: " + p1.getPosition()
    + ", Player 2: " + p2.getPosition());

log("------------------------------");

    x = dice.throw();
    board.play(board.player1,x);
    y = dice.throw(); 
    board.play(board.player2,y);

    log("Turn: " + 5 +", Dice1: " + x + ", Player1: " + board.player1.position + 
    ", Dice1: " + y + ", Player2: " + board.player2.position);

log("------------------------------");

    x = dice.throw();
    board.play(board.player1,x);
    y = dice.throw(); 
    board.play(board.player2,y);

    log("Turn: " + 6 +", Dice1: " + x + ", Player1: " + board.player1.position + 
    ", Dice1: " + y + ", Player2: " + board.player2.position);


log("------------------------------");

    x = dice.throw();
    board.play(board.player1,x);
    y = dice.throw(); 
    board.play(board.player2,y);

    log("Turn: " + 7 +", Dice1: " + x + ", Player1: " + board.player1.position + 
    ", Dice1: " + y + ", Player2: " + board.player2.position);
log("------------------------------");

    x = dice.throw();
    board.play(board.player1,x);
    y = dice.throw(); 
    board.play(board.player2,y);

    log("Turn: " + 8 +", Dice1: " + x + ", Player1: " + board.player1.position + 
    ", Dice1: " + y + ", Player2: " + board.player2.position);

log("------------------------------");

    x = dice.throw();
    board.play(board.player1,x);
    y = dice.throw(); 
    board.play(board.player2,y);

    log("Turn: " + 9 +", Dice1: " + x + ", Player1: " + board.player1.position + 
    ", Dice1: " + y + ", Player2: " + board.player2.position);

log("------------------------------");
    x = dice.throw();
    board.play(board.player1,x);
    y = dice.throw(); 
    board.play(board.player2,y);

    log("Turn: " + 10 +", Dice1: " + x + ", Player1: " + board.player1.position + 
    ", Dice1: " + y + ", Player2: " + board.player2.position);
    
log("------------------------------");
    x = dice.throw();
    board.play(board.player1,x);
    y = dice.throw(); 
    board.play(board.player2,y);

    log("Turn: " + 11 +", Dice1: " + x + ", Player1: " + board.player1.position + 
    ", Dice1: " + y + ", Player2: " + board.player2.position);
log("------------END---------------");


