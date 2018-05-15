import express from 'express'; 
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'; 
/*
var express =  require('express'); //call express 
var path = require('path'); // refrence to path 
var open = require('open'); //refrence 

var port = 3000; 
var app = express(); //creating an instance of express
*/

const port = 3000;
const app = express();
const compiler = webpack(config);

//the following functiion sets is part of the webpack bundler settings.
app.use(require('webpack-dev-middleware')(compiler, {
noInfo: true, 
publicPath: config.output.publicPath
}));

//the following function is saying that any ref to the root should be handled by the func
// req coresponds to requiest and res to response  
//notr that app which is an insy of exptress is using thr its proparty get 
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../srs/index.html'));
});

app.listen(port, function(err){
    if (err){
        console.log(err);

    } else{open('http://localhost:' + port);}
})