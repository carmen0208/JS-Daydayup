var Chinese = {
  nation: '中国'
};
// var Doctor = {
//   career: '医生'
// };

function extendCopy(p){
  var c = {};
  for (var i in p ) {
    c[i] = p[i];
  }
  c.uber = p;
  return c;
}

var Doctor = extendCopy(Chinese);
Doctor.career = '医生';
console.dir(Doctor);
console.log(Doctor.nation);

var Chinese2 = {
  nation: '中国'
};
Chinese2.birthPlaces = ['北京','上海','香港'];
var Doctor2 = extendCopy(Chinese2);
Doctor2.birthPlaces.push('厦门');
console.log(Doctor2.birthPlaces);
console.log(Chinese2.birthPlaces);
