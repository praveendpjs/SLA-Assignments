function weekDays(num) {
    switch (num) {
        case 1:
            console.log("its Sunday");
            break;
        case 2:
            console.log("its Monday");
            break;
        case 3:
            console.log("its Tuesday");
            break;
        case 4:
            console.log("its Wednesday");
            break;
        case 5:
            console.log("its Thursday");
            break;
        case 6:
            console.log("its Friday");
            break;
        case 7:
            console.log("its Saturday");
            break;

        default:
            console.log("Not a Valid day");
            
            break;
    }
}
console.log(weekDays(5));
