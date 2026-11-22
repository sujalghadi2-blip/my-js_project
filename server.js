let http=require("http")

let server=http.createServer((req,res)=>{
    if (req.method==="OPTIONS"){
        res.setHeader("Access-Control-Allow-Origin", "*");
res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.end()
      console.log("server is end")
      return;  
    }
    else if(req.method==="POST"){
        let body=""
        req.on("data",(chunks)=>{
           body+=chunks;
        })
        req.on("end",()=>{
            let student=JSON.parse(body)
            res.end()
            console.log("student details")
            console.log(student)
        })
    }

})
server.listen(5500,()=>{
    console.log("server is ready")
})