class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    discountedPrice(discountPercent) {
        if (discountPercent < 0 || discountPercent > 100) {
            console.log("The percent should be from 0% to 100%");
            
        }
        const discount = (this.price * discountPercent) / 100;
        let final =  this.price - discount;
        return final
    }
}

let product1 = new Product("Laptop", 2000)
let product2 = new Product("Mobile", 200)

console.log(product1.discountedPrice(10));
console.log(product2.discountedPrice(20));

