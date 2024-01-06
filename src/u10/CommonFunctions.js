



function setSVGSize({height, width, element}) {
    element.setAttribute("width", width);
    element.setAttribute("height", height);
}



function createCircle({cx, cy, r, stroke, strokeWidth}) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    circle.setAttribute("stroke", stroke);
    circle.setAttribute("stroke-width", strokeWidth);
    return circle;
  }

function addCircle({viewBox, field, r =100, stroke="black", strokeWidth="10"}){
    //stroke="black" stroke-width="10"
    const cx = (field.getAttribute("width") / 2) + parseFloat(field.getAttribute("x")); // the halfe is the middle of the field, so it is the corrsponding x coordinate
    const cy = (field.getAttribute("height") / 2 )+ parseFloat(field.getAttribute("y")); // the same for 
    const circle =  createCircle({"cx":cx, "cy":cy, "r":r, "stroke": stroke, "strokeWidth":strokeWidth});
    viewBox.appendChild(circle);
    //return circle;
}

function createCross({x1, y1, x2, y2, stroke, strokeWidth}){
    const cross = document.createElementNS("http://www.w3.org/2000/svg", "line");
    cross.setAttribute("x1", x1);
    cross.setAttribute("x2", x2);
    cross.setAttribute("y1", y1);
    cross.setAttribute("y2", y2);
    cross.setAttribute("stroke", stroke);
    cross.setAttribute("stroke-width", strokeWidth);
    return cross;
}

function addCross({ viewBox, field, stroke = "black", strokeWidth = "10" }) {
    let width = parseFloat(field.getAttribute("width"));
    let height = parseFloat(field.getAttribute("height"));
    let x1 = parseFloat(field.getAttribute("x")) + 10 ;
    let y1 = parseFloat(field.getAttribute("y")) + 10;
    let x2 = x1 + width -20;
    let y2 = y1 + height -20;
    const line1 = createCross({ "x1": x1, "y1": y1, "x2": x2, "y2": y2, "stroke": stroke, "strokeWidth": strokeWidth });
    const line2 = createCross({ "x1": x1 , "y1": y1 + height -20 , "x2": x2 , "y2": y2 - height +20, "stroke": stroke, "strokeWidth": strokeWidth });
    viewBox.appendChild(line1);
    viewBox.appendChild(line2);



}


