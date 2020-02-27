const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const axios = require('axios')
app.use(cors())

app.get('/', (req, res) => {
        axios.get('https://kbfafxfdz2.execute-api.us-east-1.amazonaws.com/one')
        .then(resp=>{
        res.send(resp.data.body);
    
})
.catch(function(err){
    console.log(err);
})

})
    


app.listen(port, () => console.log(`Example app listening on port ${port}!`))