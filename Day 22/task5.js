// Constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
}

// Add a method to all Student objects using prototype
Student.prototype.introduce = function () {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
};

// Example usage
const s1 = new Student("Arun", 20);
const s2 = new Student("Meera", 22);

console.log(s1.introduce()); 
console.log(s2.introduce());