const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = a.forEach((element) => {
  console.log(element);
  return element + 1;
});
console.log(a);
console.log(b);
for (const key in a) {
  if (key >= 0) {
    console.log(a[key]);
  }
}
//Foreach always returns Undefined

