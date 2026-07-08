const mysql=require('mysql2');
const db=MySQL.createConnection({
host:'localhost',
user:'root',
password:'yourpassword',
database:'companyDB'
});
db.connect((err)=>{
if(err) throw err;
console.log('Connected to companyDB');

db.query(`CREATE TABLE if not exists employee(
emp_id INT PRIMARY KEY AUTO_INCREMENT,
emp_name VARCHAR(50),
department VARCHAR(50),
salary DECIMAL(10,2)
)`,(err)=>{
if(err) throw err;

const data=[
['AMIT','IT',50000],
['CHARLIE','HR',60000],
['RAHUL','FINANCE',45678]
];
db.query('INSERT INTO employee (emp_name,department,salary) VALUES?',[data],(err)=>{
if(err) throw err;
console.log('3 employees inserted');

db.query('SELECT*FROM employee where salary<50000',(err)=>{
if(err) throw err;
console.log('Salary>5000:',rows);

db.query('Update employee set salary=? where emp_id=?',[60000,1],(err)=>{
if(err) throw err;
console.log('Salary updated for emp_id 1');

db.query('Delete from employee where emp_id=?',[2],err=>{
if(err)throw err;
console.log('emp_id 2 deleted');
db.end();
});
});
});
});
});});