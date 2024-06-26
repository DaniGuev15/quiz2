const mongoose = require('mongoose');

const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require('dotenv').config();

const port = process.env.PORT || 3000;

// user = process.env.USERID
// pw = process.env.PW
// console.log(user)
// console.log(pw)

// Create a Schema object
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  studentid: { type: Number, required: true },
});

// This Activitry creates the collection called activitimodels
const Studentmodel = mongoose.model('Student', studentSchema);

const record1 = new Studentmodel({
  name: 'Rebecca',
  studentid: 123456,
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/form.html")
});

app.post('/', async (req, res) => {
  myuri = req.body.myuri
  // console.log(myuri)

  await mongoose.connect(myuri)
    .then(() => {
      console.log('Connected to the database!');
    })

  Studentmodel.insertMany([record1]);

  res.send(`<h1>Document  Added</h1>`);
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
