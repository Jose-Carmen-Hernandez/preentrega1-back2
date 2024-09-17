# Primera preentrega:
-Crear el modelo User con los siguientes campos:
*first_Name: String,
*last_Name: String,
*email: String (unico),
*age: Number,
*password: String (hash),
*cart: Id con referencia a Carts,
*role: String (default 'user')

-Encriptar la contraseña usando bcrypt ¨hashSync"
-Desarrollar las estrategias de Passport para que funcionen con el modelo de usuario
-Implementar un sistema de login de usuario con jwt

# Se debe entregar:
-Desarrollar una estrategia "current" para extraer la cookie que contiene el token y con dicho token obtener el usuario asociado al token, devolver al usuario asociado, en caso contrario devolver un error de Passport, utilizar un extraxtor de cookie.
-Agregar al router /api/sessions la ruta /current, la cual validara al usuario logueado y devolvera sus datos en una respuesta (Asociados al jwt)

-Link al repositorio de Github sin la carpeta node_modules ni el archivo .env