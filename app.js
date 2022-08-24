const zaza = require("http")

const TsirkvaliObject={
    id:"zemoimereti",
    type:"village", 
    country:"georgia"
}



const server = zaza.createServer(function(req, res){
    if(req.url==="/"){
        res.write("to see Tsirkvali data please add '/tsirkvali' in the url ")
        res.end()
    }
    if(req.url === "/tsirkvali"){
        res.write(JSON.stringify(TsirkvaliObject))
        res.end()
    }
})

server.listen(5000)

console.log("listening on port 5000 ...")