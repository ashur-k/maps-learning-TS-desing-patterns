import faker from 'faker';

export class User {
  //class properties
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  //constructor start
  constructor() {
    this.name = faker.name.firstName();
    // we can't declare values inside locaiton directly 
    // we can declare value inside location object
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }  //constructor end

  markerContent(): string{
    return `User Name: ${this.name}`
  }

}

// Explanaiton:
  // => So faker lib has some issues there lat and lng are string vars
  // they should be correcting it but for now we can use traditinal JS
  // mthods to parse string as float, the number that has decimal value to attach it 