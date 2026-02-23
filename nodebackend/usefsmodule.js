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

function readData(){
    let statusmsg = "";
    try{
        const data = fs.readFileSync("student.txt",{encoding:'utf-8'})
        statusmsg = data;
    }catch(e){
        statusmsg = e;
    }
    return statusmsg;
}
function deleteFile() {
    let statusmsg = ""
    try {
        fs.unlinkSync("student.txt")
        statusmsg = "File deleted successfully"
    } catch (e) {
        statusmsg = e
    }
    return statusmsg;

}

function dataCopy(){
    let copymsg = ""
    try{
        const data = fs.readFileSync("StudentCSE.json")
        fs.writeFileSync("StudentCSEAIML.json",data)
        copymsg="Data is written successfully!!"
    }catch(e){
        copymsg=e
    }
    return copymsg
}
async function fileReadAsync(){
    let statusmsg = ""
    try{
      statusmsg = await fs1.readFile('student.txt',{encoding:'utf-8'});
    }catch(e){
        statusmsg = e
    }
    return statusmsg;
}

const obj = {writeData,readData,deleteFile,dataCopy, fileReadAsync}

module.exports=obj;
