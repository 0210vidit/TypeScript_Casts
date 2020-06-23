interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is ${this.name}`;
  },
  owner: 'Shah',
};

const drinks = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has sugar ${this.sugar}`;
  },
};

//Bad way!

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name : ${vehicle.name}`);
//   console.log(`Year : ${vehicle.year}`);
//   console.log(`Broken : ${vehicle.broken}`);
// };

const printVehicle = (vehicle: Vehicle): void => {
  // console.log(`Name : ${vehicle.name}`);
  // console.log(`Year : ${vehicle.year}`);
  // console.log(`Broken : ${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
