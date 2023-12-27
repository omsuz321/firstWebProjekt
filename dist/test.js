"use strict";
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c1 = Color.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
let c2 = Color2.Green;
let colorName = Color[2];
console.log(colorName); // Blue
var Color3;
(function (Color3) {
    Color3["Red"] = "Red";
    Color3["Green"] = "Green";
    Color3["Blue"] = "Blue";
})(Color3 || (Color3 = {}));
let c3 = Color3.Green;
console.log(c3); // Green
//# sourceMappingURL=test.js.map