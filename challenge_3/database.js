const mysql = require('mysql');


// connection to db
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'transactions'
  });
  
  con.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });
  
  con.end((err) => {
  
  });
  

CREATE TABLE customers (
    id int(50) NOT NULL AUTO_INCREMENT,
    name varchar(50),
    email varchar(50),
    password varchar(50),
    address varchar(50),
    city varchar(50),
    zip int(5),
    cardnumber int(16),
    expiry int(4),
    cvv int(3),
    cczip int(5),
    PRIMARY KEY (id)
  ) 








