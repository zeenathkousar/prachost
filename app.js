const dotenv=require('dotenv').config();

const express=require('express');
const app=express();

const PORT=process.env.PORT || 3000

const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost/pugdb1')
mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('database connected')
    }).catch((e)=>{
        console.log(`databse not connected - got some err in connecting`)
        console.log(e)
    });

    const  pugschema2=new mongoose.Schema({
        Name: {
            type:String,
            required:true,
        },
        age: {
            type:Number,
        }, 
        year: {
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true
        }
    
        
    });

    var pugcollection2=mongoose.model('pugcollection2',pugschema2);

    


app.get('/',(req,res)=>{
    res.send('hello myapp')
})

app.listen(PORT,()=>{
    console.log('server started')
})