//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";
//Start coding here
let message =
  lightBulbStatus === "On"
    ? "Light bulb is On"
    : lightBulbStatus === "Off"
    ? "Light bulb is Off"
    : lightBulbStatus === "Broken"
    ? "Light bulb is On Broken"
    : "Please choose the correct input (On/Off/Broken)";

console.log(message);
