function addChild(parent, elementType) {
    return parent.appendChild(document.createElement(elementType));
}

function insertContent(element, contentProperty, content) {
    element[contentProperty] = content;
}
// Gets the container with the unsorted items and sorts them according to the rule set
function sortSet(container, ruleSet) {
    // Implement sorting logic here
}


// Inserts the rule to the rule Container
function addRule(ruleContainer, rule) {
    var child = addChild(ruleContainer, "li");
    insertContent(child, "innerText", rule);
}

//takes a array like collection and puts the innerText of the childern in a array and returns it. because a rule is already an arry, an 3d array is the result
function getInnerText(parent){
    var innerChild = parent.children;
    var innerTextOfChild = [];
    var  resultArray, resultArray ;

    for(var i = 0; i < innerChild.length; i++){ 
        var s = innerChild[i].innerText;

        // Step 1: Extract the string from the array
        var stringWithoutOuterBrackets = s.substring(1, s.length - 1);
        
        // Step 2: Remove the outer brackets and split into an array
        var innerArray = stringWithoutOuterBrackets.split(',');
        
        // Step 3: Process each element to remove inner brackets
        var resultArray = innerArray.map(element => element.trim().replace(/[[\]]/g, ''));
        
        innerTextOfChild[i] = resultArray;
        
    }
    return innerTextOfChild;
}



 
