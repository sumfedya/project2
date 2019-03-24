class Human{
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth  = dateOfBirth;
    }
    displayInfo(){
        return `имя: ${this.name}, возраст: ${this.age}, дата рождения: ${this.dateOfBirth}`;
    }
}

class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department){
        super(name, age, dateOfBirth);   
        this.salary = salary;
        this.department = department;
    }
    displayInfo(){
        return `${super.displayInfo()}, оклад: ${this.salary}, подразделение: ${this.department}`;
    }
}

class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department, developers){
        super(name, age, dateOfBirth, salary, department);   
        this.developers = developers;
    }
    displayInfo(){
        return `${super.displayInfo()}, разработчики: ${this.developers}`;
    }
    addDeveloper(newDeveloper){
        this.developers.push(newDeveloper);
    }
    removeDeveloper(developer){                                                                     //Пусть входящий параметр - наименование разработчика (строка - это может быть ФИО, например)
        this.developers = this.developers.filter(developerItem =>developerItem.name !== developer); //отфильтруем массив разработчиков, оставив тех, чьё наименование не совпадает с введенным
    }
}

class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, department, manager){
        super(name, age, dateOfBirth, salary, department);   
        this.manager = manager;
    }
    displayInfo(){
        return `${super.displayInfo()}, менеджер: ${this.manager}`;
    }
    changeManager(newManager){
        this.manager = newManager;
    }
}