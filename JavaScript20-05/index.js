function delayedPromise(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Resolved after ${seconds} seconds`);
      resolve();
    }, seconds * 1000);
  });
}

delayedPromise(5)
  .then(() => {
    console.log("Promise Resolved!");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
//------------------------------------------------
function firstTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("First task completed");
    }, 2000);
  });
}

function secondTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Second task completed");
    }, 3000);
  });
}

firstTask()
  .then((firstResult) => {
    console.log(firstResult);
    return secondTask();
  })
  .then((secondResult) => {
    console.log(secondResult);
    console.log(`${firstResult} and ${secondResult}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
//------------------------------------------------
function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 completed");
    }, 3000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 completed");
    }, 2000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3 completed");
    }, 1000);
  });
}

Promise.all([task1(), task2(), task3()])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
//------------------------------------------------
function fastTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fast task completed");
    }, 2000);
  });
}

function slowTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow task completed");
    }, 5000);
  });
}

Promise.race([fastTask(), slowTask()])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
