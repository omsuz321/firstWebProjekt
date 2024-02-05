
function createElement(element = "div"){ //returns always a new documetn element. It also has a default value "div"
    return document.createElement(element);
}

function testTime(contentProperty, input = "<div>this is the <strong>default</strong> input</div>", n = 10000) {
    var t0, t1, diff = 0;
    var outerDiv;
    var innerDiv;
    for(var i = 0; i < n; i++){ //crates always a new perent and child
        outerDiv = document.createElement('div');//crates always a new perent 
        innerDiv = document.createElement('div');// and child to parent
        outerDiv.appendChild(innerDiv);
        t0  = performance.now();
        innerDiv[contentProperty] = input;
        t1  = performance.now();
        diff +=  (t1 - t0); 
    }

    return (diff / n); // elapsedTime
}



//console.log(" innerHTML: " + testTime("innerHTML"));
// console.log("innerTextz ${testTime(innerText)}");
// console.log("textContent ${testTime(textContent)}");
// console.log("outerHTML ${testTime(outerHTML)}");

//export {createElement}; 
