// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database!');
  }
  console.log('Connected to MongoDB server!');


  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result)
  // });

  // db.collection('Users').deleteMany({name: 'Igor Quintal Mendes'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('59ab17b75690061914e40f85')}).then((document) => {
    console.log(document);
  });

  // db.close();
});
