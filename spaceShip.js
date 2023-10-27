// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

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

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
const ship1 = new SpaceShip('Nasa',5000 )
const ship2 = new SpaceShip('SpaceX',6000 )
const ship3 = new SpaceShip('ISRO',7000 )
ship1.accelerate()
ship2.accelerate()
ship3.accelerate()