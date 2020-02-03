function operator(a,b, operator){

    if(operator == '+'){
        return a + b;
    }else if(operator == '-'){
        return a - b;
    }else if(operator == '*'){
        return a * b;
    }else if(operator == '/'){
        return a / b;
    }else{
        console.log('operator is wrong');
    }
}

console.log(operator(3,4, '-'));
console.log(operator(3,4, '+'));
console.log(operator(3,4, '/'));
console.log(operator(3,4, '*'));

