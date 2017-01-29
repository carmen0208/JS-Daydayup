var Chinese = {
  nation: '中国'
};
// var Doctor = {
//   career: '医生'
// };

function object(o){
  function F(){};
  F.prototype = o;
  return new F();
}

var Doctor = object(Chinese);
Doctor.career = '医生';
console.dir(Doctor);
console.log(Doctor.nation);
