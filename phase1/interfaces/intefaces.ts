interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civiv',
  year: 2000,
  broken: true,
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
  console.log(`Name : ${vehicle.name}`);
  console.log(`Year : ${vehicle.year}`);
  console.log(`Broken : ${vehicle.broken}`);
};

printVehicle(oldCivic);
