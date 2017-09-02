// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to database!');
  }
  console.log('Connected to MongoDB server!');

  // db.collection('Todos').find({
  //   _id: new ObjectID('59ab1ad6b8fe9f87cee5ce7b')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos count:', count);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({
    name : "Moisés"
  }).count().then((count) => {
    console.log(`We found ${count} result(s)!`);
  }, (err) => {
    console.log('Unable to fetch results!');
  });

  // db.close();
});
