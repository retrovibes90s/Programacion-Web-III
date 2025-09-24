// 10. ¿Cuando es conveniente utilizar un callback, y cuando es necesario utilizar una promesa?
/*

Cuándo usar un Callback

    Operaciones asíncronas simples:
    Cuando necesitas ejecutar una función después de que termine una operación, pero la secuencia no es compleja. 

    Manejo de eventos:
    Los callbacks son ideales para manejar eventos como clics de usuario, donde la función se ejecuta solo cuando el evento ocurre. 
    
    Código heredado:
    Muchas APIs y bibliotecas más antiguas utilizan callbacks, por lo que deberás usarlos al interactuar con ese código. 
    
    Notificaciones sincrónicas o múltiples:
    Algunos casos de uso, como las llamadas a Array.prototype.map(), que son sincrónicas, o para eventos que pueden ocurrir más de una vez (como un listener de evento), requieren callbacks. 

Cuándo usar una Promesa

    Operaciones asíncronas encadenadas:
    Cuando necesitas ejecutar tareas asíncronas en secuencia y el resultado de una depende de la anterior. 

    Manejo de errores mejorado:
    Las promesas tienen un mecanismo de gestión de errores integrado (.catch()) que es más limpio y robusto que las comprobaciones manuales en los callbacks. 
    
    APIs y bibliotecas modernas:
    La mayoría de las APIs y bibliotecas modernas de JavaScript utilizan promesas para manejar la asincronía. 

    Evitar el "Callback Hell":
    Para evitar la anidación excesiva de callbacks, que hace el código difícil de leer y mantener, las promesas ofrecen una alternativa más estructurada. 
    Código más legible y mantenible:
    Las promesas, especialmente cuando se combinan con async/await, proporcionan una sintaxis más intuitiva para escribir y entender el código asíncrono
*/