function outerCounter(){
    let counter = 0;
    return function innerCounter(){
        counter++
        console.log(counter);
        
    }
}
let counter = outerCounter();
counter()
counter()
counter()
counter()
counter()