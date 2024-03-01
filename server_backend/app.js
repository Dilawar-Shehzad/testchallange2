const express = require("express");
const app = express();
const PORT = 3001;
let dummyJson = [
  {
    id:1,
    moduleName: "Experimemnt Module",
    iteration: [
      {
        iterationName: "EM",
        iterationTitle: "abc",
        selcetion: true,
      },
      {
        iterationName: "EM",
        iterationTitle: "abc",
        selcetion: false,
      },
      {
        iterationName: "EM",
        iterationTitle: "abc",
        selcetion: true,
      },
    ],
  },
  {    
    id:2,
    moduleName: "Experimemnt Module",
    iteration: [
      {
        iterationName: "EM",
        iterationTitle: "abc",
        selcetion: true,
      },
      {
        iterationName: "EM",
        iterationTitle: "abc3",
        selcetion: false,
      },
      {
        iterationName: "EM",
        iterationTitle: "abc4",
        selcetion: true,
      },
    ],
  },
  {
    id:3,
    moduleName: "Experimemnt Module",
    iteration: [
      {
        iterationName: "EM",
        iterationTitle: "abc",
        selcetion: true,
      },
      {
        iterationName: "EM",
        iterationTitle: "abc3",
        selcetion: false,
      },
      {
        iterationName: "EM",
        iterationTitle: "abc4",
        selcetion: true,
      },
    ],
  },
  {
    id:4,
    moduleName: "Experimemnt Module",
    iteration: [
      {
        iterationName: "EM",
        iterationTitle: "abc",
        selcetion: true,
      },
      {
        iterationName: "EM",
        iterationTitle: "abc3",
        selcetion: false,
      },
      {
        iterationName: "EM",
        iterationTitle: "abc4",
        selcetion: true,
      },
    ],
  },
];

app.get("/data", (req, res) => {
  res.json(dummyJson);
});


app.post('/add/:id',(req,res)=>{
    const id = req.params;
    const newItem = req.body.item;
    const obj = dummyJson.find(item=>item.id === parseInt(id))

    if (obj) {
        obj.iteration.push(newItem);
        res.status(200).json({message:'Item Added Successfully!'})
    } else {
        res.status(400).json({message:'not found!'})
    }
})


app.listen(PORT,()=>{
    console.log('SERVR is running');
})