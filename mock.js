let userdata={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"chandan",
    port:"3306",
}

const mysql=requirw('mysql2');
const con=mysql.createConnection(userdata);

const express=require('express');
const app=express();

app.use(express.static("sf"));

app.get("/getItem",(req,resp)=>{

    let input=req.query.x;

    let output ={itemfound:false,itemdetails:{bookid:14,bookname:"",price:100}}
    con.query('select * from book where bookid =?',[input],(error,res)=>{
        if (res.length >0){

            output.itemfound=true;
            output.itemdetails=res[0];

        }
        resp.send(output);
    });
});

app.get("/updateitem",(req,resp)=>{
    let output=false;
    let inpit={bookid:req.query.bookid,
    bookname:req.query.bookname,price:req.query.price};

    con.query('update book set bookname = ?,price =? where bookis=?'),
    [input.bookname,input,price,input.bookid],
    (error,res1)=>{
        if(error)
        {
            console.log("Error occured");

        }
        else if(res1.affectedRows>0){
            output=true;

        }

    };
});

app.get("/showall",(req,resp)=>{
    con query('select * from book',[],(error,rows)=>{
        
        resp.send(rows);
    });
});

app.listen(1000,function (){
    console.log("server listening at port 1000....");

});