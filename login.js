const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public')); 

const defaultCredentials = {
    username: 'Zish',
    password: 'Zish123',
};

app.get("/login",(req,res)=>{
   
    res.sendFile(__dirname+"/public/loginl.html"); 
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === defaultCredentials.username && password === defaultCredentials.password) {
       
    //   res.send("Successfully log in!");
    res.redirect("check.html");
    //redirect from here to client page
    } else {
      
        res.status(401).send('Login failed!'); 
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});