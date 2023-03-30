let numberArray = [12, -26, 32, 14, 27, -31, -17, 0, -1, 10];

let result = numberArray.filter(testFunction);

function testFunction(values) {
  return values < 0;
}

console.log('Array of Negative Numbers: ', result);
