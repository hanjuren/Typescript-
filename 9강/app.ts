class Employee {
  fullName!: string;
  age!: number;
  job!: string;
  
  printEmployee = (): void => {
    console.log(`${this.fullName}의 나이는 ${this.age}살이고 직업은 ${this.job}입니다.`);
  }
}

let employee1 = new Employee();
employee1.fullName = '주련';
employee1.age = 25;
employee1.job = '학생';
employee1.printEmployee();