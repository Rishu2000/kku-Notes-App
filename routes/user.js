const express = require('express');
const app = express();

const Users = {
    Praveen:"Hello123",
    Rishav:"dark123",
    rishu:"ris123"
  }
app.get('/',(req, res) => {
    const {Authentication} = req.session;
    if(Authentication){
        res.json(Authentication.username);
    }else{
        res.status(400).json("Please login to see.");
    }
})
app.get('/logout',async (req, res) => {
    req.session.destroy(() => {
        res.json({
            Success: true,
            Message:"Successfully loged out."
        })
    });
})
app.post('/login',(req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
        res.status(404).json("Please enter all the required fields.")
    }else{
        if(!Users[username]){
            //User Dosen't exists
            res.status(403).json({
                Success: false,
                Message: "User not found."
            });
          }
          else if(Users[username] !== password){
            //Password is incorrect
            res.status(401).json({
                Success: false,
                Message: "Password is Incorrect."
            });
          }
          else {
            //Every thing is fine.
            req.session.Authentication = req.body;
            res.json({
                Success: true,
                Message: username
            });
          }
    }
})
app.post('/register',(req, res) => {
    const {username, password} = req.body;
    if(!username || !password) {
        res.status(404).json({
            Success: false,
            Message: "Please enter all the required fields."
        })
    }else{
        if(!Users[username]){
            Users[username] = password;
            res.status(201).json({
                Success: true,
                Message:username
            })
        }else{
            res.status(409).json({
                Success: false,
                Message:"User already exits."
            })
        }
    }
})

module.exports = app;