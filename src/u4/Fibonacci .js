function fibonacciBigInt(number) {
    let n1 = 0n, n2 = 1n, nextTerm = 0n;



    for (let i = 1n; i <= number; i++) {
        
            console.log(n1.toString() + " " + i.toString()); // prints the fibonacci and the posiion its posotion
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        
    }
}

function fibonacci(number){
    var n1 = 0, n2 = 1, nextTerm = 0;

        for (var i = 1; i <= number; i++) {
            if(nextTerm < Number.MAX_VALUE ){
                console.log(n1 + " " + i);// prints the fibonacci and the posiion its posotion
                nextTerm = n1 + n2
                n1 = n2;
                n2 = nextTerm;
            }
         }   
    
}
fibonacci(200)
fibonacciBigInt(2000n);
