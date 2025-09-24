// 13. Proporcione un ejemplo concreto donde el anidamiento de promesas se puede reescribir mejor con async/await haciendo el código más limpio y mantenible.

/*
Escenario realista:

Supón que tienes un sistema que:
Autentica a un usuario con su email y contraseña.
Luego, obtiene sus datos de perfil.
Después, carga los permisos que tiene asignados.

Cada paso depende del anterior.
*/

// Versión con promesas anidadas (chaining):

autenticarUsuario('correo@ejemplo.com', '1234')
    .then((usuario) => {
        return obtenerPerfil(usuario.id);
    })
    .then((perfil) => {
        return obtenerPermisos(perfil.rol);
    })
    .then((permisos) => {
        console.log("Permisos cargados:", permisos);
    })
    .catch((error) => {
        console.error("Ocurrió un error:", error);
    });
/*
Problemas:

El código es más difícil de leer cuando hay muchos .then().
Si se agregan más pasos, se complica aún más.
Es más difícil usar lógica condicional o ciclos dentro de este flujo.
*/

//Misma lógica reescrita con async/await:

async function iniciarSesion(email, password) {
    try {
        const usuario = await autenticarUsuario(email, password);
        const perfil = await obtenerPerfil(usuario.id);
        const permisos = await obtenerPermisos(perfil.rol);
        console.log("Permisos cargados:", permisos);
    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

// Uso
iniciarSesion('correo@ejemplo.com', '1234');

/*
Ventajas de async/await:

Código más limpio, lineal y fácil de leer.
Manejas errores con un solo try/catch.
Puedes usar condicionales, bucles y estructuras normales de control sin romper la secuencia.
Ideal para operaciones dependientes y asincrónicas.
*/