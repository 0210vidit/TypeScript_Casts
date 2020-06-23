class Vehicle {
  color: string = '';

  constructor(color: string) {}

  public drive(): void {
    console.log('chugga chugga');
  }
  public honk(): void {
    console.log('beep');
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

class Car extends Vehicle {
  private ddrive(): void {
    console.log('driveeee');
  }
  startDrivingProcess(): void {
    this.ddrive();
  }
}

const car = new Car();
car.honk();
// car.drive();

car.startDrivingProcess();
