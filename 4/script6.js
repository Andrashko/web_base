function findPrimeNumbers(){
    let output = document.getElementById("output");
    const n = parseInt(document.getElementById("n").value);
    let primeCount = 0;
    let number = 1;

    output.innerHTML = "";
    while (primeCount < n){
        if (isPrime(number)){
            output.innerHTML += `<li> ${number} </li>`;
            primeCount++;
        }
        number++;
    }

    function isPrime(number){
        const EPSILON = 0.0000001;
        for (let div = 2; div<= Math.sqrt(number); div++){
            let d = number / div;
            let frac = d - Math.floor(d);
            if (frac < EPSILON)
                return false;
        }
        return true;
    }
}