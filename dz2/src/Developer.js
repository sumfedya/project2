export class Developer{
    constructor(age, department){
        this.age = age;
        this.department = department;
    }
    displayInfo(){
        console.log(`${this.age} лет, ${this.department}`);
    }
}

