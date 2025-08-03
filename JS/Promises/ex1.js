
function checkLuckyNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num <= 0) {
        reject(new Error("Invalid number"));
      } else if (num % 7 === 0) {
        resolve("Lucky!");
      } else {
        resolve("Not lucky");
      }
    }, 800);
  });
}  

  function testing(num) {
    checkLuckyNumber(num)
      .then((result) => console.log(result))
      .catch((error) => console.error(error.message));
  }

  // const testing = (num) => {
  //   checkLuckyNumber(num)
  //     .then((result) => console.log(result))
  //     .catch((error) => console.error(error.message));
  // };

  testing(14);
  testing(12);
  testing(0);