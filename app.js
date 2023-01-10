const express = require('express');
const mongo = require('mongoose')
const body = require('body-parser');
const route = require('./Routes/index');
const bodyParser = require('body-parser');
const app = express();
const port= process.env.PORT || 5000;
const host = 'localhost';
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api',route); 
mongo.connect('mongodb+srv://Zoufisha:root@cluster0.s93sx.mongodb.net/Zomato?retryWrites=true&w=majority',{ useNewUrlParser: true },{ useUnifiedTopology: true }).then(
    () =>
    {
        app.listen(port,host,() => {
            console.log(`Server running at  ${host}:${port}`);
        });
    }
).catch(
    (err) =>{
        // document.write("Error their");
        console.log(err)
    }
)
// mongo.connect('mongodb+srv://Zoufisha:root@cluster0.s93sx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true },{ useUnifiedTopology: true }).then(
//     () =>
//     {
//         app.listen(port,host,() => {
//             console.log(`Server running at  ${host}:${port}`);
//         });
//     }
// ).catch(
//     () =>{
//         document.write("Error their");
//     }
// )

