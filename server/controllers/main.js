const mysql =require('mysql');
const configDb=require('../configDb')
const db=mysql.createConnection(configDb)
const cloudinary = require('cloudinary').v2;
const {upload} = require('../cloudinary')