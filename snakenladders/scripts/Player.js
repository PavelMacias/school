module.exports = class Player{
    constructor(){
        this.position = null; // posicion en el tablero en la que esta
        // lugar del juego en que se encuentra. Ejm: 1ro, 2do, 3ro...
    }
    setPosition(position){
        this.position = position;
    }
    getPosition(){
        return this.position
    }
    move(dice){
        this.position += dice;
    }
   
}