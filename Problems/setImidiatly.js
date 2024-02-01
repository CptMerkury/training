setTimeout(() => {
  console.log(3);
}, 0);

setImmediate(() => {
  console.log(1);
});

const timer = setImmediate(() => {
  console.log(2);
});

clearImmediate(timer);







