const express = require('express');
const note = express();

const Notes = [
    {
        NoteID: "hello",
        Title: "Hello World",
        Desc: "Hello World Hello World Hello World Hello World Hello World",
        User:"Rishav"
      },
      {
        NoteID: "faq",
        Title: "Frequently Asked Questions",
        Desc: "What questions are you asking frequently",
        User:"Rishav"
      },
      {
        NoteID: "gfg",
        Title: "GeeksforGeeks",
        Desc: "Hello GeeksforGeeks",
        User:"Praduman"
      }
]

note.get('/',(req, res) => {
  const {Authentication} = req.session;
    if(Authentication){
      res.json(Notes);
    }else{
      res.status(404).json("Please login to see.");
    }
})

module.exports = note;