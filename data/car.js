class Car {
  #brand;
  #model;
  speed = 0;
  #isTrunkOpen = false;
  constructor(carDetails){
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }


  displayInfo(){
    console.log(this.#brand, " ", this.#model)
    console.log("Speed: ", this.speed, " km/h");
  }

  go(){
    if(!this.#isTrunkOpen){


      if(this.speed != 195){
        this.speed+= 5;
      }
    }


  }

  brake(){
    if(this.speed != 0){
      this.speed-= 5;
    }
  }

  openTrunk(){
    this.#isTrunkOpen = true;
  }

  closeTrunk(){
    this.#isTrunkOpen = false;
  }

}

class RaceCar extends Car {
  #acceleration;

  constructor(carDetails){
    super(carDetails);
    this.#acceleration = carDetails.acceleration;
  }

  go(){
      if(this.speed != 295){
        this.speed+= this.#acceleration;
      }
  }
  openTrunk(){
    return '';
  }

  closeTrunk(){
    return '';
  }
}

export const car = [{
  brand: 'Toyota',
  model: 'Corolla'
}, {
  brand: 'Tesla',
  model: 'Model 3'
}, {
  brand: 'McLaren', 
  model: 'F1',
  acceleration: 20,
  type: 'racecar'
}].map((carDetails) => {
  if(carDetails.type == 'racecar'){
    return new RaceCar(carDetails);
  }
  return new Car(carDetails);
});


