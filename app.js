const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./users");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const ejs = require("ejs");
const app = express();
const { response } = require("express");
var jsonParser = bodyParser.json();

// app.use(express.static('/assets'));

app.set('view engine', 'ejs');


const PORT = process.env.PORT || 3000;

// async function main() {
mongoose.connect('mongodb+srv://prayag_SIHH:pp1234@cluster0.tuna9.mongodb.net/tutorial?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });


console.log("HIIIIIIIIIIIIIIIIIIIIIIIIII=");


// const client = new MongoClient(url);
// try{ await client.connect(); }
// catch(e){ console.log(e); }
// finally{ await client.close(); }
// main();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", function (req, res) {
    // res.send("hello world")
    res.render("index");
});

app.post("/", function (req, res) {
    let choice = Number(req.body.choice);
    console.log("choice=" + choice);
    console.log('inseide post');

    User.find({ "ids": choice }).exec(function (err, users) {

        console.log('result');
        console.log(users);


        let openingtable = `<table>\
                <tr>\
                <th>Firstname</th>\
                <th>Lastname</th>\
                <th>Age</th>\
                <th>Hometown</th>\
                <th>Job</th>\
                </tr>`

        users.forEach(function (users) {
            openingtable += `<tr>\
                      <td>${users.Firstname}</td>\
                      <td>${users.Lastname}</td>\
                      <td>${users.Age}</td>\
                      <td>${users.Hometown}</td>\
                      <td>${users.Job}</td>\
                      </tr>`;
        });

        openingtable += `</table>`;
        res.send({ html: openingtable });


    });
});



// app.post("/", function (req, res) {
//     let choice = Number(req.body.choice);


//     User.findById(choice, function (err, result) {


//         if (err) {
//             console.log(err);
//         }
//         else {
//             let openingtable = `< table >\
//             <tr>\
//             <th>Firstname</th>\
//             <th>Lastname</th>\
//             <th>Age</th>\
//             <th>Hometown</th>\
//             <th>Job</th>\
//             </tr>`


//             openingtable = openingtable + `<tr>\
//             </td>` + result.Firstname + `</tr>\
//             </td>` + result.Lastname + `</tr>\
//             </td>` + result.Age + `</tr>\
//             </td>` + result.Hometown + `</tr>\
//             </td>` + result.Job + `</tr>\
//             </tr>\
//             <table>`

//             console.log(openingtable);
//             res.send({ html: openingtable });
//         }


//         // res.send("the sum is"+`< br /> <br />email:${ s11 } <br />password:${ c11 } <br />`);

//     });

// });
















app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});





