const express =require('express');
const app = express();
const cors = require("cors");
const mysql=require('mysql');

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"MySQL@123",
    database:"contact"
})

app.get("/",(req,res)=>{
    const sql = "SELECT * FROM contacts";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err.response.data);
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO contacts (name, email) VALUES (?)";    
    const values = [req.body.name,req.body.email]    
    db.query(sql, [values], (err, data) => {        
        if(err) return res.json(err);        
        return res.json(data);    
})})

app.put('/update/:id', (req, res) => {
    const sql = "update contacts set name = ?, email = ? where id = ?";  
    const values = [req.body.name,req.body.email]  
    const id = req.params.id;  
    //const values = [req.body.name, req.body.email, id]; 
    db.query(sql,[...values,id], (err, data) => {        
        if(err) return res.json(err);        
        return res.json(data);    
})})

app.delete('/contacts/:id', (req, res) => {    
    const sql = "DELETE FROM contacts WHERE id = ?";    
    const id = req.params.id;        
    db.query(sql, [id], (err, data) => {        
        if(err) return res.json(err);        
        return res.json(data);    
    })})


app.listen(8081,()=>{
    console.log("server is listening");
})