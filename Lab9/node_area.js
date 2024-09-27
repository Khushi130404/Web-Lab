const area = require("./area");

const radius = 5;
const length = 10;
const width = 6;
const side = 4;

const circleArea = area.circle(radius);
const rectangleArea = area.rectangle(length, width);
const squareArea = area.square(side);

console.log(`Area of Circle with radius ${radius}: ${circleArea.toFixed(2)}`);
console.log(
  `Area of Rectangle with length ${length} and width ${width}: ${rectangleArea}`
);
console.log(`Area of Square with side ${side}: ${squareArea}`);
