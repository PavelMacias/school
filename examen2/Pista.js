export class Pista{
    constructor(){
        this.long = [];
    }
    setLong(num){
        for(let i = 0; i <= num; i++){  
            this.long.push(i);
        }
    }
    get(){
        return this.long;
    }
}
