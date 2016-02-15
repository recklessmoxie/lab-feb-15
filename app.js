
var pTagOne = document.getElementById('ans-one');
var pTagTwo = document.getElementById('ans-two');
var pTagThree = document.getElementById('ans-three');
var pTagFour  = document.getElementById('ans-four');


function sum(decade, century){
  var result = decade + century;
  pTagOne.textContent =('The sum of ' + decade + ' and ' + century + ' is ' + result + '.');
  return result;

};

function multiply(cloud, moon){
  var cloudMoon = cloud * moon;
  pTagTwo.textContent =('The product of ' + cloud + ' and ' + moon + ' is ' + cloudMoon + '.')
  return cloud * moon;
};

function sumAndMultiply(decade, century, moon){
  var time = decade + century + moon;
  var space = decade * century * moon;
  var earth = [time, space];
  pTagThree.textContent = (decade + ' and ' + century + ' and ' + moon + ' sum to ' + time + '.');
  pTagThree.textContent = ('The numbers ' + decade + ' and ' + century + ' and ' + moon + ' have a product of ' + space + '.');
  return earth;
};

function sumArray(thisArray){
  var arraySum = 0;
  for(var i = 0; i < thisArray.length; i++) {
    arraySum += thisArray[i]
  }
  pTagFour.textContent = (thisArray);
  pTagFour.textContent = (thisArray.toString() + ' was passed in as an array of numbers ' + ' and ' + arraySum + ' is their sum.');
  return arraySum;
};

function multiplyArray(timesArray){
  var arrayTimes = 1;
  for (i = 0; i < timesArray.length; i++) {
    arrayTimes *= timesArray[i]
  }
  pTagFive.textContent = (timesArray);
  pTagFive.textContent = ('The numbers ' + thisArray.toString() + ' have a product of ' + arrayTimes + '.')
  return arrayTimes;
};
