var Person = {

};

function Person(name){
    this.name  = name;
    this.cars = [];
}
var Car = {

}

function Car(name){
    this.name = name;
    this.count = 0;
};
function addCar(car, person){
    if(!person.cars.includes(car)){ // looks if the car is already owned by the person
        car.count++;
        person.cars[person.cars.length] = car; //appends  a new car
    }
}

function conflict(car){
    return car.count <2;
}


