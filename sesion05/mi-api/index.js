const express = require("express");

const app = express();


//Declarando el proceso a ejecutar cuando recibe una solicitud a '/' de tipo GET
app.get("/hi", (req,res)=> {
    res.send("Hi Hi Hi Hi");
});

//Ejecutando el servidor HTTP
// app.listen(8000);

const port = 8000;

app.listen(port, (err) => {
    if(!err) console.log("Escuchando peticiones HTTP en el puerto ",port);
    else console.error("Ocurrió un error ",err);
});