function oneThroughTwenty() {
  
  let onetwenty = [];
  
  for (let i = 1; i <= 20; i++){
    console.log(i)
  
  }
  return onetwenty;
}

console.log(oneThroughTwenty()); 

//call function oneThroughTwenty

function evensToTwenty() {
  
  let pair20 = [];
  
  for (let i = 1; i <= 20; i++){
    if (i % 2 !==1)
    console.log(i)
  
  }
  return pair20;
}

console.log(evensToTwenty()); 

//call function evensToTwenty

function oddsToTwenty() {
  
  let unpair20 = [];
  
  for (let i = 1; i <= 20; i++){
    if (i % 2 !==0)
    console.log(i)
  
  }
  return unpair20;
}

console.log(oddsToTwenty()); 

//call function oddsToTwenty

function multiplesOfFive() {
  
  let fiveplus = [];
  
  for (let i = 5; i <= 100; i+=5){
    console.log(i)
  
  }
  return fiveplus;
}

console.log(multiplesOfFive()); 

//call function multiplesOfFive

function squareNumbers() {
  
  let squared = [];
  
  for (let i = 0; i <= 10; i++){
    console.log(i * i)
  
  }
  return squared;
}

console.log(squareNumbers()); 

//call function squareNumbers

function countingBackwards() {
  
  let backnumber = [];
  
  for (let i = 20; i >= 1; i--){
    console.log(i)
  
  }
  return backnumber;
}

console.log(countingBackwards()); 

//call function countingBackwards

function evenNumbersBackwards() {
  
  let pairback = [];
  
  for (let i = 20; i >= 1; i--){
    if ( i % 2 !==1)
    console.log(i)
  
  }
  return pairback;
}

console.log(evenNumbersBackwards()); 

//call function evenNumbersBackwards

function oddNumbersBackwards() {
  
  let unpairback = [];
  
  for (let i = 20; i >= 1; i--){
    if ( i % 2 !==0)
    console.log(i)
  
  }
  return unpairback;
}

console.log(oddNumbersBackwards()); 

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  
  let fiveback = [];
  
  for (let i = 100; i >= 5; i-=5){
    console.log(i)
  
  }
  return fiveback;
}

console.log(multiplesOfFiveBackwards());

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
  
  let squareback = [];
  
  for (let i = 10; i >= 2; i--){
    console.log(i)
  
  }
  return squareback;
}

console.log(squareNumbersBackwards());

//call function squareNumbersBackwards
