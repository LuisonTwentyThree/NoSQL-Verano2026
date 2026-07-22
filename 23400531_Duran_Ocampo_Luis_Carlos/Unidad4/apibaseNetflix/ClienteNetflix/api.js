const API_URL = "https://apinetflix-psi.vercel.app";

// Obtener películas
async function obtenerPeliculas() {

    const respuesta = await fetch(`${API_URL}/peliculas`);

    if (!respuesta.ok) {
        throw new Error("Error al consultar las películas");
    }

    return await respuesta.json();

}

// Agregar película
async function agregarPelicula(pelicula) {

    const respuesta = await fetch(`${API_URL}/peliculas`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(pelicula)
    });

    if (!respuesta.ok) {

        // Intenta leer el mensaje real que manda el servidor,
        // en vez de mostrar siempre un error genérico.
        let detalle = "Error al guardar la película";

        try {
            const cuerpo = await respuesta.json();
            detalle = cuerpo.mensaje || detalle;
        } catch (_) {
            // el servidor no devolvió JSON, se mantiene el mensaje genérico
        }

        throw new Error(detalle);

    }

    return await respuesta.json();

}