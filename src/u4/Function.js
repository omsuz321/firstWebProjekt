function identity(a){ 
    //console.log(a);
    return a;
}


function identity_function(a){
    //console.log(identity(a));
    return identity(a);
}

function add(a, b){
    return a + b;
}

function mul(a, b){
    return a * b;
}

function addf(a){
    return function(b){return a + b;}; // return an annnonymous function
}

function applyf(fct){ // returns somthing where i can execute the function wiht recusion
    return function(a){
        return function(b){
            return fct(a, b);
        };
    };
}



 
