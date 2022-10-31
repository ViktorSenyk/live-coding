// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

//input: number
// output: undefined

//algo
// 1. iterate 1 .. num
// 2. check if number is prime
//    2.1 iterate 1 .. number
//    2.2 if number % index === -> count+=1
//    2.3 if counter > 2 -> is not prime
// 3. if prime -> console

function getPrimes(num) {
  for (let number = 2; number <= num; number++) {
    let counter = 0;
    for (let index = 1; index <= number; index++) {
      if (number % index === 0) {
        counter++;
      }
    }
    if (counter === 2) {
      console.log(number);
    }
  }
}

// test datajhnu76yu
getPrimes(10);
getPrimes(11);
getPrimes(15);
