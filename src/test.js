const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("we did it");
    } else {
      reject("test");
    }
  }, 2000);
});
newPromise.then((v) => console.log(v)).catch((e) => console.log(e));
