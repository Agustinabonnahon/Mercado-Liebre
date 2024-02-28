const express= require ("express");
const app = express ();

const path= require ("path");
const publicPath=path.resolve(__dirname, "./public");
app.use (express.static (puclicPath));

const port = proess.env.PORT || 3001;
app.listen (port, () =>
console.log ('Servidor corriendo en Puerto $❴port❵')
);

app.get ("/", (req,res)=>❴
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
    ❵);

app.get ("/", (req,res)=>❴
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
    ❵);   

app.post("/registro", (req,res)=>❴
    res.send("Registro Exitoso!.")
    ❵);

app.get("/login", (req,res)=>❴
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
    ❵);    
