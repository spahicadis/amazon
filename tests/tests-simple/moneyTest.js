import { formatCurrency } from '../../utils/money.js';

console.log('test suite: formatCurrency')

console.log('converts cents into dollars')

if (formatCurrency(2095) === '20.95') { //automated testing -> Using code to test code
  console.log('passed');
} else {
  console.log('failed') 
}//basic test case

console.log('works with 0')
if (formatCurrency(0) ==='0.00' ) {
console.log('passed');
} else {
  console.log('failed')
}//edge cases, test with values that are tricky

console.log('rounds up to the nearest cent')
if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed')


  console.log('round down to the nearest cent')
}
if (formatCurrency(2000.4 === '20.00')) { //exercise
  console.log('passed');
} else {
  console.log('failed')
}

