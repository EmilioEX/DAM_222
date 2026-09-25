/*async function main(){
    console.log("Inician 5 seg");
    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            console.log(".")
        }, 2500);
    }
    console.log("También inicia en 5 seg");
}

main()*/


/*******ESENCIALES*******/
//Lista de productos
//const productos2 = ["Espresso", "americano", "cappuccino", "latte", "mocha" ];
//Lista para guardar los pedidos

//Bloque para poder solicitar info en consola
const readline = require("readline");
/**********************/
async function main() {
    let SuperMenu;
    const listaProductos=[{nombreProducto: "Espresso", precio: 60, categoría: "bebida", id:1},
                            {nombreProducto: "Americano", precio: 50, categoría: "bebida", id:2},
                            {nombreProducto: "Capuccino", precio: 50, categoría: "bebida", id:3},
                            {nombreProducto: "Latte", precio: 70, categoría: "bebida", id:4},
                            {nombreProducto: "Mocha", precio: 30, categoría: "bebida", id:5},
                            {nombreProducto: "Pastel de Fresa", precio: 40, categoría: "postre", id:6},
                            {nombreProducto: "Pastel de Chocolate", precio: 40, categoría: "postre", id:7}
    ];

    const listaPedidos=new Map();

    //listaPedidos.set("nombrePedido",{listaProductosDelPedido: [], subtotal: 0, status: false, descripcion: ""});

    const listaPromociones=[{productoEnPromocion: listaProductos[0] , mensaje: `2x1 en ${listaProductos[0].nombreProducto}`},
                            {productoEnPromocion: listaProductos[1] , mensaje: `2x1 en ${listaProductos[1].nombreProducto}`},
                            {productoEnPromocion: listaProductos[2] , mensaje: `2x1 en ${listaProductos[2].nombreProducto}`}
    ];

    do {
        superMenu();
        //Se muestra el menú
        do {
            SuperMenu = await preguntar("Elija una opción: ");
            if (SuperMenu<0 || SuperMenu>3) {
                console.log("===== ERROR: Escoja entre las opciones diponibles =====");
            }
        } while (SuperMenu<0 || SuperMenu>3);
        if (SuperMenu==0) {
            
        }
        if (SuperMenu==1) {
            
        }
        if (SuperMenu==2) {
            
        }
        if (SuperMenu==3) {
            await mainCliente(listaProductos, listaPedidos, listaPromociones);
        }
    } while (SuperMenu!=0);
}
main();

//Estuve analizando el Super menú con las demás opciones para cada módulo y organizarnos qué hace cada quién()

/****FUNCIONES ADICIONALES****/

function superMenu(){
    console.log("\n******** BIENVENID@ A COFFEE CODE II ********");
    console.log("\t1.- Entrar como Caja");
    console.log("\t2.- Entrar como Cocina");
    console.log("\t3.- Entrar como Cliente");
    console.log("\t0.- Salir del sistema");
}




async function mainCliente(listaProductos, listaPedidos, listaPromociones) {
    let opcionCliente;

    do {
        menuCliente();  
        do {
            opcionCliente = await preguntar("\nElija una opción: ");
            //Validacion que no sea extremadamente largo
            if (opcionCliente<0 || opcionCliente>4) {
                console.log(">>>>>>>> ERROR: Ingrese una opción válida <<<<<<<<");
            }
        } while (opcionCliente<0 || opcionCliente>4);
        console.log("==============================")
        if (opcionCliente==0) {
            console.log("\n>>>>>>>> Ha salido exitosamente del programa <<<<<<<<\n")
        }
        if (opcionCliente==1) {
            mostrarProductos(listaProductos);
        }
        if (opcionCliente==2) {
            await solicitarPedido(listaPedidos, listaProductos,listaPromociones);
        }
        if (opcionCliente==3) {
            mostrarPedidos(listaPedidos);
        }
        if (opcionCliente==4) {
            mostrarPromociones(listaPromociones);
        }
    } while (opcionCliente!=0);

}

