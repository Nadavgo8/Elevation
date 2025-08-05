function foo() {
  let x = 2;

  return bar() * x;
}

function bar() {
  const num = 3;

  return moo() + num;
}

function moo() {
  return 1;
}

setTimeout(function timeout() {
  console.log("Timer done!");
}, 5000); // Handled by Web API, not call stack

const res = foo();

console.log(res);

function calcSum() {
  let sum = 0;
  for (let i = 0; i < 4000000000; i++) {
    sum += i;
  }
  console.log("sum = " + sum);
}

// console.log(calcSum());

setTimeout(calcSum, 5000);

function countContinously(currNum, sum, resolve) {
  const step = 1000;

  const max = 800000;

  for (let j = currNum; j < currNum + step; j++) {
    sum += j;
  }

  if (currNum >= max) {
    resolve(sum);
  } else {
    setTimeout(() => {
      countContinously(currNum + step, sum, resolve);
    }, 0);
  }
}

function sumManyNumbers() {
  const promise = new Promise((resolve, reject) => {
    countContinously(0, 0, resolve);
  }) ;

  return promise;
}

function onClick() {
  console.log("before sum");

  sumManyNumbers().then((sum) => console.log("sum = " + sum));

  console.log("after sum");
}

// axios.get('/posts').then(response => {
//   axios.get('/comments').then(response => {

//   })
// })
