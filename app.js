// declarations

class Spaceship {
    constructor() {
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 0.7;
    }
}

class Alien {
    constructor() {
        this.hull = Math.floor(Math.random() * (6 - 3)) + 3;
        this.firepower = Math.floor(Math.random() * (4 - 2)) + 2;
        this.accuracy = (Math.floor(Math.random() * (8 - 6)) + 6) / 10;
    }
}

const canStrike = accuracy => {
    if (accuracy > 0.8) {
        
        return false;
    } else {
        
        return true;
    }
};
  
const mySpaceShip = new Spaceship();
const aliens = [null, null, null, null, null, null];
for (let i = 0; i < aliens.length; i++) {

    aliens[i] = new Alien();
}

let startGame = () => {


    let gameStart = prompt("do you want to start the game,please enter yes or no");
    if(gameStart.toLowerCase() == "yes"){
    
        let i = 0 
        let xp = Math.floor(Math.random() * (100 - 1)) + 1
        let hpA = aliens[i].hull
        let atkA = aliens[i].firepower
        let accA = aliens[i].accuracy

        while(i <= 6){
            
            if(i > 6){
                console.log("congrats! you win")
                break
            }
        
        
            
            if(canStrike(mySpaceShip.accuracy)){
                console.log(`A wild --Alien Lv.${i+1}--- appeared`)

                hpA -= mySpaceShip.firepower
                console.log(`your attack is ${mySpaceShip.firepower} and the Alein HP is ${hpA}`)

                if(hpA <= 0){

                    let afterBattle = prompt(`You defeated an Alein Lv.${i+1} Ship do you wish to continue or retreat`)
                    console.log(`you gain ${xp}xp`)
                    afterBattle.toLowerCase

                    if(afterBattle == "yes"){

                        console.log('you are safe in a galaxy not to far away')
                        break
                    
                    }
                }
            }
            
            if(canStrike(accA) && hpA >= 1){

                mySpaceShip.hull -= atkA
                console.log(`you've taken ${atkA} and your HP is ${mySpaceShip.hull}`)

            }

            else if(hpA >= 1){
                console.log("Alien Missed")
            }

            if(mySpaceShip.hull <= 0 ){
                console.log("GameOver ")
                break
            }
            
            else if(hpA <=0 ){
                i += 1
                hpA = aliens[i].hull
                atkA = aliens[i].firepower
                accA = aliens[i].accuracy
            }
        }
    
    }
        
    else{
        console.log("thank you see you later")
    }
 
}
  