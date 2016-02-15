
var pTagOne = document.getElementById('ans-one');
var pTagTwo = document.getElementsById('ans-two');
var pTagThree = document.getElementsById('ans-three');
var pTagFour  = document.getElementsById('ans-four');


function sum(decade, century){
  var decadeCentury = decade + century;
  pTagOne.textContent = console.log('The sum of ' + decade + ' and ' + century + ' is ' + decadeCentury + '.');
  return decade + century;

};

function multiply(cloud, moon){
  var cloudMoon = cloud * moon;
  pTagTwo.textContent = console.log('The product of ' + cloud + ' and ' + moon + ' is ' + cloudMoon + '.')
  return cloud * moon;
};

function sumAndMultiply(decade, century, moon){
  var time = decade + century + moon;
  var space = decade * century * moon;
  var earth = [time, space];
  pTagThree.textContent = console.log(decade + ' and ' + century + ' and ' + moon + ' sum to ' + time + '.');
  pTagThree.textContent = console.log('The numbers ' + decade + ' and ' + century + ' and ' + moon + ' have a product of ' + space + '.');
  return earth;
};

function sumArray(thisArray){
  var arraySum = 0;
  for (i = 0; i < thisArray.length; i++) {
    arraySum += thisArray[i]
  }
  pTagFour.textContent = console.table(thisArray);
  pTagFour.textContent = console.log(thisArray.toString() + ' was passed in as an array of numbers ' + ' and ' + arraySum + ' is their sum.');
  return arraySum;
};

function multiplyArray(timesArray){
  var arrayTimes = 1;
  for (i = 0; i < timesArray.length; i++) {
    arrayTimes *= timesArray[i]
  }
  pTagFive.textContent =console.table(timesArray);
  pTagFive.textContent =console.log('The numbers ' + thisArray.toString() + ' have a product of ' + arrayTimes + '.')
  return arrayTimes;
};
