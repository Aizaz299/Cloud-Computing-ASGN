const express = require('express');
const app = express();

app.use(express.json()); 

const departments=[
    {id:1,name:'CS'}, 
    {id:2,name:'BBA'},
    {id:3,name:'IT'}    
]

app.get('/',(req,res) => {
res.send('Welcome to the courses list.');
});

app.get('/api/courses',(req,res)=>{
res.send(departments);
})

app.get('University/departments/:dep_id',(req,res)=>{
   const course = courses.find(c=>c.id === parseInt(req.params.dep_id))
    if(!course) res.status(404).send('course not found');
     res.send(departments);
});

app.listen(3000,()=> console.log('Listening port 3000'));


