import { User } from "./user";

export const USER_DATA: User[] = [{
  firstName: "Bill",
  lastName: "Gates",
  dob: new Date('Dec 16, 1965'),
  company: 'Microsoft',
  income: 50000,
  isWorking: true,
  image: "assets/images/bill.jpg",
  vote: 120
}, {
  firstName: "Steve",
  lastName: "Jobs",
  dob: new Date('Jan 1, 1965'),
  company: 'MicrosoftApple',
  income: 0,
  isWorking: false,
  image: "assets/images/steve.png",
  vote: 100
},{
  firstName: "Tim B.",
  lastName: "Lee",
  dob: new Date('Feb 6, 1965'),
  company: 'World Wide Web',
  income: 30000,
  isWorking: true,
  image: "assets/images/tim.jpg",
  vote: 180
}]
