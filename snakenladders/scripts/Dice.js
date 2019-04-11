module.exports=class Dice{

    throw(){
        return Math.floor(Math.random() * (7 - 1)) + 1;
    }
}


