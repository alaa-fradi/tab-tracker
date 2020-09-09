const  express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/status',(req,res)=>{
    res.send({
        message:"hello bbs "
    })
})

app.listen(process.env.PORT || 8081);

