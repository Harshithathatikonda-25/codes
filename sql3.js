const mysql=require("mysql2");
const con=mysql.createConnection({
host:"localhost",
user="root",
password:"Harshitha04",
databse:"ProductDB"
});

con.connect((err=>{
if(err){
console.log("Connection Error:");
console.log(err);
return;
}
console.log("Connected successfully");
const createTable=`
CREATE TABLE IF NOT EXITS product(
productid INT PRIMARY KEY,
productName VARCHAR(50),
productPrice Decimal(10,2),
ProductBrand ENUM('TOY','NOVELTY')
)`
con.query(createTable,(err)=>{
if(err){
console.log("Table Creation Error");
console.log(err);
return;
}
console.log("Product Table Created");
const insertData=`
INSERT INTO product(productid,productName,productPrice,productBrand)
VALUES
(101,'Teddy Bear',250,'toy'),
(102,'rEmote',678,'toy'),
(103,'Puzzle',350,'toy'),
(104,'led ballon',458,'novelty'')
`;
con.query(insertData,(err)=>{
if(err){
console.log("Insert Error");
console.log(err);
}
else{
console.log("5 records inserted successfully");
}
con.query("Select*from product",(err,result)=>{
if(err){
console.log("Display Error");
console.log(err);
}
else{
console.log("\nproduct Table Records");
console.table(result);
}
con.end();
});
});});
});