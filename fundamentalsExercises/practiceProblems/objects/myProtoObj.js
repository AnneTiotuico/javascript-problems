let myProtoObj = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let myObj = Object.create(myProtoObj);

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}