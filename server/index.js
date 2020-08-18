const express = require('express');
const cors = require('cors');

const app = express();

//middlewares
app.use(cors({origin: '*'}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(require('./Routes/index.js'));


const port = process.env.PORT || 3001;
app.listen(port, (err) => {
    if(err)
    {
        console.error(err);
    } 

    console.log(`server on port ${port}`);
    
});