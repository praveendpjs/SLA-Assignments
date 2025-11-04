class Student{
    constructor(name){
        this.name = name
    }
    display(){
        return this.name
    }
}

let std1 = new Student("Praveen");
let std2 = new Student("Charan");
let std3 = new Student("Bob");

console.log(std1.display());
console.log(std2.display());
console.log(std3.display());
