

const evenNumber =(number,cb)=>{
if(number%2===0){
    cb('even')
}else{
    cb('odd')
}


}
const send=(result)=>{
    console.log(result);
    
}
evenNumber(10,send)