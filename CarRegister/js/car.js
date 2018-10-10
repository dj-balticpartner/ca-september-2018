class Car {
    constructor(_car) {
        this.id = this.getNewID();
        this.brand = _car.brand;
        this.model = _car.model;
        this.engine = _car.engine;
        this.price = _car.price;
        this.fuel = _car.fuel;
        this.used = _car.used;
        this.mainImgUrl = _car.mainImgUrl;
    }
    
    printInfo() {
        console.log(`This is ${this.brand} ${this.model} ${this.engine} costs: ${this.price} EUR.`);
    }

    getNewID(){
        let newID = 0;
        for(let i = 1; i < 10000000000; i++){
    
            let existingCar = CARS.find(function(x) {            
                return x.id === i;
            });
            
            if(typeof existingCar === 'undefined'){
                //found
                newID = i;
                break;
            }
        }
        return newID;
    }
    
}

class Jeep extends Car {
    constructor(_car) {
      super(_car); // call the super class constructor and pass in the name parameter
    }
}