import express from 'express'


const PORT = 8080;


const app = express();

app.listen(PORT, ()=>{
    console.log('Servidor funcionando en el puerto: ' + PORT)
})


app.get('/bienvenida', (req,res)=>{

    res.send(`<h1 style="color:blue">Bienvenido a mi Sitio</h1>`)
})

app.get('/usuario', (req,res)=>{
    res.send({
        nombre: 'Lionel',
        apellido: 'Messi',
        edad:35,
        correo: 'D10S@mail.com'
    })
})