let arr = [1, 2, 3, 4, 4, 5, 3, 1, 2, 6];
let counter = 0
const el = arr[0];

for (let i = 0; i < arr.length; i++) { 
  if (el === arr[i] ) {
     counter++
  }}

if (counter === arr.length) {
  console.log('True')
} else {
  console.log('False')
}
