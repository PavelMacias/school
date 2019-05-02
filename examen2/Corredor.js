export class Corredor{
    constructor(){
        this.name = ""
        this.position = null;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setPosition(position){
        this.position = position;
    }

    getPosition(){
        return this.position;
    }
    move(){
       let x = Math.floor(Math.random() * (10)) + 1;

       if(x == 1 || x == 2 ) return 1;
       else if(x == 3 || x == 4) return -1;
       else if(x >=5 && x <=8) return 2;
       else return -3;
    }
}