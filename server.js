const express =require('express')
const cors =require('cors')
const mysql =require('mysql')


const app=express()
app.use(cors())
app.use(express.json())

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"laboratory"
})


app.get('/',(req,res)=>{
    return res.json("from backend")
   
})

app.get('/lab',(req,res)=>{

    db.query("SELECT * FROM report ",(err , result)=>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})
app.get('/kami',(req,res)=>{

    db.query("SELECT * FROM report WHERE refby='DR KAMRAN' ",(err , result)=>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})

app.post('/lab',(req, res)=>{
    const data=req.body
    db.query("INSERT INTO report set ? ",data,(err , result)=>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})

app.put('/lab/:id',(req, res)=>{
    const data=[req.body.name,req.body.age,req.body.refby,req.body.gender,req.body.testtype,req.body.number,req.body.report,req.params.id]
    db.query("UPDATE  report set name=?, age=?, refby=?, gender=?,testtype=?,number=?,report=? where id=? ",data,(err , result)=>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})


app.delete('/lab/:id',(req, res)=>{
    const data=req.params.id
    db.query('DELETE  FROM report WHERE id=?',data, (err,result)=>{
     if(err){
        throw err
     }else{
        res.send(result)
     }
    })
})



app.post('/login',(req,res)=>{
    const data=req.body
    db.query("INSERT INTO login set ?", data, (err , result)=>{
        if(err){
            throw err;
        }
        else{
            res.send(result)
        }
    })
})

app.get('/login',(req,res)=>{
    db.query('SELECT * FROM login ',(err, result)=>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})

app.get('/xray',(req,res)=>{
    db.query('SELECT * FROM xray ' ,(err, result)=>{
        if(err){
            throw err
        }
        else{
            res.send(result)
        }
    })
})

app.post('/xray',(req, res)=>{
    const data=req.body
    db.query('INSERT INTO xray set ?',data,(err, result)=>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})

app.delete('/xray/:id',(req, res)=>{
    const data=req.params.id
    db.query('DELETE FROM xray where id=?',(data),(err, result)=>{
        if(err){
            throw err
        }
        else{
            res.send(result)
        }
    })
})
app.put('/xray/:id',(req, res)=>{
  const data=[req.body.name,req.body.age,req.body.refby,req.body.gender,req.body.number,req.body.report,req.params.id]
  db.query("UPDATE xray set name=?,age=?,refby=?,gender=?,number=?,report=? where id=?" ,data,(err,result)=>{
        if(err){

            throw err
        }else{
            res.send(result)
        }
    })
})
app.get('/ultra',(req,res)=>{
    db.query("SELECT * FROM ultraso ",(err, result)=>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})
app.post('/ultra',(req,res)=>{
    const data=req.body
    db.query("INSERT INTO ultraso set ?",data,(err, result)=>{
        if(err){
            throw err
        }else{
            res.send(result)
        }

    })
})

app.delete('/ultra/:id',(req, res)=>{
    const data=req.params.id
    db.query("DELETE FROM ultraso where id=?",data,(err,result)=>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})

app.put('/ultra/:id',(req, res)=>{
    const data=[req.body.name,req.body.age,req.body.refby,req.body.number,req.body.gender,req.body.report,req.params.id]
    db.query("UPDATE  ultraso set name=?, age=?, refby=?,number=?,gender=?,report=? where id=?",data,(err,result)=>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})

app.listen(8088,()=>{
    console.log("server is listing on port 8088")
})