const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


const PORT = 3002 || process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//create
app.post('/insert', (req, res) => {
    
});

//read
app.get('/read', (req, res) => {
    console.log('entrou no read');
});

//update


//delete


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
