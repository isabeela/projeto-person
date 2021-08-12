export class Person {
  firstname: string;
  middlename: string;
  lastname: string;

  age: number;

  constructor(fname: string, mname: string, lname: string, year: number) {
    this.firstname = fname;
    this.middlename = mname;
    this.lastname = lname;
    this.age = year;
  }

  getFullName() {
    return `Primeiro nome: ${this.firstname}<br>
    Nome do meio: ${this.middlename} <br>
    Último nome: ${this.lastname}`;
  }

  getBirthdayYear() {
    return `O ano de nascimento é  ${2021 - this.age}`;
  }
}
