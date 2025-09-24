//12. Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede reescribir mejor con async/await haciendo el código más limpio y mantenible.

//Anidamiento de Callbacks (Callback Hell)
function insertarUsuario(datos, callback) {
    db.insert(datos, function(err, userId) {
        if (err) return callback(err);

        const log = `Usuario registrado con ID ${userId}`;
        db.insertLog(log, function(err2) {
            if (err2) return callback(err2);
            callback(null, userId);
        });
    });
}

// Uso:
insertarUsuario({ nombre: "Juan" }, function(err, id) {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("Usuario creado con ID:", id);
    }
});

//Versión reescrita con async/await

async function registrarUsuario(datos) {
    try {
        const userId = await db.insert(datos); // Espera a que se cree el usuario
        const log = `Usuario registrado con ID ${userId}`;
        await db.insertLog(log); // Registra el log una vez que el usuario está creado
        return userId;
    } catch (error) {
        throw error; // Se puede manejar más arriba
    }
}

// Uso:
(async () => {
    try {
        const id = await registrarUsuario({ nombre: "Juan" });
        console.log("Usuario creado con ID:", id);
    } catch (err) {
        console.error("Error al registrar usuario:", err);
    }
})();
/*
Ventajas de async/await:

Código más lineal y parecido a instrucciones normales.
Evita la pirámide de callbacks.
Mucho más fácil de mantener, especialmente si hay más pasos involucrados.
Manejamos errores con try/catch.
*/