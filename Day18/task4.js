function gradingSystem(marks){
    if(marks >= 90){
        return 'Grade A'
    } else if(marks >= 80){
        return 'Grade B'
    }else if(marks >= 70){
        return 'Grade C'
    }else{
        return 'Grade F'
    }
}
console.log(gradingSystem(75));

