const productos = [
    { nombre:"pantalon", precio: 498, inventario: 10},
    { nombre:"camisa", precio: 449, inventario: 8},
    { nombre:"bermuda", precio: 349, inventario: 5},
    { nombre:"playera", precio: 249, inventario: 10},
    { nombre:"sudadera", precio: 799, inventario: 4},
    { nombre:"chamarra", precio: 999, inventario: 8},
    { nombre:"traje", precio: 2299, inventario: 7},
    { nombre:"abrigo", precio: 1799, inventario: 3},
    { nombre:"tenis", precio: 1199, inventario: 8},
];
  // Se crea carrito de compras vacio, donde se agregaran los productos que se seleccionen.
  const carritoDeCompras = [];
  let eleccion = "";
  
  function agregarCarrito(nombreDelProducto, cantidad) {
    const producto = productos.find((item) => item.nombre === nombreDelProducto);
  
    if (producto) {
      const { nombre, precio, inventario } = producto;
  
      if (inventario < cantidad) {
        alert(`No contamos con suficientes piezas de ${nombre}.`);
        return;
      }
  
      carritoDeCompras.push({ nombre, precio, cantidad });
      producto.inventario -= cantidad;
  
      alert(`Se añadio ${cantidad} ${nombre}(s) al carrito de compras.`);
    } else {
      alert("Producto invalido.");
    }
  }

  function mostrarProductos() {
    let listaDeProductos = "Lista de productos de The Powerpuff Girls Bazar:\n";
    for (const producto of productos) {
      listaDeProductos += `${producto.nombre} || Precio: $${producto.precio} || Inventario: ${producto.inventario}\n`;
    }
    alert(listaDeProductos);
  }
  
  function sumadorPrecios() {
    let sumaFinal = 0;
    for (const item of carritoDeCompras) {
      sumaFinal += item.precio * item.cantidad;
    }
    return sumaFinal;
  }

  function menu() {
    do{
        eleccion = prompt(`${nombre} escribe el numero de la accion que quieras realizar:\n1) Ver y agregar productos al carrito\n2) Ver carrito\n3) Proceder a pagar o salir\n`);
        switch (eleccion){
            case "1":
                mostrarProductos();
                const nombreDelProducto = prompt("Ingresa el nombre del producto que deseas agregar al carrito:").toLowerCase();
                const cantidad = parseInt(prompt("¿Cuantas piezas deseas agregar?"));
                agregarCarrito(nombreDelProducto, cantidad);
                break;
            case "2":
                if (carritoDeCompras.length === 0) {
                    alert("No has agregado ningun producto a tu carrito de compras, animate a agregar productos!!!");
                  } else {
                    alert("Has agregado los siguientes productos a tu carrito de compras:");
                    for (const item of carritoDeCompras) {
                      alert(`${item.cantidad} ${item.nombre}(s) con un costo de $${item.precio} por pieza.`);
                    }
                    alert(`Total del carrito de compras: $${sumadorPrecios()}`);
                  }
                break;
            case "3":
                alert(`Gracias por tu pago de $${sumadorPrecios()}!`);
                break;
            default:
                alert("Entrada invalida. Ingrese uno de los numeros del listado");
        }
      }while(eleccion !== "3")
  }

let nombre = prompt("Bienvenido a The Powerpuff Girls Bazar, donde podras encontrar ropa nueva y de segunda mano. \n¿Cual es tu nombre?");
// let usuario = prompt(`Hola ${nombre}, para una mejor experencia favor de registrarte. \n¿Cual te gustaria que fuera tu nombre de usuario?`);
// let contrasena = prompt(`Perfecto, tu usuario es ${usuario}.\n ¿Cual te gustaria que fuera tu contraseña?`);
// alert(`La contraseña ingresada es: ${contrasena}.\nUsuario creado con éxito`)
  
// function inicioSesion (){
//     alert("Inicia sesión para ver el contenido.");
//     let userName = prompt("Ingresa tu nombre de usuario:");

//     do{
//         prompt("Usuario incorrecto, ingresa el nombre de usuario tal cual como lo creaste:");
//     } while (userName === "usuario")
    
//     let password = prompt(`Hola ${usuario}, ingresa la contraseña`);
//     do{
//         prompt("Contraseña incorrecta, ingresa la contraseña tal cual como lo escribiste:");
//     } while (password === "contrasena")
    
//     alert(`Hola ${userName}, gracias por registrate e iniciar sesión. \nA continuacion te mostramos la lista de productos.`);
// }
// inicioSesion ();

alert(`Hola ${nombre} a continuacion se te mostrara un menú interactivo`);
menu();
//Deje comentada la parte del inicio de sesion ya que hace muy larga la prueba del codigo y la veo poco utilizable actualmente//




  