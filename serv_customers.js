const express = require('express');
const fs = require('fs');

const app = express();

let customers=[];

fs.readFile('./customers.json', 'utf8', (err, data) => {
    if (!err) {
        customers=JSON.parse(data);        
        console.log(customers);
    } else {
      console.error(err);
    }
});
app.get('/', (req, res)=> {res.json(customers)});




app.listen(3000);