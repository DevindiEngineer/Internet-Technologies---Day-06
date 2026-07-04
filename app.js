/*
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

let customer2 = {
    first_name: "Devindi",
    country: "Colombo"
};
console.log(customer2);

//===================================================

let customer3 = {
    name: "Ruw",
    age: 21,
    address: "Kandy",
    salary:100000
};
console.log(customer3.name);
console.log(customer3.age);
console.log(customer3.address);
console.log(customer3.salary);

//====================================================

let shop = {
    name: "WIcky",
    items: ["soap", "Bottle", "Box"]
};
console.log(shop);
//or 
console.log(shop.name);
console.log(shop.items);
//item by
console.log(shop.items[0]);
console.log(shop.items[1]);
console.log(shop.items[2]);

//==============================================

let superM = {
    cudID : 1001,
    customer: {
        name: "kanthi",
        age: 60,
        city: "Colombo"
    }
}
console.log(superM.customer.name);

//===============================================

let superM = {
    cusID: 1001,
    items: [
        {
            id: 1,
            name: "milk",
            price: 1000
        },
        {
            id: 2,
            name: "Wine",
            price: 9000
        },
        {
            id: 3,
            name: "Rice",
            price: 740
        }
    ],
    customer: {
        name: "kanthi",
        age: 60,
        city: "Colombo"
    }
}

console.log(superM);

console.log(superM.cusID);
console.log(superM.items);
console.log(superM.customer);

console.log(superM.customer.name);
console.log(superM.customer.age);
console.log(superM.customer.city);

console.log(superM.items[0]);
console.log(superM.items[1]);
console.log(superM.items[2]);

console.log(superM.items[0].id);
console.log(superM.items[0].name);
console.log(superM.items[0].price);

console.log(superM.items[1].id);
console.log(superM.items[1].name);
console.log(superM.items[1].price);

console.log(superM.items[2].id);
console.log(superM.items[2].name);
console.log(superM.items[2].price);
//======================DOM Manipulation===========================
//Document object model

document.write("<h2>Welcome!</h2>");

console.log(document.title);

let heading=document.getElementById("heading");
heading.innerText="Devindi";
//console.log(heading);

//===========add a button============================================
function changeHeading() {
    heading.innerText="Devindi Wickramasinghe";
    console.log("Clicked");
    
}

//==============counter app===================================
let number = 0;
function plus() {
    heading.innerText="Devindi"+(++number);
    console.log("Clicked");
}
number=number-1;
function minus() {
     heading.innerText="Devindi"+(--number);
     console.log("Clicked");
}
//=================print input value in heading==========================================
function changeText() {
    heading.innerText=inputText.value;
    console.log("Clicked");
}*/
//======================Simple calculator exercise==================================
let output;
function addition() {
    output = Number(inputNum1.value) + Number(inputNum2.value);
    finalanswer.innerText = "Answer - " + output;
}
function substration() {
    output = Number(inputNum1.value) - Number(inputNum2.value);
    finalanswer.innerText = "Answer - " + output;
}
function multiplication() {
    output = Number(inputNum1.value) * Number(inputNum2.value);
    finalanswer.innerText = "Answer - " + output;
}
function devision() {
    output = Number(inputNum1.value) / Number(inputNum2.value);
    finalanswer.innerText = "Answer - " + output;
}








