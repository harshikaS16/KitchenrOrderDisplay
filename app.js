const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const CONF = require('./config/database');
const dishes = require('./routers/dishes');
const Excel = require("exceljs");
const tempfile = require("tempfile");
const socketio = require("socket.io");

mongoose.connect(CONF.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database '+ CONF.database);
});

mongoose.connection.on('error', (error) => {
    console.log('Database error: '+error);
})

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use('/dishes', dishes);

app.get('/', (req, res) => {
    res.send('Invalid endpoint');
});

app.get('/excel', function(req, res){
    try {
        var workbook = new Excel.Workbook();
        var worksheet = workbook.addWorksheet('My Sheet');

        worksheet.columns = [
            { header: 'Id', key: 'id', width: 10 },
            { header: 'Name', key: 'name', width: 32 },
            { header: 'D.O.B.', key: 'DOB', width: 10 }
        ];
        worksheet.addRow({id: 1, name: 'John Doe', dob: new Date(1970,1,1)});
        worksheet.addRow({id: 2, name: 'Jane Doe', dob: new Date(1965,1,7)});

        var tempFilePath = tempfile('.xlsx');
        workbook.xlsx.writeFile(tempFilePath).then(function() {
            console.log('file is written');
            res.sendFile(tempFilePath, function(err, data){
                console.log('---------- error downloading file: ' + err);
                if(data){
                    console.log("****"+data);
                }
            });
        });
    } catch(err) {
        console.log('OOOOOOO this is the error: ' + err);
    }
    
});

var server = app.listen(port, () => {
    console.log("Server started at port "+port);
});

var io = socketio(server);

io.on('connection', function (socket) {
    console.log('Socket io connected');
    socket.on('disconnect', function() {
      console.log('Socket io disconnected');
    });
    socket.on('add-item', function (data) {
      io.emit('new-item', { item: data });
    });
  });