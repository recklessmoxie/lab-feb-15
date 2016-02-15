// //You'll need one of these for each answer
// var pTagOne = document.getElementById('ans-one');
// var ans1 = prompt('Did Sam live in South Dakota for 8 years?');
// if (ans1.toLowerCase() === 'n' || ans1.toUpperCase() === 'NO') {
//   // alert('You\'re right! Sam never lived in South Dakota!');
//   // The alert() is replaced with the following line
//   pTagOne.textContent = 'You\'re right! Sam never lived in South Dakota!';
// } else if (ans1.toLowerCase() === 'y' || ans1.toUpperCase() === 'YES') {
//   // alert('Nope! Sam never lived in South Dakota!');
//   // The alert() is replaced with the following line
//   pTagOne.textContent = 'Nope! Sam never lived in South Dakota!';
// } else {
//   // This error-correction can stay as an alert
//   alert('Please give a yes or no answer.');
// }

function sum(decade, century){
  console.log('The sum of 10 and 100 is 110');
  return decade + century;

}

function multiply(cloud, moon){
  console.log('The product of ' + cloud + moon + ' is ' + multiply);
  return cloud * moon;
}

function sumAndMultiply(decade, century, moon){
  var time = decade + century + moon;
  var space = decade * century * moon;
  var earth = [time, space];
  // console.log('10 and 100 and 5 sum to 115');
  // console.log('The numbers 10 and 100 and 5 have a product of 5000');
  return earth;
}

function sumArray(thisArray){
  var arraySum = 0;
  for (i = 0; i < thisArray.length; i++) {
    arraySum += thisArray[i]
  }
  console.table(thisArray);
  console.log(thisArray.toString() + 'was passed in as an array of numbers, and 9 is their sum');
  return arraySum;
};
