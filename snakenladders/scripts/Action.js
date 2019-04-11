module.exports = class Action{

    snake(position,player){
        switch (position) {
            case 32:
                player.setPosition(10);
                break;
            case 36:
                player.setPosition(6);
                break;
            case 48:
                player.setPosition(26);
                break;
            case 62:
                player.setPosition(18);
                break;
            case 88:
                player.setPosition(24);
                break;
            case 95:
                player.setPosition(56);
                break;
            case 97:
                player.setPosition(78);
                break;
        }
    }

    ledder(position,player){
        switch (position) {
            case 1:
                player.setPosition(38);
                break;
            case 4:
                player.setPosition(14);
                break;
            case 8:
                player.setPosition(10);
                break;
            case 21:
                player.setPosition(42);
                break;
            case 28:
                player.setPosition(76);
                break;
            case 50:
                player.setPosition(67);
                break;
            case 80:
                player.setPosition(99);
                break;
        }
    }

    move(player,dice){
        player.setPosition(player.getPosition()+dice);
        this.limit(player,dice);
    }
  
    limit(player,dice){
        let newPosition = player.getPosition() + dice;
        if(newPosition > 100){
        let res = newPosition - 100;
        res = 100 - res;
        player.setPosition(res);
        console.log("ROJO()()()()())()WOW|||||!!!!!");
        }
    }
    
}