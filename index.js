// Code your solutions in this file
function writeCards(array, event) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push (`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
  }
  return newArray;
}

function countDown(numberrr) {
  let i = 0;
  while (i <= numberrr)
  {
    console.log(i++);
  }
}
