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
  var decadeCentury = decade + century;
  console.log('The sum of ' + decade + ' and ' + century + ' is ' + decadeCentury + '.');
  return decade + century;

};

function multiply(cloud, moon){
  var cloudMoon = cloud * moon;
  console.log('The product of ' + cloud + ' and ' + moon + ' is ' + cloudMoon + '.');
  return cloud * moon;
};

function sumAndMultiply(decade, century, moon){
  var time = decade + century + moon;
  var space = decade * century * moon;
  var earth = [time, space];
  console.log(decade + ' and ' + century + ' and ' + moon + ' sum to ' + time + '.');
  console.log('The numbers ' + decade + ' and ' + century + ' and ' + moon + ' have a product of ' + space + '.');
  return earth;
};

function sumArray(thisArray){
  var arraySum = 0;
  for (i = 0; i < thisArray.length; i++) {
    arraySum += thisArray[i]
  }
  console.table(thisArray);
  console.log(thisArray.toString() + ' was passed in as an array of numbers ' + ' and ' + arraySum + ' is their sum.');
  return arraySum;
};

var timesArray = [5, 5, 5]
function multiplyArray(timesArray){
  var arrayTimes = 1;
  for (i = 0; i < timesArray.length; i++) {
    arrayTimes *= timesArray[i]
  }
  console.table(timesArray);
  console.log('The numbers ' + thisArray.toString() + ' have a product of ' + arrayTimes + '.')
  return arrayTimes;
}
