exports.fibonacci = function () {
  let a = 0;
  let b = 0;
  let str = "0 ";
  for (let i = 0; i <= 10; i++) {
    let c = a + b;
    str += c + " ";
    a = b;
    b = c;
  }
  return str;
};
