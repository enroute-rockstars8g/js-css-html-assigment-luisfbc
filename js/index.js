function fiboSerie(){
    const fiboNumber = parseInt(document.getElementById("inputFibonacci").value);
    console.log(fiboNumber);
    const divFibo = document.getElementById("fiboContainer");
    let res = 0;
    let fiboStart = 0;
    let fiboEnd = 1;
    let strRes = "0, 1"
    for(let i = 2; i <= fiboNumber; i++){
        res = fiboStart + fiboEnd;

        console.log(fiboStart + ", " + fiboEnd + ", " + res);
        fiboStart = fiboEnd;
        fiboEnd = res; 
        strRes = strRes +", "+ res;
        // console.log(strRes);
    }
    divFibo.innerHTML = `El numero en la posición ${fiboNumber} es:\n${res}</br>
    La serie entera hasta el numero ${fiboNumber} es:\n${strRes}`
    
}

function factorial() {
    const factorial = parseInt(document.getElementById("inputFactorial").value);
    console.log(factorial);
    const divFactorial = document.getElementById("factorialContainer");
    let total = 1;
    let strFactorial = "";
    for (let i = 1; i <= factorial; i++) {
        strFactorial = strFactorial + " * " + i;
        total = total * i;
        console.log(strFactorial);
    }


    divFactorial.innerHTML = `El factorial de ${factorial}! es: ${total}`

}