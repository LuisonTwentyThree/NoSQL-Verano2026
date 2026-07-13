# Actividad 1 --Duran Ocampo Luis Carlos



# Creacion de libro

Método HTTP: POST
URI:/peliculas
Json enviado:
{
    "id":1,
    "nombre": "Bastardos sin Gloria",
    "director":"Quentin Tarantino",
    "año":2009,
    "duracion":155,
    "genero":"Bélico"

}

Json recibido:
{
    "code":200,
    "msg":"Pelicula creada"
}

# Consultar Pelicula
Metodo HTTP: GET
URI:/peliculas/1
Json enviado:
{
    "id":1
}
Json recibido:
{
    "code":200,
    data:{
        "id":1,
        "nombre": "Bastardos sin Gloria",
        "director":"Quentin Tarantino",
        "año":2009,
        "duracion":155,
        "genero":"Bélico"
    }
}

# Actualizar Pelicula 
Metodo HTTP:PUT
URI: /peliculas/2
Json enviado:
{
    "id":1
    "genero":"Acción"
}

Json recibibido:
{
    "code":200,
    "msg":"Pelicula actualizada exitosamente"
}

 # Eliminar Pelicula

 Metodo HTTP: DELETE
 URI: /peliculas/3
 Json enviado:
 {

 }
  
Json recibido: 
{
    "code":200,
    "msg":"Pelicula eliminada"
}
