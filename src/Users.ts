import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}

// Explanaiton:
  // => So faker lib has some issues there lat and lng are string vars
  // they should be correcting it but for now we can use traditinal JS
  // mthods to parse string as float, the number that has decimal value to attach it 