//mainCliente();
/*
Simbología de Menús
(8 símbolos regularmente)
======= : Para menús principales (SuperMenu y menus de cliente, caja y cocina)
(12)/////// : Impresiones de estilo ticket 
------- : separadores de contenido dentro del mismo menú
%%%%%%% : Tickets de descuento 
<<<<<<< : Instrucciones / Advertencias
*/
function menuCliente(){
    console.log("\n======== MENÚ CLIENTE ========");
    console.log("\t1.- Consultar Productos");
    console.log("\t2.- Crear Pedido");
    console.log("\t3.- Listar-Ver Pedidos");
    console.log("\t4.- Ver promociones");
    console.log("\t0.- Salir/Volver al Menú Principal");
}
function menuEdicionCliente(){
    console.log("\n^^^^^^^^ MENÚ EDICIÓN CLIENTE ^^^^^^^^");
    console.log("\t1.- Agregar Producto");
    console.log("\t2.- Eliminar Producto");
    console.log("\t3.- Ver Pedido");
    console.log("\t0.- Salir/Volver al Menú Principal");
}
function preguntar(pregunta) {
    const rl = readline.createInterface({input: process.stdin, output: process.stdout});

    return new Promise(resolve => {
        rl.question(pregunta, respuesta => {
            rl.close();
            resolve(respuesta);
        });
    });
}
function mostrarProductos(array){
    console.log("\n//////////// PRODUCTOS ////////////");
    array.forEach((producto, i) => {
        console.log(`${i+1} : ${producto.nombreProducto} - Precio: $ ${producto.precio}`);
                //  1 : Espresso - Precio $ 60
    });
    console.log(  "///////////////////////////////////");
}
async function solicitarPedido(listaPedidos, listaProductos, listaPromociones){
    let nuevoPedido;//Nombre que se pondrá al nuevo pedido
    let eleccionProducto;//Es el ID del producto que se añadirá
    do {
        nuevoPedido = await preguntar("\nA nombre de quén es el pedido?: ");
        //Validacion de que exista un nombre y que no sea extremadamente largo
        if (nuevoPedido.length>15) {
            console.log(">>>>>>>> ERROR: Ingrese un nombre con máximo 15 carácteres <<<<<<<<");
        }
        if(nuevoPedido.length===0){
            console.log(">>>>>>>> ERROR: Ingrese un nombre <<<<<<<<");
        }
    } while (nuevoPedido.length>15||nuevoPedido.length===0);
    //Dentro del map se añade un nuevo pedido en el cual se asociarán una lista de productos así como un total acumulado de ese pedido
    listaPedidos.set(nuevoPedido, {listaProductosDelPedido: [], subtotal: 0, status:false, descripcion: ""});
    //Esta mal para map()>>>>listaPedidos[nuevoPedido]={productos: [], totalAcumulado: 0};
    mostrarProductos(listaProductos);
    console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");//70 símbolos
    console.log("INSTRUCCIONES:");
    console.log("\tEscriba el ID del producto para agregarlo al pedido");
    console.log("\tEscriba '0' en caso de que quiera finalizar el pedido");
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n");//Quedan mejor invertidos?
    do {
        do {
            eleccionProducto = await preguntar("Escriba el ID del producto: ");
            if (eleccionProducto<0 || eleccionProducto>listaProductos.length) {
                console.log(">>>>>>>> ERROR: Escriba un ID válido <<<<<<<<");
            }
        } while (eleccionProducto<0 || eleccionProducto>listaProductos.length);
        if(eleccionProducto!=0){
            agregarPedido(listaPedidos, listaProductos, nuevoPedido, (eleccionProducto-1));
        }
    } while (eleccionProducto!=0);
    aplicarPromociones(listaPedidos,listaPromociones,nuevoPedido);
    await editarPedido(listaPedidos,listaProductos, nuevoPedido);
    listaPedidos.get(nuevoPedido).descripcion="Pedido Recibido";
    console.log("\n>>>>>>>> Pedido Recibido exitosamente  <<<<<<<<\n")
}
async function editarPedido(listaPedidos, listaProductos, nombrePedido){
    let confirmacionPedido;
    console.log ("\n>>>>>>>> CONFIRMACIÓN DE PEDIDO <<<<<<<<")
    mostrarPedido(listaPedidos, nombrePedido);
    console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");//70 símbolos
    console.log("INSTRUCCIONES:");
    console.log("\tEscriba '1' en caso de querer editar algo");
    console.log("\tEscriba '0' si está de acuerdo con el pedido");
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n");//Quedan mejor invertidos?
    do {
        confirmacionPedido = await preguntar("Escriba su confirmación: ");
        if (confirmacionPedido<0 || confirmacionPedido>1) {
            console.log(">>>>>>>> ERROR: Escriba una opción  válida <<<<<<<<");
        }
    } while (confirmacionPedido<0 || confirmacionPedido>1);
    if(confirmacionPedido==1){
        let opcionEdicionCliente;
        let eleccionProducto;
        do {
            menuEdicionCliente();
            do {
                opcionEdicionCliente = await preguntar("Elija una opción: ");
                if (opcionEdicionCliente<0 || opcionEdicionCliente>3) {
                    console.log(">>>>>>>> ERROR: Escriba una opción  válida <<<<<<<<");
                }
            } while (opcionEdicionCliente<0 || opcionEdicionCliente>3);
            console.log("\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
            if (opcionEdicionCliente==0){
                //console.log("\n>>>>>>>> Ha salido del menú de edición <<<<<<<<\n")
            }
            if (opcionEdicionCliente==1){
                mostrarProductos(listaProductos);
                mostrarPedido(listaPedidos, nombrePedido);
                console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");//70 símbolos
                console.log("INSTRUCCIONES:");
                console.log("\tEscriba el ID del producto para agregarlo al pedido");
                console.log("\tEscriba '0' en caso de que quiera finalizar la edición del pedido");
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n");//Quedan mejor invertidos?
                do {
                    do {
                        eleccionProducto = await preguntar("Escriba el número de producto para añadirlo: ");
                        if (eleccionProducto<0 || eleccionProducto>listaProductos.length) {
                            console.log(">>>>>>>> ERROR: Escriba un producto existente <<<<<<<<");
                        }
                    } while (eleccionProducto<0 || eleccionProducto>listaProductos.length);
                    if(eleccionProducto!=0){
                        agregarPedido(listaPedidos, listaProductos, nombrePedido, (eleccionProducto-1));
                    }
                } while (eleccionProducto!=0);
            }
            if (opcionEdicionCliente==2){
                mostrarPedido(listaPedidos, nombrePedido);
                console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");//70 símbolos
                console.log("INSTRUCCIONES:");
                    console.log("\tEscriba el número de producto para eliminarlo");
                    console.log("\tEscriba '0' en caso de que quiera finalizar la edición del pedido");
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n");//Quedan mejor invertidos?
                do {
                    do {
                        eleccionProducto = await preguntar("Escriba el número de producto: ");
                        if (eleccionProducto<0 || eleccionProducto>listaPedidos.get(nombrePedido).listaProductosDelPedido.length) {
                            console.log(">>>>>>>> ERROR: Escriba un producto válido <<<<<<<<");
                        }
                    } while (eleccionProducto<0 || eleccionProducto>listaPedidos.get(nombrePedido).listaProductosDelPedido.length);
                    if(eleccionProducto!=0){
                        eliminarAlPedido(listaPedidos, nombrePedido, (eleccionProducto-1));
                        mostrarPedido(listaPedidos, nombrePedido);
                    }
                } while (eleccionProducto!=0);

            }
            if (opcionEdicionCliente==3){
                mostrarPedido(listaPedidos, nombrePedido);
            }
        } while (opcionEdicionCliente!=0);
        

    }
}   
function agregarPedido(listaPedidos, listaProductos, nombrePedido, idProducto) {
    listaPedidos.get(nombrePedido).listaProductosDelPedido.push(listaProductos[idProducto]);
    listaPedidos.get(nombrePedido).subtotal = listaPedidos.get(nombrePedido).listaProductosDelPedido.reduce((subtotal, producto) =>{
        return subtotal + producto.precio;
    },0);
    console.log(`\n>>>>>>>> Se ha añadido exitosamente ${listaProductos[idProducto].nombreProducto} <<<<<<<<\n`)
}
function eliminarAlPedido(listaPedidos, nombrePedido, idProducto){
    console.log(`\n>>>>>>>> Se ha eliminado exitosamente ${listaPedidos.get(nombrePedido).listaProductosDelPedido[idProducto].nombreProducto} <<<<<<<<\n`);
    const pedido = listaPedidos.get(nombrePedido);
    pedido.listaProductosDelPedido.splice(idProducto,1);
    pedido.subtotal=pedido.listaProductosDelPedido.reduce((subtotal,producto)=>{
        return subtotal + producto.precio;
    },0);
}
function mostrarPedidos(listaPedidos){
    if (listaPedidos.size === 0) {
        console.log("\n//////////// PEDIDOS ////////////");
        console.log("\n\t>>>>>>>> No hay pedidos registrados en este momento <<<<<<<<\n")
        console.log("///////////////////////////////////");
    }else{
        console.log("\n//////////// PEDIDOS ////////////");
        //recorre todos los pedidos junto a los productos que contienen
        listaPedidos.forEach((pedido, nombrePedido) => {
            console.log(`Pedido de : ${nombrePedido}`);
            //Ok, mañana
            if (pedido.listaProductosDelPedido.length===0) {
                console.log(">>>>>>>> Sin productos");
            } else{
                pedido.listaProductosDelPedido.forEach((producto, i) => {
                    if (producto.precio == 0) {
                        console.log(`\tProducto ${i + 1}: ${producto.nombreProducto} - $ ${producto.precio} - % promoción aplicada automáticamente`);
                    } else {
                        console.log(`\tProducto ${i + 1}: ${producto.nombreProducto} - $ ${producto.precio}`);
                    }
                });
            }
            console.log(`\t> Total Acumulado: $ ${pedido.subtotal}`);
            console.log(` Estatus: ${pedido.descripcion}`);
            console.log("--------------------");//20
        });
        console.log("///////////////////////////////////");
    }
}
function mostrarPedido(listaPedidos, nombrePedido){
    console.log("\n//////////// PEDIDO ACTUAL ////////////");
    const pedido = listaPedidos.get(nombrePedido);
    console.log(`Pedido de : ${nombrePedido}`);
    
    if (pedido.listaProductosDelPedido.length === 0) {
        console.log(">>>>>>>> Sin productos");
    } else {
        pedido.listaProductosDelPedido.forEach((producto, i) => {
            if (producto.precio == 0) {
                console.log(`\tProducto ${i + 1}: ${producto.nombreProducto} - $ ${producto.precio} - % promoción aplicada automáticamente`);
            } else {
                console.log(`\tProducto ${i + 1}: ${producto.nombreProducto} - $ ${producto.precio}`);
            }
        });
    }
    console.log(`\t> Total Acumulado: $ ${pedido.subtotal}`);
    console.log("--------------------");
    console.log("/////////////////////////////////////////");
}

function mostrarPromociones(listaPromociones){
    console.log("\n% % % % PROMOCIONES % % % %");
    if (listaPromociones.length === 0) {
        console.log("\t>>>>>>>> No hay promociones disponibles <<<<<<<<");
        console.log("% % % % % % % % % % % % % %");
    } else {
        listaPromociones.forEach((promocion) => {
            const producto = promocion.productoEnPromocion;
            console.log(`\t${promocion.mensaje}`);
            console.log("--------------------");
        });
        console.log("% % % % % % % % % % % % % %");
    }
}

//////////////////////////
function aplicarPromociones(listaPedidos, listaPromociones, nombrePedido){
    const pedido = listaPedidos.get(nombrePedido);

    //coincidencias entre promociones y productos^2
    listaPromociones.forEach(promo => {
        const productoEnPromocion = promo.productoEnPromocion;
        pedido.listaProductosDelPedido.forEach(producto => {
        // Producto original a gratis y quitamos su precio
            if (producto.id === productoEnPromocion.id) {
                const productoGratis = {nombreProducto: productoEnPromocion.nombreProducto , precio: productoEnPromocion.precio,
 categoria: productoEnPromocion.categoria, id:productoEnPromocion.id};
                productoGratis.precio=0;
                pedido.listaProductosDelPedido.push(productoGratis);
            }
        });
    });
    //recalcular otra vez
    pedido.subtotal = pedido.listaProductosDelPedido.reduce((subtotal, producto) => {
        return subtotal + producto.precio;
    }, 0);
}