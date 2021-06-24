import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor () {
    this.companyName = faker.company.companyName();
    this.companyName = faker.company.catchPhrase();
    // we can't declare values inside locaiton directly 
    // we can declare value inside location object
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }

  }
}