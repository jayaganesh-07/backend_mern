import http from 'http'
 
console.log(http);



const app = http.createServer()
const PORT= 3000 
app.listen(PORT,()=>{
console.log(`server running on http://localhost:${PORT}`);

})

