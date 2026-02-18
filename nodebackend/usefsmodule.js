const fs = require('fs')
const fs1 = require('fs').promises

function writeData(){
    let stautsmessage = "";
    try{
        fs.writeFileSync("student.txt","welcome to fs module")
        console.log("Data is written successfully!!")
        stautsmessage="Data is written successfully!!"
    }catch(e){
        console.log("Error is :"+e)
        stautsmessage="Error is :"+e;
    }
    return stautsmessage;
}

module.exports=writeData;