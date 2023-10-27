// 1. Create attack function below.  This will take the following parameters:
// attackingPlayer, defendingPlayer, baseDamage, variableDamage


// const attack = function(attackingPlayer,defendingPlayer,baseDamage,variableDamage){
//   let randomdamage = Math.floor(Math.random() * (variableDamage + 1))
//   let totaldamage = baseDamage + randomdamage
//   defendingPlayer.health -= totaldamage
//   return (`${attackingPlayer.name} hits ${defendingPlayer.name} for ${totaldamage} damage`)

// }


// 2. Create player1 and player2 objects below
// Each should have a name property of your choosing, and health property equal to 10
const player1 = {
  health: 10,
  name : 'Merlin'
}
const player2 = {
  health:10,
  name:'Sophan'
}
console.log(attack(player1,player2,1,4))

//3. Refactor attack function to an arrow function.  Comment out function above.
const attack = (attackingPlayer,defendingPlayer,baseDamage,variableDamage) => {
  let randomdamage = Math.floor(Math.random() * (variableDamage + 1))
  let totaldamage = baseDamage + randomdamage
  defendingPlayer.health -= totaldamage
  return (`${attackingPlayer.name} hits ${defendingPlayer.name} for ${totaldamage} damage`)

}


// DO NOT MODIFY THE CODE BELOW THIS LINE
// Set attacker and defender.  Reverse roles each iteration
let attackOrder = [player1, player2];

// Everything related to preventInfiniteLoop would not generally be necessary, just adding to
// safeguard students from accidentally creating an infinite loop & crashing browser
let preventInfiniteLoop = 100;
while (player1.health >= 1 && player2.health >= 1 && preventInfiniteLoop > 0) {
  const [attackingPlayer, defendingPlayer] = attackOrder;
  console.log(attack(attackingPlayer, defendingPlayer, 1, 2));
  attackOrder = attackOrder.reverse();

  preventInfiniteLoop--;
}
const eliminatedPlayer = player1.health <= 0 ? player1 : player2;
console.log(`${eliminatedPlayer.name} has been eliminated!`);



class SpaceShip {
  constructor(name , topSpeed){
    this.name = name
    this.topSpeed = topSpeed
  }

  accelerate(){
    const {name , topSpeed} = this
    console.log(`${name} moving to ${topSpeed}`)
  }
}

const ship1 = new SpaceShip('Nasa',5000 )
const ship2 = new SpaceShip('SpaceX',6000 )
const ship3 = new SpaceShip('ISRO',7000 )
ship1.accelerate()
ship2.accelerate()
ship3.accelerate()