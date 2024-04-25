/* We can store promise in variable as well as we can just create new promise, only catch is when we directly create new promise we need to attach ".then()" and ".catch()" methods to at the end of promise, U will see it in second example*/

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async Task
  //DB calls, Networkcalls
  setTimeout(() => {
    console.log("We are trying to run promise");
    resolve(4); //resolve() methode basically connects us with ".then()"
  }, 1000);
});

promiseOne.then((value) => {
  console.log(`promise resolve ${value}`);
});

/*Example to of using promise(without saving it in variable) */
new Promise(function (resolve, reject) {
  if (true) {
    reject();
    console.log("done");
  }
}).catch(() => {
  console.log("Rejected");
});

/*Example three of promise */
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({
      user: "shivam khedekar",
      username: "shivam.khedekar",
      age: "24",
    });
  }, 2000);
});
promiseThree.then((user) => {
  console.table(user);
});
/*Example 4  */
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let err = false;
    if (!err) {
      resolve({ username: "Shivam.Khedekar", Password: "Abcx&d9" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 3000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.error(err))
  .finally(() => console.log("Promise is resolved or rejected but ended"));

/*async await for promise */
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let err = true;
    if (!err) {
      resolve({ username: "Javascript", Password: "Abcx&d9" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 3000);
});
async function consumepromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {console.log(error);}
}
consumepromiseFive()