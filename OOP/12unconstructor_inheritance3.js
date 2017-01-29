var Chinese = {
  nation: '中国'
};
// var Doctor = {
//   career: '医生'
// };

function deepCopy(p,c){
  var c = c || {};
  for (var i in p) {
    if(typeof p[i] === 'object'){
      c[i] = (p[i].constructor === Array) ? [] : {};
      deepCopy(p[i], c[i]);
    } else {
      c[i] = p[i];
    }
  }
  return c;
}
Chinese.birthPlaces = ['北京','上海','香港'];

var Doctor = deepCopy(Chinese);

Doctor.career = '医生';

Doctor.birthPlaces.push('厦门');
console.dir(Doctor);
console.log(Doctor.birthPlaces);
console.log(Chinese.birthPlaces);
