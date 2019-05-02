import {Corredor} from './Corredor.js';
import {Pista} from './Pista.js';

const corredor1 = new Corredor();
const corredor2 = new Corredor();
const pista = new Pista();
const log = console.log;

pista.setLong(100);
corredor1.setName("Corredor 1");
corredor2.setName("Corredor 2");
let tmp = 1;


var button2 = document.querySelector('#button');
button2.addEventListener('click',function(){
    do{
        log("---------------------------------------------------------------------------------");
        let av = corredor1.move();
        log(corredor1.getName() + " Posición: " + corredor1.getPosition() + " avanza: " + av);
        corredor1.setPosition(av + corredor1.getPosition());
        log("Nueva Posicion: " + corredor1.getPosition());
        log("**********************************************************************************");
        av = corredor2.move();
        log(corredor2.getName() + " Posición: " + corredor2.getPosition() + " avanza: " + av);
        corredor2.setPosition(av + corredor2.getPosition());
        log("Nueva Posicion: " + corredor2.getPosition());
        log("---------------------------------------------------------------------------------");
        if(corredor1.getPosition() >= 100){
            tmp = 0;
        } 
        else if(corredor2.getPosition() >= 100){
            tmp = -1;
        }
        else if(corredor1.getPosition() >= 100 && corredor2.getPosition() >= 100){
            tmp = -2

        }
    }while( tmp == 1)
    switch (tmp) {
        case 0:
        log("Gana corredor 1")
            break;
        case -1:
        log("Gana corredor 2")
                break;
        case -2:
        log("Empate")
                break;
    }

});//close clienr()
