const db = require('./db');
db.put('key 1', 'value 1');
db.put('key 2', 'value 2');

db.get('key 1', function(err, value){
  if(err) {
    console.log (err);
    return;
  }
  console.log(value);
})

db.del('key 1');