const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Numero par o impar
app.get('/par-impar/:a',(req,res)=>{
    let a = parseInt(req.params.a);
    if(a % 2 === 0){
        res.send(`El numero ${a} es par`);
    }else{
        res.send(`El numero ${a} es impar`);
    }
})

//Mayor de edad
app.get('/mayor-edad/:edad',(req,res)=>{
    let edad = parseInt(req.params.edad);
    if(edad>=18){
        res.send(`La persona es mayor de edad`);
    }else{
        res.send(`La persona es menor de edad`);
    }
})

// Calculadora
app.get('/calculadora/:operacion/:a/:b',(req,res) => {
    let operacion = req.params.operacion;
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    let resultado;
    switch(operacion){
        case 'suma':
            resultado = a + b;
            break;
        case 'resta':
            resultado = a - b;
            break;
        case 'multiplicacion':
            resultado = a * b;
            break;
        case 'division':
            if(b === 0){
                res.send('No se puede dividir entre cero');
                return;
            }
            resultado = a / b;
            break;
        default:
            res.send('Operacion no valida');
            return;
    }
    res.send(`El resultado de la operacion entre ${a} y ${b} es: ${resultado}`);
});

//Tabla de multiplicar
app.get('/tabla/:a',(req,res) =>{
    let a = parseInt(req.params.a);
    let tabla = '';
    for(let i=1; i<=10; i++){
        tabla += `${a} x ${i} = ${a*i}<br>`;
    }
    res.send(tabla);
});

//Calificacion
app.get('/calificacion/:b',(req,res) =>{
    let b = parseFloat(req.params.b);
    if(b>=70){
        if(b>=90){
            res.send('Excelente');
            return;
        }
        if(b>=80){
            res.send('Muy bien');
            return;
        }
        res.send('Aprobado');
    }else{
        res.send('Reprobado');
    }
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});