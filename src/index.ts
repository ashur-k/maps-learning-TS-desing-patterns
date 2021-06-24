// when we are exporting some thing file from using just the export keyword  by itslef
// we will receive taht in another file by placing the word inside the set of cutly braces 
// we do this to safely export multiple different var from this file

// so in react world we do this export using default keyword

import { User } from './User';
import { Company } from './Company';

// creating instance of class User
// console looging class
const user = new User();
console.log(user);

// creating instance of class Company
// console looging class
const company = new Company();
console.log(company);

google
