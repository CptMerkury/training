// Day 1
class Foo {
  bar = 1;

  bla = () => console.log(this.bar);

  baz = function () {
    console.log(this.bar);
  };
}

new Foo().bla(); // 1
new Foo().baz(); // 1

// Day 2
var val = Promise.resolve(1);
var arr = [1, 2, 3];
for (var i = 0; i < arr.length; ++i) {
  val = val.then((val) => val + arr[i]);
}
val.then(console.log);//NaN
//--------------------------------------------------------
var val = Promise.resolve(1);
var arr = [1, 2, 3];
for (let i = 0; i < arr.length; ++i) {
  val = val.then((val) => val + arr[i]);
}
val.then(console.log);//7
//--------------------------------------------------------
var val = Promise.resolve(1);
var arr = [1, 2, 3];
for (var i = 0; i < arr.length; ++i) {
  (function(i){
    val = val.then((val) => val + arr[i]);
  })(i)
}
val.then(console.log);//7