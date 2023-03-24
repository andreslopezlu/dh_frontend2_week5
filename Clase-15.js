// Vamos implementar esta funcion en el script de Clase 13 al principio.
// La idea es que antes de la carga de la window hagamos un chequeo del Storage.
/* -------------------------------------------------------------------------- */
/*                [10] FUNCION: chequeamos si existe un usuario               */
/* -------------------------------------------------------------------------- */

function chequearUsuarioValido() {

    // 👇 objeto que obtenemos del storage
    const usuario = JSON.parse(localStorage.getItem('user'));

    // chequeamos las propiedades del objeto
    
    
    if(usuario !== null){
        // 👇utilizamos destructuring para separar las variables
        const { email, password, rol, terminos } = usuario;
        console.log(usuario);
        console.log(`-> ${email}\n-> ${password}\n-> ${rol}\n-> ${terminos}`);
    }else{
        alert('Debe inciar sesion')
        location.replace('./')
        localStorage.clear();
    }

}

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
// 1. Levantar el objeto desde el localStorage con key=LISTADO
// 2. Devolver un array con nombre y apellido de las personas mayores a 18 años (hay que usar map y filter)
// 3. Volver a guardarlo en localStorage bajo el mismo key
// 4. Mostrar por consola el resultado, asegurándose de que sea el requerido
localStorage.setItem("LISTADO",
    `[{"nombre":"Pedro","apellido":"Gomez","nacimiento":"11/05/1998"},{"nombre":"Joaquin","apellido":"Sotto","nacimiento":"21/10/1985"},{"nombre":"Gabriela","apellido":"Perez","nacimiento":"02/02/2010"},{"nombre":"Agustina","apellido":"Estevez","nacimiento":"21/08/1986"},{"nombre":"Paola","apellido":"Serra","nacimiento":"22/09/2009"},{"nombre":"Juan","apellido":"Coprez","nacimiento":"12/04/1977"}]`);

function retornarMayores () {
    const usuarios = JSON.parse(localStorage.getItem("LISTADO"));
    console.log(usuarios)

    const date = new Date();
    const currentYear = date.getFullYear();

    const mayores = usuarios.filter(usuario => {
        const nacimiento = usuario.nacimiento.split("/")
        const anio = nacimiento[2]
        const edad = currentYear - anio;
        usuario['edad']=edad;
        return edad > 18;
    })

    const nombreApellidoMayores = mayores.map(persona => {
        const nombre = persona.nombre;
        const apellido = persona.apellido;
        const edad = persona.edad;
        return {Nombre: nombre, Apellido: apellido};
    })

    const mayoresEdad = localStorage.setItem('viejitos', JSON.stringify(nombreApellidoMayores));
}

retornarMayores();