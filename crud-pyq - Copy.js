const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Harshitha04",
  database: "test"
});

con.connect(function(err){
  if(err) throw err;

  // 1. Update Quantity
  con.query("UPDATE Orders SET Quantity=5 WHERE OrderID=1");

  // 2. Delete Order Amount less than 1000
  con.query("DELETE FROM Orders WHERE OrderAmount<1000");

  // 3. Display Quantity > 2
  con.query("SELECT * FROM Orders WHERE Quantity>2",
  function(err,result){
    console.log(result);
  });

  // 4. Sort by Order Amount
  con.query("SELECT * FROM Orders ORDER BY OrderAmount DESC",
  function(err,result){
    console.log(result);
  });
});