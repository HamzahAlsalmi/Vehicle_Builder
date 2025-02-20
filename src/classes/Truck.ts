import Vehicle from "./Vehicle.js";
import Motorbike from "./Motorbike.js";
import Car from "./Car.js";
import Wheel from "./Wheel.js";
import AbleToTow from "../interfaces/AbleToTow.js";

class Truck extends Vehicle implements AbleToTow {
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    wheels: Wheel[] = []
  ) {
    super(vin, color, make, model, year, weight);
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    this.wheels =
      wheels.length === 4
        ? wheels
        : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  tow(vehicle: Vehicle): void {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(
        `${this.make} ${this.model} is towing ${vehicle.make} ${vehicle.model}`
      );
    } else {
      console.log(
        `${vehicle.make} ${vehicle.model} is too heavy to be towed by ${this.make} ${this.model}`
      );
    }
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
  }
}

export default Truck;
