// Importing Vehicle and Wheel classes
import Vehicle from "./Vehicle.js";
import Wheel from "./Wheel.js";

// Car class that extends Vehicle class
class Car extends Vehicle {
  topSpeed: number;
  wheels: Wheel[];

  // Constructor for the Car class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = []
  ) {
    // Call the constructor of the parent class, Vehicle
    super(vin, color, make, model, year, weight);

    // Initialize properties of the Car class
    this.topSpeed = topSpeed;

    // Assign wheels: if less than 4 are provided, create 4 new default wheels
    this.wheels =
      wheels.length === 4
        ? wheels
        : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the Car class
    console.log(`Top Speed: ${this.topSpeed} mph`);

    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].diameterSize} inch with a ${this.wheels[0].tireBrandName} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].diameterSize} inch with a ${this.wheels[1].tireBrandName} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].diameterSize} inch with a ${this.wheels[2].tireBrandName} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].diameterSize} inch with a ${this.wheels[3].tireBrandName} tire`
    );
  }
}

// Export the Car class as the default export
export default Car;
