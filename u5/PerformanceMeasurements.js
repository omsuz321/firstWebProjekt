
function createElement(element = "div"){ //returns always a new documetn element. It also has a default value "div"
    return document.createElement(element);
}

function testTime(contentProperty, input = "<div>this is the <strong>default</strong> input</div>", parentNode = document.body) {
    var newElement = document.createElement('div').appendChild(document.createElement('div'));
    //document.querySelector(parentNode).appendChild(newElement);
    var t0 = performance.now();
    newElement[contentProperty] = input;

    //parentNode.appendChild(newElement);
    return performance.now() - t0;; // elapsedTime
}


//console.log(" innerHTML: " + testTime("innerHTML"));
// console.log("innerTextz ${testTime(innerText)}");
// console.log("textContent ${testTime(textContent)}");
// console.log("outerHTML ${testTime(outerHTML)}");




