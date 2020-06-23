class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('beep');
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

class Car extends Vehicle {
  drive(): void {
    console.log('driveeee');
  }
}

const car = new Car();
car.honk();
car.drive();
