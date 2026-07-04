class Customer {
    name;
    age;
    address;

    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

let customer1 = new Customer("Dew", 20, "sri lanka");
console.log(customer1);

//===================================================

let customer2 = { name: "Devindi", age: 20, address: "Colombo" };
console.log(customer2);
