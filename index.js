
const express = require('express');
const app = express();
const PORT = 8103;

app.use(express.json())

app.listen(
    PORT, () => console.log('its live on http://localhost:${PORT}')
)

var colors = ['Red','Orange','Yellow','Pink','Purple','Blue','Green'];
var animals = ['Rabbit', 'Dog','Cat','Bird','Hare','Mouse','Lion'];

app.get('/object', (req, res) => {
   res.status(200).send({
       color: colors[Math.floor(Math.random() * colors.length-1)+1],
       animal: animals[Math.floor(Math.random() * animals.length-1)+1]
   }) 
});

app.post('/object', (req,res) => {
    const { color } = req.body;
    const { animal } = req.body;
    
    res.send({
        color: `${color}`,
        animal: `${animal}`
    })
});
