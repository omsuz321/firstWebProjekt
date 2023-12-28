// Enum
//enum Color {Red, Green, Blue}
//let c1: Color = Color.Green;
//enum Color2 {Red = 1, Green = 2, Blue = 4}
//let c2: Color2 = Color2.Green;
//let colorName: string = Color[2];
//console.log( colorName ); // Blue
//enum Color3 {Red = "Red", Green = "Green", Blue = "Blue"}
//let c3: Color3 = Color3.Green;
//console.log( c3 ); // Green
//The operator "+" does not know union, so a work around is needed for no compilor waring
const add = (x, y) => (x + y);
const equals = (x, y) => x === y;
console.log(add(1, 2));
console.log(add(true, true));
console.log(add(true, false));
var x = 1;
var y = 1;
console.log(add(equals(x, y), equals(y, x)));
export {};
