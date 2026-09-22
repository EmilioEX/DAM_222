/*******ESENCIALES*******/
//Lista de productos
const productos=[{producto: "Espresso", precio: 60},
                {producto: "Americano", precio: 50},
                {producto: "Cappuccino", precio: 55},
                {producto: "Latte", precio: 70},
                {producto: "Mocha", precio: 30}
];
//const productos2 = ["Espresso", "americano", "cappuccino", "latte", "mocha" ];
//Lista para guardar los pedidos
const listaPedidos={};
//Bloque para poder solicitar info en consola
const readline = require("readline");

/**********************/
async function main() {
    let SuperMenu;
    do {
        superMenu();
        //Se muestra el menú
        do {
            SuperMenu = await pregunta("Elija una opción: ");
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
            //Imprimir otro submenú pendiente
            if(ClienteMenu==1){//Consultar productos
                
            }
            if(ClienteMenu==2){//Crear pedido con productos

            }
            if(ClienteMenu==3){//Listar pedidos

            }
        }
    } while (SuperMenu!=0);
}
main();

//Estuve analizando el Super menú con las demás opciones para cada módulo y organizarnos qué hace cada quién()

/****FUNCIONES ADICIONALES****/
//Función que se encarga de mostrar los productos que se encuentran disponibles en un array
function mostrarProductos(array){
    console.log("\n******** PRODUCTOS ********");
    array.forEach((lista, posicion) => {
        console.log(`${posicion+1} : ${lista.producto} - Precio: $ ${lista.precio}`);
    });
    console.log("***************************");
}
//Función que muestra el menú principal de la cafetería
function superMenu(){
    console.log("\n******** BIENVENID@ A COFEE CODE  ********");
    console.log("\t1.- Entrar como Caja");
    console.log("\t2.- Entrar como Cocina");
    console.log("\t3.- Entrar como Cliente");
    console.log("\t0.- Salir del sistema");
}
/*Función que permite esperar al usuario para que conteste la "pregunta" 
o solicitud que se le ingresa a través del parámetro texto*/
function pregunta(texto) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    return new Promise(resolve => {
        rl.question(texto, respuesta => {
            rl.close();
            resolve(respuesta);
        });
    });
}
//Muestra la cantidad de pedidos que se encuentran registrados
function mostrarPedidos(array){
    console.log("\n******** PEDIDOS ********");
    //recorre todos los pedidos junto a los productos que contienen
    for(const nombrePedido in array) {
        console.log(`Pedido de : ${nombrePedido}`);
        const productos = array[nombrePedido].productos;
        if (productos.length === 0) {
            console.log("  (sin productos)");
        } else {
            for (let i = 0; i < productos.length; i++) {
                console.log(`\tProducto ${i + 1}: ${productos[i].producto} - $ ${productos[i].precio}`);
            }
        }
        console.log(`\tTotal Acumulado: $ ${array[nombrePedido].totalAcumulado}`);
        console.log("------------------------");
    }
    console.log("***************************");
}
function mostrarNombresPedidos(array){
    console.log("********** LISTA DE PEDIDOS **********")
    array.forEach((nombres, indice) =>{
        console.log(`${indice + 1}. ${nombres}`);
    });
    console.log("**************************************");
}

function agregarPedido(pedido, nombre, precio) {
    pedido.productos.push({ producto: nombre, precio: precio });
    pedido.totalAcumulado += precio;
}